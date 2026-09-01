export type Resource = {
  slug: string;
  emoji: string;
  title: string;
  desc: string;
  forWho: string;
  file: string; // path under /content/resources, also downloadable from /resources/[slug]
};

export const resources: Resource[] = [
  {
    slug: "xhs-profile-checklist",
    emoji: "✅",
    title: "小红书主页自查清单",
    desc: "20 条自查项，帮你 10 分钟看出主页哪里在「劝退」粉丝。",
    forWho: "想优化小红书主页、提升关注转化的人",
    file: "xhs-profile-checklist.md",
  },
  {
    slug: "positioning-questions",
    emoji: "🎯",
    title: "个人品牌定位问题清单",
    desc: "12 个问题，问完你就知道「你是谁、帮谁、解决什么」。",
    forWho: "还没想清楚定位、不知道从哪开始的人",
    file: "positioning-questions.md",
  },
  {
    slug: "portfolio-content-template",
    emoji: "🧩",
    title: "求职作品集网站内容模板",
    desc: "一页式作品集该写哪几块、每块写什么，直接套用。",
    forWho: "留学生 / 求职者 / 想做个人主页的人",
    file: "portfolio-content-template.md",
  },
  {
    slug: "local-business-template",
    emoji: "🏪",
    title: "小商家获客主页模板",
    desc: "餐馆 / 咖啡 / 工作室到店主页的结构与文案框架。",
    forWho: "做本地生意、想靠小红书获客的小商家",
    file: "local-business-template.md",
  },
];

export function getResource(slug: string) {
  return resources.find((r) => r.slug === slug);
}
