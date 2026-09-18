// Codex 重置记录（Tibo @thsottiaux 公布的全员重置与重置卡发放）。
// 本文件由 scripts/sync-resets.mjs 自动生成，请勿手改。数据来自 AIHOT 公开接口
// https://aihot.news/api/v1/codex-resets （上游每 15 分钟核验一次 Tibo 的公开帖）。
// 时间、状态、推文链接为事实；zh 引文是 AIHOT 的 AI 翻译，译文著作权归 AIHOT，
// 依其公开使用规则（非商业、署名、允许同步）收录；en 为 Tibo 原文，版权归原发帖人。
// confirmedAt 是确认帖时间而非精确执行时间；occurredOn 是单独核实过的日期；时间均为北京时间 UTC+8。

import { validateResets, type ResetSnapshot } from "../lib/resets";

export const resetSnapshot: ResetSnapshot = {
  "checkedAt": "2026-09-18T19:51:11.128+08:00",
  "historyFrom": "2026-06-12T00:00:00.000+08:00",
  "source": "https://aihot.news/codex-reset",
  "curator": "AIHOT"
};

export const resets = validateResets(
[
  {
    "id": "reset-2098612714704891959-1-1",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": "2026-09-12T16:09:17.000+08:00",
    "occurredOn": null,
    "scheduleFrom": "2026-09-12T15:00:00.000+08:00",
    "scheduleThrough": "2026-09-12T15:00:00.000+08:00",
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-09-12T11:20:36.000+08:00",
        "url": "https://x.com/thsottiaux/status/2098612714704891959",
        "zh": "当然，一次重置也将在今天午夜前落地。",
        "en": "And of course, a reset is also landing by midnight today."
      },
      {
        "stage": "confirm",
        "publishedAt": "2026-09-12T16:09:17.000+08:00",
        "url": "https://x.com/thsottiaux/status/2098685367058612394",
        "zh": "重置已全部推送完成。好梦。",
        "en": "Reset all propagated."
      }
    ]
  },
  {
    "id": "banked-2097752790177370535-1-1",
    "type": "card",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-09-10T02:23:34.000+08:00",
        "url": "https://x.com/thsottiaux/status/2097752790177370535",
        "zh": "所有在受影响的时间窗口内使用过重置卡的人都会再获得一张重置卡，并会收到一封致歉邮件。",
        "en": "Everyone who used one in the affected time window is getting another one and an email to apologize."
      }
    ]
  },
  {
    "id": "reset-2097043464538264003-1-1",
    "type": "reset",
    "status": "confirmed",
    "scope": "所有付费订阅",
    "confirmedAt": "2026-09-08T12:05:53.000+08:00",
    "occurredOn": null,
    "scheduleFrom": "2026-09-08T09:00:00.000+08:00",
    "scheduleThrough": "2026-09-08T10:00:00.000+08:00",
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-09-08T03:24:57.000+08:00",
        "url": "https://x.com/thsottiaux/status/2097043464538264003",
        "zh": "我们将会对所有付费订阅的用量进行一次全局重置，这样你们在尽情用 Blender 做有趣的 3D 建模、把用量全部烧完之后，还能继续享受 Astra。",
        "en": "We will do a global reset of the usage for all paid subscriptions so that you can keep enjoying Astra after burning through all of it doing fun 3D modeling in blender."
      },
      {
        "stage": "confirm",
        "publishedAt": "2026-09-08T12:05:53.000+08:00",
        "url": "https://x.com/thsottiaux/status/2097174560412246215",
        "zh": "所有人都已重置。享受与 Astra 共度的这一周。",
        "en": "All reset for everyone."
      }
    ]
  },
  {
    "id": "banked-2095979536043401428-1-1",
    "type": "card",
    "status": "confirmed",
    "scope": "Plus、Pro、Business",
    "confirmedAt": null,
    "occurredOn": "2026-09-05",
    "scheduleFrom": "2026-09-05T15:00:00.000+08:00",
    "scheduleThrough": "2026-09-05T15:00:00.000+08:00",
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-09-05T04:57:17.000+08:00",
        "url": "https://x.com/thsottiaux/status/2095979536043401428",
        "zh": "一些 Plus 和 Business 用户今天还无法使用 Astra，我们会用一张重置卡来补偿。重置卡将在今天结束前到账，如果你在太平洋时间晚上 8 点前创建账户，你也能获得。",
        "en": "we've got you covered with a banked reset. Lands by end of day and if you create your account by 8pm PT then you'll get it too."
      },
      {
        "stage": "announce",
        "publishedAt": "2026-09-05T08:39:25.000+08:00",
        "url": "https://x.com/thsottiaux/status/2096035437299237298",
        "zh": "我们今天也将为所有 Plus、Pro 和 Business 用户发放完整的重置卡。今天结束前到账。",
        "en": "we will do the full banked reset today too for all Plus, Pro and Business users. Lands end of day."
      }
    ]
  },
  {
    "id": "banked-2095651088502591861-1-1",
    "type": "card",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": "2026-09-04",
    "scheduleFrom": "2026-09-04T10:12:09.000+08:00",
    "scheduleThrough": "2026-09-04T10:12:09.000+08:00",
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-09-04T07:12:09.000+08:00",
        "url": "https://x.com/thsottiaux/status/2095651088502591861",
        "zh": "从今天开始，只要你的付费 ChatGPT 套餐一天无法使用 Astra，我们就赠送一张重置卡。团队正全力以赴尽快恢复访问。第一张将在约 3 小时后到账。如果你还没有账号，现在还来得及创建。",
        "en": "We will give one banked reset for every day you don't have access to Astra on your paid ChatGPT plan, starting today."
      }
    ]
  },
  {
    "id": "reset-2094143054039183573-1-1",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": "2026-08-31T10:34:27.000+08:00",
    "occurredOn": null,
    "scheduleFrom": "2026-08-30T15:00:00.000+08:00",
    "scheduleThrough": "2026-08-31T15:00:00.000+08:00",
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-08-31T03:19:46.000+08:00",
        "url": "https://x.com/thsottiaux/status/2094143054039183573",
        "zh": "是的。",
        "en": "Yes"
      },
      {
        "stage": "confirm",
        "publishedAt": "2026-08-31T10:34:27.000+08:00",
        "url": "https://x.com/thsottiaux/status/2094252447271366730",
        "zh": "我们现已为 ChatGPT Work 和 Codex 的所有付费订阅重置了用量。",
        "en": "we have now reset usage for all paid subscriptions for ChatGPT Work and Codex"
      }
    ]
  },
  {
    "id": "reset-2094144275957350900-1-1",
    "type": "reset",
    "status": "announced",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": "2026-08-31T09:00:00.000+08:00",
    "scheduleThrough": "2026-08-31T10:00:00.000+08:00",
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-08-31T03:24:37.000+08:00",
        "url": "https://x.com/thsottiaux/status/2094144275957350900",
        "zh": "你们的 Codex 和 ChatGPT Work 重置将在太平洋标准时间下午6点到来。",
        "en": "Your Codex and ChatGPT Work reset will land at 6pm PST."
      }
    ]
  },
  {
    "id": "reset-2093801758665715784-1-1",
    "type": "reset",
    "status": "announced",
    "scope": "所有付费订阅",
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": "2026-08-30T05:30:00.000+08:00",
    "scheduleThrough": "2026-08-30T06:30:00.000+08:00",
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-08-30T04:43:34.000+08:00",
        "url": "https://x.com/thsottiaux/status/2093801758665715784",
        "zh": "我们正在为 Codex 和 ChatGPT Work 的所有付费用户重置用量限额。",
        "en": "We are reseting usage for all paid users of Codex and ChatGPT Work."
      },
      {
        "stage": "announce",
        "publishedAt": "2026-08-30T04:43:53.000+08:00",
        "url": "https://x.com/thsottiaux/status/2093801838504186008",
        "zh": "（重置）将于太平洋时间下午2:30生效。",
        "en": "Landing 2:30pm PST"
      }
    ]
  },
  {
    "id": "reset-2093014447833116908-1-1",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": "2026-08-28T00:35:05.000+08:00",
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-08-28T00:35:05.000+08:00",
        "url": "https://x.com/thsottiaux/status/2093014447833116908",
        "zh": "全新的我，以及面向所有 ChatGPT Work 和 Codex 用户的全部新用量。",
        "en": "Brand new me and brand new usage for all ChatGPT Work and Codex users."
      }
    ]
  },
  {
    "id": "reset-2092316228497063958-1-1",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": "2026-08-26T02:20:36.000+08:00",
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-08-26T02:20:36.000+08:00",
        "url": "https://x.com/thsottiaux/status/2092316228497063958",
        "zh": "并不是那么随机，但确实如此。",
        "en": "Not so random, but yes"
      }
    ]
  },
  {
    "id": "reset-2091407991736332689-1-1",
    "type": "reset",
    "status": "confirmed",
    "scope": "business",
    "confirmedAt": "2026-08-24T08:46:51.000+08:00",
    "occurredOn": null,
    "scheduleFrom": "2026-08-24T05:00:00.000+08:00",
    "scheduleThrough": "2026-08-24T06:00:00.000+08:00",
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-08-23T14:11:36.000+08:00",
        "url": "https://x.com/thsottiaux/status/2091407991736332689",
        "zh": "作为明天部分修复的一部分，我们还将对所有付费订阅进行用量全面重置。",
        "en": "As part of some of the fixes tomorrow, we will also do a full reset of the usage for all paid subscriptions."
      },
      {
        "stage": "announce",
        "publishedAt": "2026-08-23T14:29:05.000+08:00",
        "url": "https://x.com/thsottiaux/status/2091412393368945027",
        "zh": "重置将在明天太平洋时间14pm左右落地。",
        "en": "Reset will land around 14pm PST tomorrow."
      },
      {
        "stage": "announce",
        "publishedAt": "2026-08-23T14:32:27.000+08:00",
        "url": "https://x.com/thsottiaux/status/2091413240337326588",
        "zh": "显然，我指的是下午2点。",
        "en": "Meant 2pm obviously"
      },
      {
        "stage": "confirm",
        "publishedAt": "2026-08-24T08:46:51.000+08:00",
        "url": "https://x.com/thsottiaux/status/2091688655828246890",
        "zh": "重置已推送到各账户。",
        "en": "Reset has been propagated to accounts"
      },
      {
        "stage": "announce",
        "publishedAt": "2026-08-24T10:09:04.000+08:00",
        "url": "https://x.com/thsottiaux/status/2091709346371838240",
        "zh": "它确实包含商业账户！刚检查过，它仍在推送中，但商业账户也应该在 5 分钟内全部完成。",
        "en": "It does include business accounts! Just checked and it was still propagating, but should be all done in 5 minutes for business accounts too."
      }
    ]
  },
  {
    "id": "banked-2090766694897619318-1-1",
    "type": "card",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": "2026-08-22T08:50:36.000+08:00",
    "occurredOn": null,
    "scheduleFrom": "2026-08-22T11:00:00.000+08:00",
    "scheduleThrough": "2026-08-22T12:00:00.000+08:00",
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-08-21T19:43:19.000+08:00",
        "url": "https://x.com/thsottiaux/status/2090766694897619318",
        "zh": "今天白天，我们将给每一位 Codex 和 ChatGPT Work 用户发放一张可自行选择使用时间的重置卡。",
        "en": "during the day we will credit every Codex and ChatGPT Work user with a BANKED reset that you can use at your own leisure"
      },
      {
        "stage": "announce",
        "publishedAt": "2026-08-22T07:40:34.000+08:00",
        "url": "https://x.com/thsottiaux/status/2090947196107764189",
        "zh": "重置卡将在太平洋时间晚上8点前到账。面向所有 ChatGPT Work 和 Codex 付费用户。",
        "en": "The banked reset will be there by 8pm PST. For all paid users of ChatGPT Work and Codex."
      },
      {
        "stage": "confirm",
        "publishedAt": "2026-08-22T08:50:36.000+08:00",
        "url": "https://x.com/thsottiaux/status/2090964822422949999",
        "zh": "重置卡已经到账，我再重复一遍，重置卡已经到账。祝周末愉快。",
        "en": "The banked reset has landed, I repeat, the banked reset has landed."
      }
    ]
  },
  {
    "id": "reset-2087706104814023111-1-1",
    "type": "reset",
    "status": "announced",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": "2026-08-13T10:01:37.000+08:00",
    "scheduleThrough": "2026-08-13T10:01:37.000+08:00",
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-08-13T09:01:37.000+08:00",
        "url": "https://x.com/thsottiaux/status/2087706104814023111",
        "zh": "大家享受一次愉快的重置吧。大约一小时内落地。",
        "en": "Enjoy a nice reset everyone. Landing in the next hour or so"
      }
    ]
  },
  {
    "id": "reset-2086189414292865249-1-1",
    "type": "reset",
    "status": "confirmed",
    "scope": "所有付费订阅",
    "confirmedAt": "2026-08-11T08:27:44.000+08:00",
    "occurredOn": null,
    "scheduleFrom": "2026-08-10T15:00:00.000+08:00",
    "scheduleThrough": "2026-08-11T15:00:00.000+08:00",
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-08-09T04:34:50.000+08:00",
        "url": "https://x.com/thsottiaux/status/2086189414292865249",
        "zh": "我会在周一再做一次表演性的重置",
        "en": "I'll do another performative reset on Monday"
      },
      {
        "stage": "confirm",
        "publishedAt": "2026-08-11T08:27:44.000+08:00",
        "url": "https://x.com/thsottiaux/status/2086972802457063486",
        "zh": "嗨。\n\n已经完成了。",
        "en": "It is done."
      },
      {
        "stage": "confirm",
        "publishedAt": "2026-08-11T08:28:16.000+08:00",
        "url": "https://x.com/thsottiaux/status/2086972933566857393",
        "zh": "所有付费 ChatGPT Work 和 Codex 用户的用量额度已重置。祝大家周一愉快。希望这一周过得精彩。",
        "en": "Usage limits have been reset for all paid ChatGPT Work and Codex users."
      }
    ]
  },
  {
    "id": "reset-2086188036493344823-1-1",
    "type": "reset",
    "status": "confirmed",
    "scope": "所有付费订阅",
    "confirmedAt": "2026-08-09T04:29:22.000+08:00",
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-08-09T04:29:22.000+08:00",
        "url": "https://x.com/thsottiaux/status/2086188036493344823",
        "zh": "为了庆祝这一点，再加上我不会离开……我已经为 ChatGPT Work 和 Codex 的所有付费用户重置了使用限额。",
        "en": "To celebrate this, together with the fact that I'm not going anywhere... I have reset usage limits for all paid users of ChatGPT Work and Codex."
      }
    ]
  },
  {
    "id": "reset-2083395449814229287-1-1",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": "2026-08-01T11:32:37.000+08:00",
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-08-01T11:32:37.000+08:00",
        "url": "https://x.com/thsottiaux/status/2083395449814229287",
        "zh": "我已重置了 Codex 和 ChatGPT Work 的使用限额。",
        "en": "I have reset usage limits for Codex and ChatGPT Work."
      }
    ]
  },
  {
    "id": "reset-2082317452755751098-1-1",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": "2026-07-29T12:09:02.000+08:00",
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-07-29T12:09:02.000+08:00",
        "url": "https://x.com/thsottiaux/status/2082317452755751098",
        "zh": "我已为所有 ChatGPT Work 和 Codex 用户重置了用量限制。",
        "en": "I've reset usage limits for all ChatGPT Work and Codex users."
      },
      {
        "stage": "confirm",
        "publishedAt": "2026-07-29T13:42:35.000+08:00",
        "url": "https://x.com/thsottiaux/status/2082340992871760182",
        "zh": "@0xrsydn 天哪天哪天哪，回到100%了！",
        "en": "back to 100%!"
      }
    ]
  },
  {
    "id": "reset-2081940052154933696-1-1",
    "type": "reset",
    "status": "confirmed",
    "scope": "所有付费订阅",
    "confirmedAt": "2026-07-28T11:09:23.000+08:00",
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-07-28T11:09:23.000+08:00",
        "url": "https://x.com/thsottiaux/status/2081940052154933696",
        "zh": "回到笔记本电脑前。所有 Codex 和 ChatGPT Work 付费用户的用量限制已重置。好耶。今天是个好日子！",
        "en": "The usage limits have been reset for all paid users of Codex and ChatGPT Work."
      }
    ]
  },
  {
    "id": "reset-2081096447718723984-1-1",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": "2026-07-26T03:17:12.000+08:00",
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-07-26T03:17:12.000+08:00",
        "url": "https://x.com/thsottiaux/status/2081096447718723984",
        "zh": "我们已为所有 Codex 和 ChatGPT Work 用户重置了使用限制。",
        "en": "We have reset usage limits for all Codex and ChatGPT Work users."
      }
    ]
  },
  {
    "id": "reset-2079609157934886975-1-1",
    "type": "reset",
    "status": "announced",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": "2026-07-22T01:47:15.000+08:00",
    "scheduleThrough": "2026-07-22T01:47:15.000+08:00",
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-07-22T00:47:15.000+08:00",
        "url": "https://x.com/thsottiaux/status/2079609157934886975",
        "zh": "10M！新的一天，为 Codex 和 ChatGPT Work 的付费用户提供新的用量重置。将在接下来一小时内生效。尽情享用。",
        "en": "New day, new usage reset for paid users of Codex and ChatGPT Work. Lands in the next hour."
      }
    ]
  },
  {
    "id": "reset-2078327646170337398-1-1",
    "type": "reset",
    "status": "announced",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": "2026-07-17T15:00:00.000+08:00",
    "scheduleThrough": "2026-07-18T15:00:00.000+08:00",
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-07-18T11:54:58.000+08:00",
        "url": "https://x.com/thsottiaux/status/2078327646170337398",
        "zh": "已确认。",
        "en": "Confirmed"
      }
    ]
  },
  {
    "id": "reset-2078320950488297917-1-1",
    "type": "reset",
    "status": "confirmed",
    "scope": "所有付费订阅",
    "confirmedAt": "2026-07-18T11:28:22.000+08:00",
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-07-18T11:28:22.000+08:00",
        "url": "https://x.com/thsottiaux/status/2078320950488297917",
        "zh": "哎呀……我又做了一次。所有付费用户尽情享受 Codex 和 ChatGPT Work 的用量限制重置。",
        "en": "Oops... I did it again. \n\nEnjoy reset usage limits for all paid users for Codex and ChatGPT Work."
      },
      {
        "stage": "confirm",
        "publishedAt": "2026-07-18T11:58:44.000+08:00",
        "url": "https://x.com/thsottiaux/status/2078328592308818117",
        "zh": "现在已经回到 100%",
        "en": "And now 100%"
      }
    ]
  },
  {
    "id": "reset-2077607697487188198-1-1",
    "type": "reset",
    "status": "announced",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-07-16T12:14:09.000+08:00",
        "url": "https://x.com/thsottiaux/status/2077607697487188198",
        "zh": "又一次为我们的 Codex 和 ChatGPT Work 用户重置。实际上今天早些时候我们活跃用户就达到了 900 万，但随后被团队为保持系统稳定运行所做的数百万件事情分散了注意力。几分钟内应该就能恢复那美好的 100% 每周用量上限。",
        "en": "Another reset for our Codex and ChatGPT Work users."
      }
    ]
  },
  {
    "id": "reset-2077114635308986427-1-1",
    "type": "reset",
    "status": "announced",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-07-15T03:34:54.000+08:00",
        "url": "https://x.com/thsottiaux/status/2077114635308986427",
        "zh": "我们正在再次为所有用户重置使用限额。",
        "en": "We are once again resetting the usage limits for all."
      }
    ]
  },
  {
    "id": "banked-2076418567143408112-2-1",
    "type": "card",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": "2026-07-14T02:29:31.000+08:00",
    "occurredOn": null,
    "scheduleFrom": "2026-07-13T15:00:00.000+08:00",
    "scheduleThrough": "2026-07-14T15:00:00.000+08:00",
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-07-13T05:28:59.000+08:00",
        "url": "https://x.com/thsottiaux/status/2076418567143408112",
        "zh": "明天我们将庆祝700万活跃用户里程碑，并向所有ChatGPT Work和Codex用户发放首张重置卡。",
        "en": "Tomorrow we will celebrate our 7M active users milestone and grant the first banked reset across all of our ChatGPT Work and Codex users."
      },
      {
        "stage": "confirm",
        "publishedAt": "2026-07-14T02:29:31.000+08:00",
        "url": "https://x.com/thsottiaux/status/2076735790567338203",
        "zh": "为庆祝这一里程碑，我们已为每个账户添加了一张重置卡。你可以在桌面应用或网页上使用该重置，它会为你恢复每周用量。",
        "en": "We have added a banked reset to everyone's account to celebrate the milestone."
      }
    ]
  },
  {
    "id": "banked-2076418567143408112-1-1",
    "type": "card",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": "2026-07-13T05:28:59.000+08:00",
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-07-13T05:28:59.000+08:00",
        "url": "https://x.com/thsottiaux/status/2076418567143408112",
        "zh": "为50万ChatGPT Work和Codex用户添加了一张重置卡。",
        "en": "Added a banked reset to 500k users of ChatGPT Work and Codex."
      }
    ]
  },
  {
    "id": "reset-2076365965915467978-1-1",
    "type": "reset",
    "status": "announced",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": "2026-07-13T02:59:57.000+08:00",
    "scheduleThrough": "2026-07-13T02:59:57.000+08:00",
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-07-13T01:59:57.000+08:00",
        "url": "https://x.com/thsottiaux/status/2076365965915467978",
        "zh": "我们达到了600万活跃用户，并将在接下来一小时内进行一次使用量重置。",
        "en": "are landing a usage reset in the next hour"
      }
    ]
  },
  {
    "id": "reset-2075641131002700120-2-1",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": "2026-07-11T22:51:08.000+08:00",
    "occurredOn": null,
    "scheduleFrom": "2026-07-11T14:24:25.000+08:00",
    "scheduleThrough": "2026-07-11T14:24:25.000+08:00",
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-07-11T01:59:43.000+08:00",
        "url": "https://x.com/thsottiaux/status/2075641131002700120",
        "zh": "今天晚些时候还会再重置一次。",
        "en": "And another one will come later in the day."
      },
      {
        "stage": "announce",
        "publishedAt": "2026-07-11T13:54:25.000+08:00",
        "url": "https://x.com/thsottiaux/status/2075820987833274448",
        "zh": "推出……又一次面向我们所有 ChatGPT Work 和 Codex 用户的用量限额重置。应该会在接下来 30 分钟内生效。",
        "en": "Introducing... another usage limit reset for all our ChatGPT Work and Codex users. Should land over next 30 minutes."
      },
      {
        "stage": "confirm",
        "publishedAt": "2026-07-11T22:51:08.000+08:00",
        "url": "https://x.com/thsottiaux/status/2075956058942820790",
        "zh": "我们自动应用了这些重置，原因有两个。",
        "en": "We applied the resets automatically because of two reasons."
      }
    ]
  },
  {
    "id": "reset-2075452680760443190-1-1",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": "2026-07-11T01:59:43.000+08:00",
    "occurredOn": null,
    "scheduleFrom": "2026-07-11T13:30:53.000+08:00",
    "scheduleThrough": "2026-07-11T13:30:53.000+08:00",
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-07-10T13:30:53.000+08:00",
        "url": "https://x.com/thsottiaux/status/2075452680760443190",
        "zh": "为庆祝 GPT-5.6 Sol 的发布，我们将在接下来的 24 小时内再次重置 ChatGPT Work 和 Codex 的速率限制（两次）。",
        "en": "we will reset the rate limits again (twice) across ChatGPT Work and Codex over the next 24 hours"
      },
      {
        "stage": "confirm",
        "publishedAt": "2026-07-11T01:59:43.000+08:00",
        "url": "https://x.com/thsottiaux/status/2075641131002700120",
        "zh": "我们已经重置了 Codex 和 ChatGPT Work 的使用限额。",
        "en": "We have reset usage limits across Codex and ChatGPT Work."
      }
    ]
  },
  {
    "id": "reset-2075452680760443190-1-2",
    "type": "reset",
    "status": "announced",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": "2026-07-11T13:30:53.000+08:00",
    "scheduleThrough": "2026-07-11T13:30:53.000+08:00",
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-07-10T13:30:53.000+08:00",
        "url": "https://x.com/thsottiaux/status/2075452680760443190",
        "zh": "为庆祝 GPT-5.6 Sol 的发布，我们将在接下来的 24 小时内再次重置 ChatGPT Work 和 Codex 的速率限制（两次）。",
        "en": "we will reset the rate limits again (twice) across ChatGPT Work and Codex over the next 24 hours"
      }
    ]
  },
  {
    "id": "reset-2075330198887940337-1-1",
    "type": "reset",
    "status": "announced",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": "2026-07-10T06:24:11.000+08:00",
    "scheduleThrough": "2026-07-10T06:24:11.000+08:00",
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-07-10T05:24:11.000+08:00",
        "url": "https://x.com/thsottiaux/status/2075330198887940337",
        "zh": "享受 ChatGPT Work 和 Codex 的用量限制完整重置。将在接下来一小时内逐步推送。",
        "en": "Enjoy a full reset of your usage limits for ChatGPT Work and Codex. Propagating in the next hour."
      }
    ]
  },
  {
    "id": "reset-2075296200761418073-1-1",
    "type": "reset",
    "status": "announced",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-07-10T03:09:06.000+08:00",
        "url": "https://x.com/thsottiaux/status/2075296200761418073",
        "zh": "重置将在今天下午到来",
        "en": "Reset will be coming this afternoon"
      }
    ]
  },
  {
    "id": "banked-2072608196993188002-1-1",
    "type": "card",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": "2026-07-02T17:07:56.000+08:00",
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-07-02T17:07:56.000+08:00",
        "url": "https://x.com/thsottiaux/status/2072608196993188002",
        "zh": "应该已经在你的小存钱罐里了。这是给所有人的。如果它没有显示在你的账户里，请告诉我，我们一定会调查。",
        "en": "Should be in your little piggy bank. It is for everyone."
      }
    ]
  },
  {
    "id": "banked-2071383430634344902-1-1",
    "type": "card",
    "status": "announced",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-06-29T08:01:08.000+08:00",
        "url": "https://x.com/thsottiaux/status/2071383430634344902",
        "zh": "如果你恰好在之前几个小时内用掉了上一次重置，而且没有用完你的用量，别担心，在我们结束调查之后，你会获得更多重置卡。",
        "en": "do not worry, you will get more manual resets after we conclude the investigation"
      },
      {
        "stage": "announce",
        "publishedAt": "2026-06-30T07:39:41.000+08:00",
        "url": "https://x.com/thsottiaux/status/2071740419030053227",
        "zh": "我们还会为你在接下来 24 小时内的用量，往你的重置银行里存入一张额外的重置卡。",
        "en": "we will credit one additional reset into your bank for your own usage over the next 24 hours"
      }
    ]
  },
  {
    "id": "reset-2071740419030053227-1-1",
    "type": "reset",
    "status": "announced",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": "2026-06-30T08:39:41.000+08:00",
    "scheduleThrough": "2026-06-30T08:39:41.000+08:00",
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-06-30T07:39:41.000+08:00",
        "url": "https://x.com/thsottiaux/status/2071740419030053227",
        "zh": "Codex 用量限额将在接下来一小时内再次完全重置。",
        "en": "Codex usage limits will be fully reset again in the next hour"
      }
    ]
  },
  {
    "id": "reset-2071381664853319742-1-1",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": "2026-06-29T07:54:07.000+08:00",
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-06-29T07:54:07.000+08:00",
        "url": "https://x.com/thsottiaux/status/2071381664853319742",
        "zh": "我已经重置了所有人的 Codex 使用限额。",
        "en": "I have reset everyone's Codex usage limits."
      }
    ]
  },
  {
    "id": "reset-2070653282440405046-1-1",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": "2026-06-28T05:47:54.000+08:00",
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-06-27T07:39:48.000+08:00",
        "url": "https://x.com/thsottiaux/status/2070653282440405046",
        "zh": "我们正在为所有 Codex 用户免费提供一次使用量重置。接下来几小时内应该会显示在你们的账户中。",
        "en": "We are giving all Codex users a usage reset on the house. Should be showing in your accounts in the next few hours."
      },
      {
        "stage": "confirm",
        "publishedAt": "2026-06-28T05:47:54.000+08:00",
        "url": "https://x.com/thsottiaux/status/2070987512261029923",
        "zh": "我们还是重置了用量，因为我们能这么做，但我们找不到任何坏掉的地方。",
        "en": "Still did reset the usage because we can, but we can't find anything that is broken here."
      }
    ]
  },
  {
    "id": "banked-2067399435009622521-2-1",
    "type": "card",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": "2026-06-18T08:10:10.000+08:00",
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-06-18T08:10:10.000+08:00",
        "url": "https://x.com/thsottiaux/status/2067399435009622521",
        "zh": "而且你们还会获得一张重置卡，存入重置银行，可以随意使用。",
        "en": "But you are also getting one into the reset bank to use at your own leisure."
      }
    ]
  },
  {
    "id": "reset-2067399435009622521-1-1",
    "type": "reset",
    "status": "confirmed",
    "scope": null,
    "confirmedAt": "2026-06-18T08:10:10.000+08:00",
    "occurredOn": null,
    "scheduleFrom": null,
    "scheduleThrough": null,
    "posts": [
      {
        "stage": "confirm",
        "publishedAt": "2026-06-18T08:10:10.000+08:00",
        "url": "https://x.com/thsottiaux/status/2067399435009622521",
        "zh": "我们做了一次悄悄的双重重置。你不仅能获得一次由我们赠送的完整重置。",
        "en": "We did a sneaky double reset. Not only do you get a full reset on us."
      }
    ]
  },
  {
    "id": "reset-2066956441173323943-1-1",
    "type": "reset",
    "status": "announced",
    "scope": null,
    "confirmedAt": null,
    "occurredOn": null,
    "scheduleFrom": "2026-06-18T02:49:52.000+08:00",
    "scheduleThrough": "2026-06-18T02:49:52.000+08:00",
    "posts": [
      {
        "stage": "announce",
        "publishedAt": "2026-06-17T02:49:52.000+08:00",
        "url": "https://x.com/thsottiaux/status/2066956441173323943",
        "zh": "给我们24小时，在所有套餐中重置 Codex 的速率限制。",
        "en": "Give us 24 hours to reset the Codex rate limits across all plans."
      }
    ]
  }
]
);
