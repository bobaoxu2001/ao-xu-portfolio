export type Tier = {
  id: string;
  name: string;
  nameCn: string;
  price: number;
  priceLabel: string;
  badge?: string;
  highlight?: boolean;
  summary: string;
  forWho: string;
  features: string[];
  delivery: string;
  cta: string;
};

export const tiers: Tier[] = [
  {
    id: "case",
    name: "Case Study Pack",
    nameCn: "案例起步包",
    price: 399,
    priceLabel: "¥399",
    badge: "前 3 位案例客户限定",
    summary: "用最快的速度，拥有一张专业的线上名片。",
    forWho: "第一次做个人主页 / 想先看到效果的你",
    features: [
      "一页式个人主页（One-page Website）",
      "小红书主页 / 简介优化（Profile Optimization）",
      "3 个内容选题方向",
      "1 套可复用的小红书封面模板",
      "1 轮免费修改",
    ],
    delivery: "约 3–5 天交付",
    cta: "抢前 3 个名额",
  },
  {
    id: "standard",
    name: "Standard Pack",
    nameCn: "标准包",
    price: 699,
    priceLabel: "¥699",
    highlight: true,
    badge: "最受欢迎",
    summary: "主页 + 内容一起搞定，发小红书有据可依。",
    forWho: "想认真经营个人 IP / 小商家获客的你",
    features: [
      "一页式个人主页（One-page Website）",
      "小红书主页 / 简介优化",
      "5 篇小红书内容（文案 + 选题）",
      "3 套小红书封面模板",
      "2 轮免费修改",
    ],
    delivery: "约 5–7 天交付",
    cta: "选择标准包",
  },
  {
    id: "pro",
    name: "Pro Pack",
    nameCn: "专业增长包",
    price: 1299,
    priceLabel: "¥1299",
    badge: "含转化话术",
    summary: "从主页到私域转化，一整套可落地的增长系统。",
    forWho: "靠线上获客、需要成交的创作者 / 商家",
    features: [
      "一页式个人主页（One-page Website）",
      "小红书主页 / 简介优化",
      "10 个内容选题（含框架）",
      "5 套小红书封面模板",
      "私信转化话术（DM Conversion Scripts）",
      "2 轮免费修改",
    ],
    delivery: "约 7–10 天交付",
    cta: "咨询专业包",
  },
];

// 通用流程
export const process = [
  {
    step: "01",
    title: "提交需求",
    desc: "填写咨询表 / 加微信，告诉我你是谁、想给谁看、目标是什么。",
  },
  {
    step: "02",
    title: "定位梳理",
    desc: "我帮你梳理一句话定位、目标人群、核心卖点和差异化。",
  },
  {
    step: "03",
    title: "搭建主页",
    desc: "产出一页式主页文案 + 视觉，外加小红书简介与内容选题。",
  },
  {
    step: "04",
    title: "交付与修改",
    desc: "你确认细节，我做 1–2 轮修改，最终交付可直接使用的成品。",
  },
];

export const faq = [
  {
    q: "为什么前 3 位只要 399？",
    a: "因为我需要 3 个真实案例来展示效果。你用更低的价格拿到完整交付，我用你的成果（已脱敏）做案例，双赢。名额满后恢复 699 标准价。",
  },
  {
    q: "做出来的主页能直接用吗？",
    a: "可以。一页式主页会部署成一个可访问的链接，你能直接放进小红书简介、微信名片、简历里，手机打开就很清爽。",
  },
  {
    q: "你会保证我涨粉或拿到 offer 吗？",
    a: "不会，也请警惕任何这样承诺的人。我能保证的是：把你的线上形象做得更专业、把你能帮谁解决什么问题讲清楚，让别人第一眼就更信任你。",
  },
  {
    q: "需要我准备什么？",
    a: "一段自我介绍、几张能用的图（头像/作品/产品）、你想吸引的人群。没想清楚也没关系，我有一份「定位问题清单」带你一步步填。",
  },
  {
    q: "多久能交付？",
    a: "案例起步包约 3–5 天，标准包约 5–7 天，专业包约 7–10 天。急单可以加急，提前说。",
  },
  {
    q: "支持修改吗？不满意怎么办？",
    a: "每个套餐都含免费修改轮次（1–2 轮）。修改针对的是定位、文案、版式细节；大方向在第二步「定位梳理」时就会和你对齐，避免返工。",
  },
];
