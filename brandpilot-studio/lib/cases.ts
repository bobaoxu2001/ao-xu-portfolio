export type PostIdea = {
  title: string;
  angle: string;
};

export type DemoCase = {
  slug: string;
  category: string;
  emoji: string;
  name: string;
  headline: string;
  oneLiner: string;
  accent: string; // tailwind gradient classes for the header
  profile: {
    who: string;
    goal: string;
    channel: string;
  };
  problem: string[];
  solution: string[];
  // 主页预览文案
  website: {
    heroName: string;
    heroTitle: string;
    heroTagline: string;
    cta: string;
    sections: { label: string; content: string }[];
  };
  // 小红书简介
  xhsBio: {
    nickname: string;
    bio: string[];
    pinned: string;
  };
  posts: PostIdea[];
  beforeAfter: { before: string; after: string };
};

export const cases: DemoCase[] = [
  // ===================================================================
  // CASE 1 — 留学生求职作品集
  // ===================================================================
  {
    slug: "data-analyst-portfolio",
    category: "留学生求职作品集",
    emoji: "📊",
    name: "Lina · 数据分析 / AI 产品方向",
    headline: "把零散的实习和项目，整理成一页能投出去的作品集",
    oneLiner: "留学生求职：Data Analyst / AI Product Manager 一页式作品集",
    accent: "from-indigo-500 via-violet-500 to-blue-500",
    profile: {
      who: "美国 Master 在读，数据/商业分析背景，目标进互联网或科技公司做 Data Analyst 或 AI Product。",
      goal: "秋招 / 暑期实习投递时，有一个能放进简历和领英、让 HR 30 秒看懂她价值的主页。",
      channel: "LinkedIn 简介、简历页眉、内推时甩给学长学姐的链接。",
    },
    problem: [
      "简历上项目很多，但一句话说不清「我到底擅长什么」。",
      "GitHub 和 PDF 简历太分散，HR 没耐心一个个点开。",
      "英文表达没问题，但缺一个让人 30 秒记住她的「定位」。",
    ],
    solution: [
      "用一句话定位：「用数据找到增长机会的 Data Analyst，懂业务也懂模型」。",
      "一页式主页把 3 个核心项目结构化：背景 → 我做了什么 → 带来的结果（量化）。",
      "把 LinkedIn 简介重写成可被搜索、可被记住的版本，附主页链接。",
    ],
    website: {
      heroName: "Lina Z.",
      heroTitle: "Data Analyst · AI Product",
      heroTagline: "用数据找到增长机会，把模糊的问题变成可执行的决策。",
      cta: "查看我的项目 / 联系我",
      sections: [
        {
          label: "About",
          content:
            "商业分析硕士在读，2 段数据相关实习。擅长用 SQL + Python 把杂乱数据变成业务能看懂的结论，做过从指标搭建到 A/B 实验的完整闭环。",
        },
        {
          label: "Selected Projects",
          content:
            "① 电商复购预测：清洗 50w 行订单数据，搭建复购模型，识别高价值用户，帮助营销把转化率提升约 18%。\n② 用户分群 Dashboard：用 Tableau 搭建可交互看板，把运营每周分析时间从 4 小时降到 30 分钟。\n③ AI 产品 Side Project：基于 LLM 做的简历润色小工具，2 周获得 300+ 试用。",
        },
        {
          label: "Skills",
          content: "SQL · Python (pandas) · A/B Testing · Tableau · Product Sense · 英文/中文",
        },
        {
          label: "Contact",
          content: "LinkedIn / Email / 简历下载，一键直达。",
        },
      ],
    },
    xhsBio: {
      nickname: "Lina｜数据分析求职日记",
      bio: [
        "📊 商业分析硕士 · 目标 Data Analyst / AI PM",
        "用数据找增长，分享留学求职真实经历",
        "👇 作品集主页 & 简历模板自取",
      ],
      pinned: "我的一页式作品集长什么样（附搭建思路）",
    },
    posts: [
      {
        title: "留学生求职，简历之外你还差一个「作品集主页」",
        angle: "痛点科普：为什么 PDF 简历不够，HR 更想要一个链接。",
      },
      {
        title: "Data Analyst 面试，我把项目讲成了这个结构",
        angle: "干货框架：背景→动作→量化结果，附可套用模板。",
      },
      {
        title: "从 0 搭一页式作品集，我踩过的 3 个坑",
        angle: "真实经历 + 可信度，引导私信咨询同款。",
      },
    ],
    beforeAfter: {
      before:
        "简历里写「熟悉 Python、SQL，做过数据分析项目」——和其他几百份一模一样，HR 记不住。",
      after:
        "主页第一屏写「用数据找到增长机会的 Data Analyst」，下面 3 个量化项目，HR 30 秒看懂、愿意约面。",
    },
  },

  // ===================================================================
  // CASE 2 — 健身教练个人品牌
  // ===================================================================
  {
    slug: "fitness-coach-brand",
    category: "个人 IP / 健身教练",
    emoji: "💪",
    name: "阿May · 私人健身教练",
    headline: "把「又一个健身教练」做成「让人想约的那一个」",
    oneLiner: "健身教练个人品牌主页：建立信任、承接私教咨询",
    accent: "from-rose-500 via-orange-400 to-amber-400",
    profile: {
      who: "5 年经验的私人教练，擅长产后恢复和体态矫正，主要靠老客户转介绍。",
      goal: "在小红书获客，让潜在客户先信任她，再来私信约体验课。",
      channel: "小红书主页、朋友圈、线下递给客户的电子名片。",
    },
    problem: [
      "主页上全是「证书 + 肌肉照」，和所有教练长得一样，没记忆点。",
      "潜在客户看完不知道「她适合帮谁」，也不知道下一步该做什么。",
      "私信来了不知道怎么接，经常聊两句就没下文。",
    ],
    solution: [
      "聚焦人群定位：「专帮产后妈妈找回体态和力量的私人教练」。",
      "主页结构：我帮谁 → 学员真实变化 → 我的训练方式 → 怎么开始（约体验课）。",
      "配一套私信话术：从「在吗」到「约体验课」的 5 步引导。",
    ],
    website: {
      heroName: "阿 May",
      heroTitle: "产后体态 · 私人教练",
      heroTagline: "专帮产后妈妈，安全地找回体态、力量和自信。",
      cta: "预约一次体验课",
      sections: [
        {
          label: "我能帮你",
          content:
            "如果你是产后想恢复、却怕练错、没时间去大健身房的妈妈——我设计的是循序渐进、在家也能做的方案，先把核心和体态打好基础。",
        },
        {
          label: "学员变化（已获授权）",
          content:
            "· 产后 8 个月，12 周改善骨盆前倾，腰痛明显减轻。\n· 全职妈妈，每周 3 次 30 分钟居家训练，体态照肉眼可见变化。\n（真实案例脱敏展示，注重过程而非夸张承诺）",
        },
        {
          label: "训练方式",
          content: "评估体态 → 定制计划 → 每周跟练打卡 → 动作纠正 → 阶段复盘。线上线下都可以。",
        },
        {
          label: "如何开始",
          content: "先约一次 30 分钟体验课，我帮你做体态评估，再决定要不要继续。不催单、不办年卡。",
        },
      ],
    },
    xhsBio: {
      nickname: "阿May｜产后体态私教",
      bio: [
        "💪 5 年私教 · 专注产后体态 & 力量恢复",
        "在家也能练 · 不踩雷 · 温柔但有效",
        "👇 体态自查表 + 体验课预约",
      ],
      pinned: "产后该不该练？先看这 3 个体态自查动作",
    },
    posts: [
      {
        title: "产后腰痛、肚子收不回，可能不是胖，是体态",
        angle: "戳中人群痛点，建立专业信任，引导自查。",
      },
      {
        title: "我从不让产后学员第一天就练腹肌，原因是…",
        angle: "反常识观点，体现专业度和安全意识。",
      },
      {
        title: "一个全职妈妈，12 周居家训练的真实变化",
        angle: "学员故事 + 过程展示，自然引出体验课。",
      },
    ],
    beforeAfter: {
      before: "主页：「ACE 认证私人教练，5 年经验，欢迎咨询」+ 一堆健身照。没人知道该不该找她。",
      after: "主页：「专帮产后妈妈找回体态」+ 学员真实变化 + 「先约 30 分钟体验课」。咨询量肉眼可见上升。",
    },
  },

  // ===================================================================
  // CASE 3 — 本地小商家获客
  // ===================================================================
  {
    slug: "local-cafe-xhs",
    category: "小商家获客主页",
    emoji: "☕️",
    name: "拐角咖啡 · 社区咖啡馆",
    headline: "让路过的人，先在手机上爱上这家店",
    oneLiner: "本地餐馆 / 咖啡店：小红书获客主页 + 到店转化",
    accent: "from-amber-500 via-yellow-500 to-lime-500",
    profile: {
      who: "开在社区街角的独立咖啡馆，老板自己拍照发小红书，但没什么人进来。",
      goal: "让附近 3 公里的人通过小红书发现这家店、知道招牌是什么、愿意来打卡。",
      channel: "小红书主页（挂团购/地址）、大众点评、店内桌贴二维码。",
    },
    problem: [
      "小红书主页只有几张随手拍，看不出「这家店为什么值得来」。",
      "没有招牌记忆点，刷到的人不会停下来，也搜不到。",
      "到店转化全靠运气，没有引导收藏 / 团购 / 地址的钩子。",
    ],
    solution: [
      "提炼一句店铺定位：「社区里那杯让你慢下来的手冲」+ 一个招牌单品。",
      "一页式到店主页：招牌 → 环境 → 怎么找到 → 到店福利，扫码即看。",
      "小红书主页改造 + 3 条引流选题（探店向 / 招牌向 / 氛围向）。",
    ],
    website: {
      heroName: "拐角咖啡 Corner Coffee",
      heroTitle: "社区手冲 · 慢一点的下午",
      heroTagline: "藏在街角的一杯手冲，给每天奔忙的你 15 分钟喘口气。",
      cta: "导航到店 / 看招牌",
      sections: [
        {
          label: "招牌必点",
          content: "· 焦糖海盐手冲拿铁（招牌）\n· 当季单一产地手冲\n· 手工可颂（每天限量）",
        },
        {
          label: "为什么值得来",
          content: "豆子两周一换，老板亲手冲；店里只有 12 个座位，安静、有大窗、适合一个人发呆或带电脑。",
        },
        {
          label: "怎么找到我们",
          content: "XX 路 XX 号街角（地铁 X 号线 X 站 5 分钟）。门口有棵大树，看到就到了。",
        },
        {
          label: "到店福利",
          content: "小红书关注 + 出示本页，第一杯手冲立减 5 元；工作日下午 2–4 点第二杯半价。",
        },
      ],
    },
    xhsBio: {
      nickname: "拐角咖啡｜社区手冲小馆",
      bio: [
        "☕️ 街角 12 座小店 · 豆子两周一换",
        "招牌：焦糖海盐手冲拿铁 | 工作日下午有福利",
        "👇 地址 & 到店福利在这",
      ],
      pinned: "藏在 XX 路街角的手冲小店，本地人才知道",
    },
    posts: [
      {
        title: "在 XX 开了家只有 12 个座位的咖啡馆",
        angle: "故事 + 氛围，建立社区归属感和好奇心。",
      },
      {
        title: "本地人私藏：这杯焦糖海盐手冲，我能喝一周",
        angle: "招牌单品种草，强地点关键词，利于被搜到。",
      },
      {
        title: "工作日下午来,第二杯半价(附隐藏菜单)",
        angle: "明确到店福利钩子,引导收藏 + 到店核销。",
      },
    ],
    beforeAfter: {
      before: "小红书主页：几张随手拍的咖啡照 + 「新店开业欢迎光临」。刷过的人没有理由专门跑一趟。",
      after: "主页：招牌单品 + 12 座小店人设 + 到店福利 + 清晰地址。本地人开始「专门来打卡」。",
    },
  },
];

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}
