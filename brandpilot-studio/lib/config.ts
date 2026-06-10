// =====================================================================
// 全站配置 —— 上线前请先改这里（只改这一个文件即可替换所有联系方式）
// Single source of truth. Replace placeholders before launch.
// =====================================================================

export const site = {
  brand: "BrandPilot Studio",
  brandCn: "个人品牌起步包",
  tagline: "7 天内，把你的「线上名片」做得更专业。",
  subTagline:
    "为留学生、求职者、自由职业者、小商家和创作者，快速搭建一页式个人主页 + 小红书定位，让别人第一眼就觉得「你很靠谱」。",

  // ⬇️ 上线前必改：把 YOUR_WECHAT_ID 换成你的真实微信号
  wechatId: "YOUR_WECHAT_ID",

  // ⬇️ 强烈建议：放一张你的微信二维码图（中国用户习惯扫码加好友，不爱手输微信号）
  //   做法：把二维码图片放到 public/wechat-qr.png，这里写 "/wechat-qr.png"。
  //   留空字符串则只显示微信号 + 复制按钮。
  wechatQr: "",

  // ⬇️ 可选：用于「提交咨询」按钮的 mailto 兜底（没有也行）
  contactEmail: "YOUR_EMAIL@example.com",

  // ⬇️ 可选：你的小红书号 / 主页链接（写在页脚）
  xiaohongshu: "YOUR_XHS_ID",

  // 站点地址（部署后改成真实域名，用于分享与 SEO）
  url: "https://brandpilot.example.com",

  // ⬇️ 营销用：案例价剩余名额（用于制造合理稀缺，成交后手动 -1；为 0 时自动隐藏）
  slotsLeft: 3,
  slotsTotal: 3,
};

export const nav = [
  { href: "/", label: "首页" },
  { href: "/services", label: "服务与价格" },
  { href: "/#cases", label: "案例" },
  { href: "/resources", label: "免费资源" },
  { href: "/inquiry", label: "咨询下单" },
];

// 诚实承诺 —— 不做任何「保证涨粉 / 保证拿 offer」的虚假宣传
export const honestPromise = [
  "我们帮你把线上形象做得更专业、更可信",
  "我们帮你把「你是谁、能帮谁、解决什么问题」讲清楚",
  "我们交付一张随时可发的「线上名片」",
];

export const honestDisavow = [
  "不承诺涨粉数量",
  "不承诺一定拿到 offer 或成交",
  "不刷数据、不买粉、不做虚假人设",
];
