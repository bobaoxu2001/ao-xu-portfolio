# BrandPilot Studio · 个人品牌起步包

一个为 **留学生、求职者、自由职业者、小商家、创作者** 提供「线上名片」搭建服务的落地页 + 销售站。
用 Next.js 14 + Tailwind CSS 构建，静态页面、移动优先、零后端，**为 Vercel 一键部署而生**。

> 目标：用最快的速度上线 → 展示案例 → 收集线索 → 在微信成交。
> 不做 SaaS、不做登录/后台/支付/数据库。

---

## ✨ 包含什么

| 页面 | 路径 | 作用 |
| --- | --- | --- |
| 首页 | `/` | Hero、价值主张、适合谁、Before/After、套餐、3 个案例、流程、诚实承诺、FAQ、CTA |
| 服务与价格 | `/services` | 三档套餐 + 对比表 + 流程 + FAQ |
| 案例详情 ×3 | `/cases/[slug]` | 客户画像 / 问题 / 方案 / 主页预览 / 小红书简介 / 选题 / Before·After |
| 咨询下单 | `/inquiry` | 线索表单（生成可复制信息 + mailto + 引导加微信，**无后端**） |
| 免费资源 ×4 | `/resources` `/resources/[slug]` | 4 份 lead magnet（真实 markdown 内容） |

配套文档（仓库根目录）：
- `LAUNCH_PLAN.md` — 7 天上线计划、找前 10 个客户、小红书发布计划、微信话术
- `CONTENT_PACK.md` — 10 篇笔记、标题、钩子、Before/After 选题、私信与跟进话术
- `DELIVERY_TEMPLATES.md` — 客户问卷、交付模板、修改政策、交付话术
- `CASE_STUDIES.md` — 3 个可发给客户的案例
- `TODO.md` — 你需要手动完成的事

---

## 🚀 本地运行

需要 Node.js 18+。

```bash
cd brandpilot-studio
npm install
npm run dev
```

打开 http://localhost:3000 。

其他命令：

```bash
npm run build   # 生产构建（已验证通过）
npm run start   # 本地预览生产构建
npm run lint    # 代码检查
```

---

## ⚙️ 上线前必改（只改 1 个文件）

打开 **`lib/config.ts`**，替换以下占位符：

```ts
wechatId: "YOUR_WECHAT_ID",        // ← 换成你的真实微信号（必改）
contactEmail: "YOUR_EMAIL@...",    // ← 咨询表 mailto 兜底（可选）
xiaohongshu: "YOUR_XHS_ID",        // ← 你的小红书号（可选）
url: "https://...",                // ← 部署后的真实域名
```

微信号在「页脚 / 咨询页 / 所有 CTA / 资源文末」会自动生效。
资源 markdown 里的 `YOUR_WECHAT_ID` 也会在渲染时自动替换成 `config.ts` 里的值。

---

## ☁️ 部署到 Vercel

**方式 A：网页（推荐，最快）**
1. 把 `brandpilot-studio/` 推到一个 GitHub 仓库。
2. 打开 [vercel.com](https://vercel.com) → New Project → 导入该仓库。
3. 如果 `brandpilot-studio` 是子目录，在 **Root Directory** 选择它。
4. Framework 自动识别为 Next.js，直接 Deploy。
5. 在 Project → Settings → Domains 绑定你的域名（可选）。

**方式 B：命令行**
```bash
npm i -g vercel
cd brandpilot-studio
vercel        # 首次部署，按提示操作
vercel --prod # 发布到生产环境
```

部署后记得回到 `lib/config.ts` 把 `url` 改成正式域名并重新部署。

---

## 🗂 项目结构

```
brandpilot-studio/
├── app/
│   ├── layout.tsx            # 全局布局（Navbar / Footer / 字体 / SEO）
│   ├── page.tsx              # 首页
│   ├── services/page.tsx     # 服务与价格
│   ├── inquiry/page.tsx      # 咨询下单
│   ├── resources/
│   │   ├── page.tsx          # 资源列表
│   │   └── [slug]/page.tsx   # 资源详情（读取 content/ 下 markdown）
│   └── cases/[slug]/page.tsx # 案例详情
├── components/               # Navbar, Footer, PricingCards, CaseCard, FAQ,
│                             # InquiryForm, WeChatCTA, SectionHeader, Markdown
├── lib/
│   ├── config.ts             # ⭐ 全站配置（微信号等占位符在这）
│   ├── services.ts           # 套餐 / 流程 / FAQ 数据
│   ├── cases.ts              # 3 个案例数据
│   └── resources.ts          # 资源元数据
├── content/resources/*.md    # 4 份 lead magnet 的真实内容
└── （根目录文档见上）
```

要改文案/价格/案例，**不用动组件**，改 `lib/` 下的数据文件即可。

---

## 🧱 技术栈

- **Next.js 14**（App Router，全静态导出友好）
- **Tailwind CSS 3**（自定义品牌色 + 渐变 + 软阴影）
- **lucide-react** 图标
- TypeScript · ESLint
- 无数据库、无后端、无第三方依赖锁定 → 部署快、维护几乎为零

---

## 🤝 设计原则

- 移动优先（客户主要来自小红书 / 微信）
- 高级但简洁，像一个 AI/产品工作室，而不是廉价代运营
- **诚实文案**：不承诺涨粉、不承诺 offer、不刷数据
- CTA 始终醒目，引导加微信成交
