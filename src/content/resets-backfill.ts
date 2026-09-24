// Codex 重置记录 · 2026-06-12 之前的历史回填（冻结文件，一次性生成，勿自动重写）。
// 来源：codex-resets.com 公开 API（https://codex-resets.com/api/v1/resets），
// 其条款为免费使用、无需 Key、展示处署名链接（见 https://codex-resets.com/api/docs）。
// 回填集为 23 条全员重置公告帖（2025-09-17 至 2026-06-04，均为已执行的历史事件），
// 与实时源 AIHOT 的追溯窗口（自 2026-06-12 起）不重叠；tests 会按原推 URL 拦截重复。
// 与实时数据的口径差异：本段时间为公告时间（无单独核实的执行日期、无确认帖）；
// 更早的「发重置卡」类事件上游未收录，故本段只含全员重置。
// zh 引文为 eggx 自译（非 AIHOT 译文，无版权牵扯）；en 为 Tibo 原文节选——
// 去掉了文末 t.co 短链及被上游截断的不完整句尾。时间均为北京时间 UTC+8。

import { validateResets, type ResetSnapshot } from "../lib/resets";

export const backfillSnapshot: ResetSnapshot = {
  checkedAt: "2026-09-24T12:11:44.000+08:00",
  historyFrom: "2025-09-17T00:00:00.000+08:00",
  source: "https://codex-resets.com",
  curator: "codex-resets.com",
};

