import type { Metadata } from "next";
import { MessageCircle, Clock, ShieldCheck } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import { site } from "@/lib/config";

export const metadata: Metadata = {
  title: "咨询下单",
  description:
    "填写需求，生成可复制的咨询信息，添加微信一对一沟通。前 3 位案例客户 ¥399 起。",
};

export default function InquiryPage() {
  return (
    <section className="bg-soft min-h-screen">
      <div className="container-page py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* 左侧说明 */}
          <div>
            <span className="chip">
              <MessageCircle size={14} />
              一对一 · 微信沟通
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink-900 sm:text-4xl">
              告诉我你的情况，
              <br />
              <span className="text-gradient">我帮你把它做对。</span>
            </h1>
            <p className="mt-4 text-base leading-7 text-ink-500">
              填完右边的表单会生成一段「需求信息」，你复制后加我微信发给我即可——
              没有注册、没有数据库，刻意保持简单。
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: Clock,
                  t: "24 小时内回复",
                  d: "收到信息后，我会尽快回复并发你相关案例。",
                },
                {
                  icon: ShieldCheck,
                  t: "先聊清楚再开始",
                  d: "不合适会直说，不会硬推套餐给你。",
                },
                {
                  icon: MessageCircle,
                  t: "前 3 位 ¥399",
                  d: "用更低的价格拿到完整交付，成为我的案例客户。",
                },
              ].map((item) => (
                <div key={item.t} className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-soft">
                    <item.icon size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{item.t}</p>
                    <p className="text-sm text-ink-500">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-brand-100 bg-white p-5 shadow-soft">
              <p className="text-sm text-ink-500">现在就想加微信？</p>
              <p className="mt-1 text-lg font-bold text-ink-900">
                微信号：
                <span className="text-gradient">{site.wechatId}</span>
              </p>
              <p className="mt-1 text-xs text-ink-400">添加时备注「个人品牌」，通过更快。</p>
            </div>
          </div>

          {/* 右侧表单 */}
          <div>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
