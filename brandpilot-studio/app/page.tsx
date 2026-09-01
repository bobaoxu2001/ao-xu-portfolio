import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Dumbbell,
  Store,
  Palette,
  Briefcase,
  ShieldCheck,
  XCircle,
  CheckCircle2,
} from "lucide-react";
import { site, honestPromise, honestDisavow } from "@/lib/config";
import { process } from "@/lib/services";
import { cases } from "@/lib/cases";
import SectionHeader from "@/components/SectionHeader";
import PricingCards from "@/components/PricingCards";
import CaseCard from "@/components/CaseCard";
import FAQ from "@/components/FAQ";
import WeChatCTA from "@/components/WeChatCTA";
import SlotsBadge from "@/components/SlotsBadge";

const audiences = [
  { icon: GraduationCap, label: "留学生 / 求职者", desc: "一页式作品集，HR 30 秒看懂你" },
  { icon: Briefcase, label: "自由职业者", desc: "把技能变成可被信任的服务" },
  { icon: Dumbbell, label: "个人 IP / 教练", desc: "建立专业信任，承接咨询" },
  { icon: Store, label: "小商家", desc: "小红书获客 + 到店转化主页" },
  { icon: Palette, label: "创作者", desc: "清晰定位，让人记得住你" },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="bg-soft">
        <div className="container-page py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <SlotsBadge className="mx-auto" />
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink-900 sm:text-5xl">
              7 天内，把你的
              <span className="text-gradient">「线上名片」</span>
              <br className="hidden sm:block" />
              做得更专业。
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink-500 sm:text-lg">
              {site.subTagline}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/inquiry" className="btn-primary px-7">
                立即咨询（¥399 起）
                <ArrowRight size={18} />
              </Link>
              <Link href="#cases" className="btn-ghost px-7">
                先看 3 个案例
              </Link>
            </div>
            <p className="mt-5 text-xs text-ink-400">
              不刷数据 · 不承诺涨粉 · 只把你的专业感做出来
            </p>
          </div>

          {/* 信任小条 */}
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["3–7 天", "快速交付"],
              ["一页式", "随时可发的链接"],
              ["1–2 轮", "免费修改"],
              ["微信", "一对一沟通"],
            ].map(([big, small]) => (
              <div key={small} className="text-center">
                <p className="text-xl font-bold text-ink-900">{big}</p>
                <p className="mt-1 text-xs text-ink-400">{small}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 价值主张 ============ */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeader
          eyebrow="为什么需要它"
          title="你不缺能力，缺一个「让人第一眼信任你」的线上形象"
          desc="无论求职、接单还是获客，别人都会先搜你、先看你的主页。我们帮你把这一面做对。"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            {
              t: "讲清你是谁",
              d: "一句话定位，让人立刻知道你能帮谁、解决什么问题。",
            },
            {
              t: "看起来很专业",
              d: "干净的版式、统一的视觉，第一眼就比同行更可信。",
            },
            {
              t: "知道下一步",
              d: "清晰的引导，让看到的人愿意私信你、约你、找你下单。",
            },
          ].map((item) => (
            <div key={item.t} className="card card-hover p-6">
              <CheckCircle2 className="text-brand-500" size={24} />
              <h3 className="mt-4 text-base font-bold text-ink-900">{item.t}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-500">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ 适合谁 ============ */}
      <section className="bg-slate-50/60 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader eyebrow="适合谁" title="这套服务为这些人而做" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map((a) => (
              <div key={a.label} className="card p-5 text-center">
                <a.icon className="mx-auto text-brand-500" size={26} />
                <p className="mt-3 text-sm font-bold text-ink-900">{a.label}</p>
                <p className="mt-1 text-xs leading-5 text-ink-500">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Before / After ============ */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeader
          eyebrow="改造前后"
          title="同样的你，不一样的第一印象"
          desc="我们不改变你是谁，只是把你已有的价值，讲得更清楚、更专业。"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="card border-slate-200 p-6">
            <div className="flex items-center gap-2 text-ink-400">
              <XCircle size={18} />
              <span className="text-sm font-semibold">改造前</span>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-ink-500">
              <li>· 简介写「记录生活 / 欢迎咨询」，没人知道你能帮什么。</li>
              <li>· 信息散落在简历、GitHub、朋友圈，别人懒得拼。</li>
              <li>· 看起来和其他几百个人一样，记不住、不敢找。</li>
            </ul>
          </div>
          <div className="card border-brand-200 bg-brand-50/40 p-6">
            <div className="flex items-center gap-2 text-brand-600">
              <CheckCircle2 size={18} />
              <span className="text-sm font-semibold">改造后</span>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-ink-700">
              <li>· 一句话定位，3 秒说清「你帮谁、解决什么」。</li>
              <li>· 一个链接搞定一切：作品、服务、联系方式。</li>
              <li>· 视觉统一、有记忆点，别人愿意私信你。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============ 套餐 / 价格 ============ */}
      <section id="services" className="bg-slate-50/60 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="套餐与价格"
            title="选一个适合现在的你的方案"
            desc="前 3 位案例客户享 ¥399 起。名额满后恢复 ¥699 标准价。"
          />
          <div className="mt-12">
            <PricingCards />
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="text-sm font-semibold text-brand-600 hover:underline">
              查看每个套餐的详细内容 →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 案例 ============ */}
      <section id="cases" className="container-page py-16 sm:py-20">
        <SectionHeader
          eyebrow="3 个案例"
          title="看看我们能为你做出什么"
          desc="以下为演示案例，展示交付的内容结构与质感（人物为虚构示意）。"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <CaseCard key={c.slug} c={c} />
          ))}
        </div>
      </section>

      {/* ============ 流程 ============ */}
      <section className="bg-slate-50/60 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader eyebrow="合作流程" title="4 步，从模糊到清晰" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="card p-6">
                <span className="text-2xl font-bold text-gradient">{p.step}</span>
                <h3 className="mt-3 text-base font-bold text-ink-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 诚实承诺 ============ */}
      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-brand-100 bg-brand-50/40 p-8 sm:p-10">
          <div className="flex items-center gap-2 text-brand-700">
            <ShieldCheck size={22} />
            <h2 className="text-xl font-bold">我们的诚实承诺</h2>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-ink-900">我们会做到</p>
              <ul className="mt-3 space-y-2">
                {honestPromise.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-ink-700">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink-900">我们不会做</p>
              <ul className="mt-3 space-y-2">
                {honestDisavow.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-ink-500">
                    <XCircle size={16} className="mt-0.5 shrink-0 text-ink-300" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-slate-50/60 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader eyebrow="常见问题" title="你可能想问的" />
          <div className="mt-10">
            <FAQ />
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <WeChatCTA />
    </>
  );
}