export const resetsBackfill = validateResets(
[
  {
    "id": "bf-2062329981548802523",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-06-04T08:25:58.000+08:00",
        "url": "https://x.com/thsottiaux/status/2062329981548802523",
        "zh": "大家好。过去 24 小时里我们接连处理了三起影响 Codex 稳定性的小故障，三次都嫌多，我们正在积极整改，确保不再重演。我已为所有付费计划重置了 Codex 的用量限额，愿 token 再次畅流。",
        "en": "Hi. Over the last 24 hours we had three separate small incidents that affected Codex reliability. Those are three too many and we are taking active steps for them to not reproduce.\n\nI have reset usage limits for Codex across all paid plans. May the tokens flow again."
      }
    ]
  },
  {
    "id": "bf-2061106703446450392",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-05-31T23:25:06.000+08:00",
        "url": "https://x.com/thsottiaux/status/2061106703446450392",
        "zh": "Codex 用量限额已为所有付费 ChatGPT 订阅重置，大家的周限额和小时限额应已回到 100%。愿今天 token 们大展身手，玩得开心。",
        "en": "The Codex usage limits have been reset for all paid ChatGPT subscriptions. You should be back to 100% weekly and 100% hourly limits.\n\nLet the tokens do incredible things today and have fun."
      }
    ]
  },
  {
    "id": "bf-2058280452851638313",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-05-24T04:14:35.000+08:00",
        "url": "https://x.com/thsottiaux/status/2058280452851638313",
        "zh": "有人注意到 Codex 的限额消耗得更快了。我们定位到原因：一个已回滚的优化在长会话压缩时影响了缓存命中率。问题已修复，并且我们已为所有账户重置了用量限额。周末愉快。",
        "en": "Some of you noticed limits drained faster in Codex, we root caused it to an optimization that we rolled back that had an impact on cache hit rates when compacting across long running sessions.\n\nWe fixed this and have now reset usage limits for all accounts. Enjoy the weekend."
      }
    ]
  },
  {
    "id": "bf-2055707616605835333",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-05-17T01:51:03.000+08:00",
        "url": "https://x.com/thsottiaux/status/2055707616605835333",
        "zh": "Codex 用量限额已在所有付费计划上重置。周末愉快！",
        "en": "Codex usage limits have now been reset across all paid plans. Enjoy the weekend!"
      }
    ]
  },
  {
    "id": "bf-2048997818673537399",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-04-28T13:28:43.000+08:00",
        "url": "https://x.com/thsottiaux/status/2048997818673537399",
        "zh": "「别为了好玩就重置 Codex 限额，那是要花钱的。」「别为了好玩就重置 Codex 限额，那是要花钱的。」……但这波氛围实在不错……为庆祝这美好的一周、让大家用 GPT-5.5 多造点东西，我已为所有付费计划重置了 Codex 限额。请享用。",
        "en": "Don't just reset Codex rate limits for fun, it costs money.\nDon't just reset Codex rate limits for fun, it costs money.\n\n... but the vibes are good ...\n\nI have reset Codex rate limits for ALL paid plans to celebrate a good week and allow everyone to build more with GPT-5.5. Enjoy"
      }
    ]
  },
  {
    "id": "bf-2046367145588916687",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-04-21T07:15:21.000+08:00",
        "url": "https://x.com/thsottiaux/status/2046367145588916687",
        "zh": "Codex 故障已缓解，正在恢复。持续了约 10 分钟——这次排障 Codex 自己也帮了忙，不过关键洞察最终还是来自人类。为打扰致歉，限额重置马上就来。",
        "en": "Codex incident is mitigated, seeing recovery. Lasted about 10 mins, Codex itself helped with the remediation, but ultimately the insight came from a human this time.\n\nApologies for the disruption and rate limit reset incoming."
      }
    ]
  },
  {
    "id": "bf-2044943514832871564",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-04-17T08:58:21.000+08:00",
        "url": "https://x.com/thsottiaux/status/2044943514832871564",
        "zh": "大家好！为庆祝 Codex 一周岁，我允许 Codex 自己把所有计划的限额都重置了。尽情体验新功能吧。",
        "en": "Hi! To celebrate its 1-year anniversary, I have allowed Codex to reset its own rate limits across all plans. Enjoy all the new features."
      }
    ]
  },
  {
    "id": "bf-2042299371602264319",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-04-10T01:51:28.000+08:00",
        "url": "https://x.com/thsottiaux/status/2042299371602264319",
        "zh": "我们做到了——100 美元计划来了！它应该是很多人的甜点位，自带大量 Codex 额度。另外正如昨天所说，我们也会再次重置限额。继续造起来！",
        "en": "We did it, say hi to the $100 plan!\n\nIt should be the sweet spot for a ton of you. It comes with a ton of codex usage. And yes we are resetting the limits again too as I mentioned yesterday. Let's keep building!"
      }
    ]
  },
  {
    "id": "bf-2041655710346572085",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-04-08T07:13:48.000+08:00",
        "url": "https://x.com/thsottiaux/status/2041655710346572085",
        "zh": "每周使用 Codex 的人数已达三百万——距两百万人还不到一个月，这样的增长速度令人惊叹。谢谢大家，也谢谢我们身处的生态。为表庆祝，我们正在重置限额，让大家继续造。",
        "en": "Three million people are now using Codex weekly - up from two million a little under a month ago. Incredible to see the growth. Thank you to all of you and to the ecosystem we're part of. To celebrate, we're resetting rate limits so you can keep building."
      }
    ]
  },
  {
    "id": "bf-2039248564967424483",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-04-01T15:48:39.000+08:00",
        "url": "https://x.com/thsottiaux/status/2039248564967424483",
        "zh": "我们的 Codex 面板显示撞限额的用户明显增多，由于还没完全弄清原因，我谨慎起见已为所有计划重置了用量限额。请享用。",
        "en": "Our Codex dashboards are showing increased rate of users hitting rate limits and since we don't fully understand why I have made the cautious decision of resetting the usage limits for all plans. Enjoy."
      }
    ]
  },
  {
    "id": "bf-2037346989244096581",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-03-27T09:52:28.000+08:00",
        "url": "https://x.com/thsottiaux/status/2037346989244096581",
        "zh": "大家好。我们已为所有计划重置了 Codex 用量限额，让大家尽情体验我们刚上线的超棒插件——反正也有一阵子没重置了！用 Codex 可以无限造东西，玩得开心！",
        "en": "Hello. We have reset Codex usage limits across all plans to let everyone experiment with the magnificent plugins we just launched, and because it had been a while!\n\nYou can just build unlimited things with Codex. Have fun!"
      }
    ]
  },
  {
    "id": "bf-2031605592352313567",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-03-11T13:38:13.000+08:00",
        "url": "https://x.com/thsottiaux/status/2031605592352313567",
        "zh": "好了，Codex 已恢复稳定，短期内应该都没问题。重置按钮已按下，稍等片刻就能看到。",
        "en": "OK, Codex is back and stable and we should be good for a while.\n\nReset button pressed, should see it in a bit"
      }
    ]
  },
  {
    "id": "bf-2031216405266481489",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-03-10T11:51:43.000+08:00",
        "url": "https://x.com/thsottiaux/status/2031216405266481489",
        "zh": "Codex 的问题已完全解决，并已稳定运行几个小时。你们估计也料到了——没错，我们马上会重置限额。请享用。",
        "en": "This codex issue is now fully resolved and stable for the last couple of hours.\n\nYou have come to expect it, but yes, that means we will be reseting rate limits in a bit. Enjoy."
      }
    ]
  },
  {
    "id": "bf-2030474136024400173",
    "type": "reset",
    "status": "confirmed",
    "scope": "Plus、Pro",
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-03-08T10:42:13.000+08:00",
        "url": "https://x.com/thsottiaux/status/2030474136024400173",
        "zh": "我们暂无证据表明 Codex 用量存在被加速消耗的大范围问题，但相关报告不少；因此在接下来 1-3 天收尾调查期间，我们已为 Plus 和 Pro 订阅重置了限额。",
        "en": "We don't have evidence of a widespread issue with codex usage being drained faster than it should but there are enough reports and we have reset rate limits for plus & pro subscriptions while we work towards wrapping up our investigation over the coming 1-3 days."
      }
    ]
  },
  {
    "id": "bf-2029308599835738218",
    "type": "reset",
    "status": "confirmed",
    "scope": "Plus、Pro",
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-03-05T05:30:47.000+08:00",
        "url": "https://x.com/thsottiaux/status/2029308599835738218",
        "zh": "我们发现一个导致 Codex 限额 2X 促销加成未能生效的问题，估计影响了 9% 的 Plus 和 Pro 用户。现已修复，并将为所有 Plus 和 Pro 用户重置限额以作补偿。",
        "en": "We caught an issue that was causing the 2X promotional increase in limits to not be applied to an estimated 9% of plus and pro users for Codex.\n\nWe have now fixed this issue and are reseting the rate limit for all plus and pro users to compensate."
      }
    ]
  },
  {
    "id": "bf-2028649088594436225",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-03-03T09:50:07.000+08:00",
        "url": "https://x.com/thsottiaux/status/2028649088594436225",
        "zh": "Codex 恢复了。我们引入了一个导致请求被当作高网络风险拦截的问题，约 8 分钟后修复，现已完全恢复运行。团队将重置限额——也好久没重置了。这顿我们请。",
        "en": "Codex is back up. We introduced an issue that caused requests to be blocked and rejected as high cyber risk. This was fixed in ~8 mins and we are now back online and fully operational.\n\nTeam will reset rate limits, that's been a while. Enjoy one on us."
      }
    ]
  },
  {
    "id": "bf-2004100061933064395",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2025-12-25T16:01:03.000+08:00",
        "url": "https://x.com/thsottiaux/status/2004100061933064395",
        "zh": "给 Codex 用户们：为感谢过去几个月大家一起玩出来的乐趣，我们的第一份礼物是——已重置限额，并将用量上限提高到平时的 2X，持续到 1 月 1 日。祝大家节日快乐，写码不停！！广而告之👀",
        "en": "For Codex users, to thank you all for the fun we've had over the last months, our first gift is that we have reset rate limits and are lifting the usage limits to 2X the usual limits until the 1st of Jan. Wish you all a merry holiday and lots of coding!!\n\nSpread the word 👀"
      }
    ]
  },
  {
    "id": "bf-2002137269134819610",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2025-12-20T06:01:37.000+08:00",
        "url": "https://x.com/thsottiaux/status/2002137269134819610",
        "zh": "我们重写了 Codex 底层的用量统计与计费系统，并顺手重置了用量限额。回填数据太费时间，不如直接送大家免费用量。请享用！",
        "en": "We rewrote the underlying system to track and bill usage in Codex and we have reset usage limits in the process. Backfilling is time consuming and it's more fun to give free usage. Enjoy!"
      }
    ]
  },
  {
    "id": "bf-2001114683047317723",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2025-12-17T10:18:14.000+08:00",
        "url": "https://x.com/thsottiaux/status/2001114683047317723",
        "zh": "有阵子不需要这么做了，不过你们都懂流程。我们已重置所有人的用量限额，多用点 Codex，为打扰致歉。",
        "en": "Didn't need to do this in a while, but you know the drill. We have reset everyone's usage limits, enjoy more Codex and apologies for the disruption."
      }
    ]
  },
  {
    "id": "bf-1995988609896513743",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2025-12-03T06:49:02.000+08:00",
        "url": "https://x.com/thsottiaux/status/1995988609896513743",
        "zh": "我们已为 Codex 里的所有人重置了用量限额——这是最快的缓解手段，团队会继续排查根因。约 10 分钟内会推送到所有用户。请享用，也为此前的混乱致歉！",
        "en": "We have reset the usage limits for everyone in Codex, which helps us mitigate the issue the fastest and the team will continue to work on the underlying cause. This should propagate to all users over the next 10 mins, enjoy and apologies for the confusion!"
      }
    ]
  },
  {
    "id": "bf-1992370994028388670",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2025-11-23T07:13:56.000+08:00",
        "url": "https://x.com/thsottiaux/status/1992370994028388670",
        "zh": "为补偿此前几小时美国境内及周边的异常高延迟，我们已为所有 Codex 用户重置限额。感谢幕后团队让 Codex 全天候运转。另外还没试过 GPT-5.1-Codex-Max 的话，强烈推荐！",
        "en": "We have reset rate limits for all Codex users to compensate for the unusual high latencies in or near the US in the previous hours. Grateful for the team working hard behind the scenes to keep Codex running 24/7.\n\nI do recommend trying out GPT-5.1-Codex-Max too if you haven't!"
      }
    ]
  },
  {
    "id": "bf-1986166501435711936",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2025-11-06T04:19:29.000+08:00",
        "url": "https://x.com/thsottiaux/status/1986166501435711936",
        "zh": "Codex 故障已解决。我们先经历了 45 分钟的小故障，随后扩大为 30 分钟的全球故障，现已解决并重置了限额。如果仍看到问题请告诉我。",
        "en": "Codex outage resolved.\n\nWe suffered a minor outage for last 45 minutes which turned into a global outage for last 30 minutes, this is now resolved and we have reset the rate limits. Please let me know if you still see issues."
      }
    ]
  },
  {
    "id": "bf-1968163721034994139",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2025-09-17T12:02:52.000+08:00",
        "url": "https://x.com/thsottiaux/status/1968163721034994139",
        "zh": "我们已为所有人重置了 gpt-5-codex 的限额，既是为了让大家今天能从它身上获益更多，也是补偿此前调配额外 GPU 期间的降速。本周我们会持续扩容以保持速度。请享用！",
        "en": "We have reset everyone's limits for gpt-5-codex to allow you all to benefit more from it today and as a way to make up for the slowdowns earlier while we were provisioning additional GPUs. We'll continue to add capacity throughout the week to maintain the speed.\n\nEnjoy!"
      }
    ]
  }
]
);
