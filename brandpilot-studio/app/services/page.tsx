import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import PricingCards from "@/components/PricingCards";
import FAQ from "@/components/FAQ";
import WeChatCTA from "@/components/WeChatCTA";
import { process } from "@/lib/services";

export const metadata: Metadata = {
  title: "服务与价格",
  description:
    "个人品牌起步包三个套餐：¥399 案例起步包、¥699 标准包、¥1299 专业增长包。含一页式主页、小红书优化、内容选题与封面模板。",
};

const compare = [
  ["一页式个人主页", "✓", "✓", "✓"],
  ["小红书主页 / 简介优化", "✓", "✓", "✓"],
  ["内容选题方向", "3 个", "5 篇内容", "10 个（含框架）"],
  ["小红书封面模板", "1 套", "3 套", "5 套"],
  ["私信转化话术", "—", "—", "✓"],
  ["免费修改轮次", "1 轮", "2 轮", "2 轮"],
  ["参考交付周期", "3–5 天", "5–7 天", "7–10 天"],
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-soft">
        <div className="container-page py-14 sm:py-20">
          <SectionHeader
            eyebrow="服务与价格"
            title="清楚的套餐，清楚的交付"
            desc="没有隐藏项目，没有捆绑年卡。选一个适合现在的你的方案，剩下的交给我。"
          />
        </div>
      </section>

      <section className="container-page -mt-6 pb-4">
        <PricingCards />
      </section>

      {/* 对比表 */}
      <section className="container-page py-14">
        <SectionHeader eyebrow="一眼对比" title="三个套餐都包含什么" />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] overflow-hidden rounded-2xl border border-slate-100 text-sm">
            <thead>
              <tr className="bg-slate-50 text-left text-ink-900">
                <th className="px-5 py-4 font-semibold">内容</th>
                <th className="px-5 py-4 font-semibold">案例包 ¥399</th>
                <th className="px-5 py-4 font-semibold text-brand-700">标准包 ¥699</th>
                <th className="px-5 py-4 font-semibold">专业包 ¥1299</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {compare.map((row) => (
                <tr key={row[0]} className="text-ink-700">
                  <td className="px-5 py-4 font-medium text-ink-900">{row[0]}</td>
                  <td className="px-5 py-4">{row[1]}</td>
                  <td className="bg-brand-50/40 px-5 py-4 font-medium text-ink-900">
                    {row[2]}
                  </td>
                  <td className="px-5 py-4">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-xs text-ink-400">
          需要加急、或有特殊需求（多语言、特定平台）？在咨询时备注，我会单独报价。
        </p>
      </section>

      {/* 流程 */}
      <section className="bg-slate-50/60 py-14">
        <div className="container-page">
          <SectionHeader eyebrow="合作流程" title="从下单到交付，你会经历什么" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="card p-6">
                <span className="text-2xl font-bold text-gradient">{p.step}</span>
                <h3 className="mt-3 text-base font-bold text-ink-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-500">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/inquiry" className="btn-primary">
              开始咨询 <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-14">
        <SectionHeader eyebrow="常见问题" title="关于套餐，你可能想问的" />
        <div className="mt-10">
          <FAQ />
        </div>
      </section>

      <WeChatCTA />
    </>
  );
}
