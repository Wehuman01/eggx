/**
 * Pure helpers behind the offer share card. Kept out of the component so the
 * text layout rules stay unit-testable without a canvas.
 */

/**
 * Greedy word wrap that never exceeds maxLines: overflow is cut off with an
 * ellipsis on the last visible line. Words longer than maxWidth (long slugs,
 * URLs) are hard-broken by character so they can never stall the wrap — this
 * also gives CJK text its natural per-character wrapping, since it has no
 * spaces to split on. `measure` is injected so tests can run without a canvas.
 */
export function wrapToFit(
  measure: (text: string) => number,
  text: string,
  maxWidth: number,
  maxLines: number,
): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = "";

  const pushCurrent = () => {
    if (current) lines.push(current);
    current = "";
  };

  const fits = (candidate: string) => measure(candidate) <= maxWidth;

  for (const word of words) {
    let chunk = word;
    while (!fits(chunk) && chunk.length > 1) {
      pushCurrent();
      let cut = chunk.length;
      while (cut > 1 && !fits(chunk.slice(0, cut))) cut -= 1;
      lines.push(chunk.slice(0, cut));
      chunk = chunk.slice(cut);
    }

    const candidate = current ? `${current} ${chunk}` : chunk;
    if (fits(candidate)) {
      current = candidate;
      continue;
    }
    pushCurrent();
    current = chunk;
  }
  pushCurrent();

  if (lines.length <= maxLines) return lines;

  const kept = lines.slice(0, maxLines);
  let last = kept[maxLines - 1];
  while (last.length > 0 && !fits(`${last}…`)) last = last.slice(0, -1);
  kept[maxLines - 1] = `${last}…`;
  return kept;
}

/**
 * Split an absolute URL into the two lines the card prints under the QR
 * side: host and path. Path keeps search and hash — offer cards deep-link
 * to a page anchor — and collapses to "" for a bare host.
 */
export function splitUrlForCard(url: string): { host: string; path: string } {
  try {
    const parsed = new URL(url);
    const raw = `${parsed.pathname}${parsed.search}${parsed.hash}`;
    return { host: parsed.host, path: raw === "/" ? "" : raw };
  } catch {
    // Non-URL fallback (e.g. a dev misconfiguration): show it as one blob.
    return { host: url, path: "" };
  }
}
