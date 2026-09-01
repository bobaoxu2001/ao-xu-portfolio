import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import WeChatCTA from "@/components/WeChatCTA";
import { resources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "免费资源",
  description:
    "免费领取：小红书主页自查清单、个人品牌定位问题清单、求职作品集网站内容模板、小商家获客主页模板。",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-soft">
        <div className="container-page py-14 sm:py-20">
          <SectionHeader
            eyebrow="免费资源"
            title="先用这些自己动手，做不动了再找我"
            desc="4 份可以直接用的清单与模板。我相信先给价值，你才会信任我。"
          />
        </div>
      </section>

      <section className="container-page -mt-6 pb-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {resources.map((r) => (
            <Link
              key={r.slug}
              href={`/resources/${r.slug}`}
              className="card card-hover group flex flex-col p-6 sm:p-7"
            >
              <span className="text-3xl">{r.emoji}</span>
              <h3 className="mt-4 text-lg font-bold text-ink-900">{r.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-ink-500">{r.desc}</p>
              <p className="mt-4 text-xs font-medium text-brand-700">适合：{r.forWho}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                <Download size={15} />
                免费查看 / 下载
                <ArrowRight size={15} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <WeChatCTA
        title="想要「已经做好的」版本？"
        desc="资源是自助版，起步包是「我帮你做好版」。前 3 位案例客户 ¥399 起，加我微信聊聊。"
      />
    </>
  );
}
