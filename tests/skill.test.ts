import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";

const repo = path.join(__dirname, "..");
const skillDir = path.join(repo, "skills", "eggx");
const skillPath = path.join(skillDir, "SKILL.md");

function frontmatter(text: string): Record<string, string> {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  expect(match, "SKILL.md must start with a frontmatter block").toBeTruthy();
  const fields: Record<string, string> = {};
  for (const line of match![1]!.split(/\r?\n/)) {
    const field = line.match(/^([A-Za-z_-]+):\s*(.+)$/);
    if (field) {
      fields[field[1]!] = field[2]!;
    }
  }
  return fields;
}

describe("eggx agent skill package", () => {
  it("skills/eggx/SKILL.md exists", () => {
    expect(fs.existsSync(skillPath), `missing ${skillPath}`).toBe(true);
  });

  it("frontmatter declares name eggx and a trigger description", () => {
    const fields = frontmatter(fs.readFileSync(skillPath, "utf-8"));
    expect(fields.name).toBe("eggx");
    expect(fields.description?.length ?? 0).toBeGreaterThan(30);
  });

  it("frontmatter carries a version under metadata", () => {
    const text = fs.readFileSync(skillPath, "utf-8");
    expect(text).toMatch(/^  version:\s*"\d+\.\d+\.\d+"$/m);
  });

  it("folder name is aweskill-installable (lowercase slug, no spaces)", () => {
    // aweskill derives the installed skill name from the directory name.
    expect(path.basename(skillDir)).toMatch(/^[a-z0-9._-]+$/);
  });

  it("SKILL.md pins allowed hosts and documents the API workflow", () => {
    const text = fs.readFileSync(skillPath, "utf-8");
    expect(text).toContain("eggx.wehuman.top");
    expect(text).toContain("/api/v1/offers.json");
    expect(text).toContain("安全边界");
  });

  it("package ships the API reference and a human README", () => {
    expect(fs.existsSync(path.join(skillDir, "references", "api.md"))).toBe(true);
    expect(fs.existsSync(path.join(skillDir, "README.md"))).toBe(true);
  });

  it("README documents the aweskill install command", () => {
    const text = fs.readFileSync(path.join(skillDir, "README.md"), "utf-8");
    expect(text).toContain("aweskill install wehuman01/eggx --skill eggx");
    expect(text).toContain("aweskill update eggx");
  });
});
