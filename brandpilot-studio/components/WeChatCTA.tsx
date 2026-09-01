import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { site } from "@/lib/config";

export default function WeChatCTA({
  title = "准备好让你的线上名片更专业了吗？",
  desc = "前 3 位案例客户 ¥399 起。加我微信，发你案例，聊聊你的情况——不合适也没关系。",
}: {
  title?: string;
  desc?: string;
}) {
  return (
    <section className="container-page py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-grad-brand px-6 py-12 text-center shadow-glow sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-2xl font-bold text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
            {desc}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/inquiry"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-soft transition hover:bg-brand-50 active:scale-[0.98]"
            >
              <MessageCircle size={18} />
              填写咨询表
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-[0.98]"
            >
              查看服务与价格 <ArrowRight size={16} />
            </Link>
          </div>
          <p className="mt-6 text-xs text-white/70">
            微信号：<span className="font-semibold text-white">{site.wechatId}</span>
            （备注：个人品牌）
          </p>
        </div>
      </div>
    </section>
  );
}
