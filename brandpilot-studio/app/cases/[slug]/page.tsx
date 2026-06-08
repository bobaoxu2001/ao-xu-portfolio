import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Target,
  Lightbulb,
  Globe,
  AtSign,
  FileText,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { cases, getCase } from "@/lib/cases";
import WeChatCTA from "@/components/WeChatCTA";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const c = getCase(params.slug);
  if (!c) return { title: "案例未找到" };
  return { title: `${c.category} · ${c.name}`, description: c.oneLiner };
}

function Block({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card p-6 sm:p-7">
      <div className="flex items-center gap-2 text-brand-700">
        <Icon size={20} />
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default function CaseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const c = getCase(params.slug);
  if (!c) notFound();

  return (
    <>
      {/* Hero */}
      <section className={`bg-gradient-to-br ${c.accent}`}>
        <div className="container-page py-12 sm:py-16">
          <Link
            href="/#cases"
            className="inline-flex items-center gap-1 text-sm font-medium text-white/85 hover:text-white"
          >
            <ArrowLeft size={16} /> 返回案例
          </Link>
          <div className="mt-6">
            <span className="text-5xl">{c.emoji}</span>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-white/80">
              {c.category}
            </p>
            <h1 className="mt-1 text-2xl font-bold text-white sm:text-4xl">{c.name}</h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-white/90">
              {c.headline}
            </p>
          </div>
        </div>
      </section>

      <div className="container-narrow space-y-6 py-12 sm:py-16">
        {/* 演示声明 */}
        <p className="rounded-xl border border-amber-100 bg-amber-50 px-4 py-3 text-xs text-amber-700">
          ⚠️ 这是一个演示案例（人物为虚构示意），用于展示交付物的结构与质感，非真实客户隐私。
        </p>

        {/* 客户画像 */}
        <Block icon={Target} title="客户画像">
          <ul className="space-y-3 text-sm leading-6 text-ink-700">
            <li>
              <span className="font-semibold text-ink-900">是谁：</span>
              {c.profile.who}
            </li>
            <li>
              <span className="font-semibold text-ink-900">目标：</span>
              {c.profile.goal}
            </li>
            <li>
              <span className="font-semibold text-ink-900">用在哪：</span>
              {c.profile.channel}
            </li>
          </ul>
        </Block>

        {/* 问题 */}
        <Block icon={Lightbulb} title="遇到的问题">
          <ul className="space-y-2 text-sm leading-6 text-ink-700">
            {c.problem.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-accent-500">·</span>
                {p}
              </li>
            ))}
          </ul>
        </Block>

        {/* 解决方案 */}
        <Block icon={TrendingUp} title="我们的解决方案">
          <ul className="space-y-2 text-sm leading-6 text-ink-700">
            {c.solution.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-brand-500">→</span>
                {p}
              </li>
            ))}
          </ul>
        </Block>

        {/* 主页预览 */}
        <Block icon={Globe} title="一页式主页 · 文案预览">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            {/* 模拟浏览器条 */}
            <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            </div>
            <div className={`bg-gradient-to-br ${c.accent} px-6 py-8 text-center`}>
              <p className="text-xl font-bold text-white">{c.website.heroName}</p>
              <p className="mt-1 text-sm font-medium text-white/85">
                {c.website.heroTitle}
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/90">
                {c.website.heroTagline}
              </p>
              <span className="mt-4 inline-flex rounded-full bg-white px-5 py-2 text-xs font-semibold text-ink-900">
                {c.website.cta}
              </span>
            </div>
            <div className="divide-y divide-slate-100 bg-white">
              {c.website.sections.map((s) => (
                <div key={s.label} className="px-6 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                    {s.label}
                  </p>
                  <p className="mt-1.5 whitespace-pre-line text-sm leading-6 text-ink-700">
                    {s.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Block>

        {/* 小红书简介 */}
        <Block icon={AtSign} title="小红书主页简介">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-base font-bold text-ink-900">{c.xhsBio.nickname}</p>
            <div className="mt-2 space-y-1">
              {c.xhsBio.bio.map((line) => (
                <p key={line} className="text-sm leading-6 text-ink-700">
                  {line}
                </p>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-slate-50 px-4 py-3">
              <p className="text-xs font-semibold text-ink-400">置顶笔记建议</p>
              <p className="mt-1 text-sm font-medium text-ink-900">
                📌 {c.xhsBio.pinned}
              </p>
            </div>
          </div>
        </Block>

        {/* 3 个选题 */}
        <Block icon={FileText} title="3 个内容选题">
          <div className="space-y-3">
            {c.posts.map((p, i) => (
              <div
                key={p.title}
                className="rounded-xl border border-slate-100 bg-slate-50/60 p-4"
              >
                <p className="text-sm font-semibold text-ink-900">
                  {i + 1}. {p.title}
                </p>
                <p className="mt-1 text-xs leading-5 text-ink-500">角度：{p.angle}</p>
              </div>
            ))}
          </div>
        </Block>

        {/* Before / After */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="card border-slate-200 p-6">
            <p className="text-sm font-semibold text-ink-400">改造前</p>
            <p className="mt-2 text-sm leading-6 text-ink-500">{c.beforeAfter.before}</p>
          </div>
          <div className="card border-brand-200 bg-brand-50/40 p-6">
            <p className="text-sm font-semibold text-brand-600">改造后</p>
            <p className="mt-2 text-sm leading-6 text-ink-700">{c.beforeAfter.after}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="card flex flex-col items-center gap-4 p-8 text-center">
          <h2 className="text-xl font-bold text-ink-900">想要一个属于你的同款？</h2>
          <p className="max-w-md text-sm leading-6 text-ink-500">
            前 3 位案例客户 ¥399 起，含一页式主页、小红书优化、内容选题与封面模板。
          </p>
          <Link href="/inquiry" className="btn-primary">
            填写咨询表 <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <WeChatCTA />
    </>
  );
}
