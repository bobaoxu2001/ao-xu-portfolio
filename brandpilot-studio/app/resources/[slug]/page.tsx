import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { ArrowLeft } from "lucide-react";
import { resources, getResource } from "@/lib/resources";
import { site } from "@/lib/config";
import Markdown from "@/components/Markdown";
import WeChatCTA from "@/components/WeChatCTA";

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const r = getResource(params.slug);
  if (!r) return { title: "资源未找到" };
  return { title: r.title, description: r.desc };
}

function readResource(file: string): string {
  const full = path.join(process.cwd(), "content", "resources", file);
  let raw = fs.readFileSync(full, "utf-8");
  // 把模板里的占位符替换成配置中的真实微信号
  raw = raw.replaceAll("YOUR_WECHAT_ID", site.wechatId);
  return raw;
}

export default function ResourceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const r = getResource(params.slug);
  if (!r) notFound();
  const content = readResource(r.file);

  return (
    <>
      <article className="container-narrow py-12 sm:py-16">
        <Link
          href="/resources"
          className="inline-flex items-center gap-1 text-sm font-medium text-ink-500 hover:text-brand-600"
        >
          <ArrowLeft size={16} /> 返回资源列表
        </Link>
        <div className="mt-6 flex items-center gap-3">
          <span className="text-4xl">{r.emoji}</span>
          <div>
            <p className="text-xs font-medium text-brand-600">免费资源</p>
            <h1 className="text-2xl font-bold text-ink-900">{r.title}</h1>
          </div>
        </div>

        <div className="mt-8 card p-6 sm:p-8">
          <Markdown content={content} />
        </div>

        <p className="mt-6 text-center text-xs text-ink-400">
          想保存？用浏览器「打印 / 存为 PDF」即可带走这份清单。
        </p>
      </article>

      <WeChatCTA
        title="自助版用得不错？「帮你做好版」了解一下"
        desc="前 3 位案例客户 ¥399 起。加我微信，我直接帮你把主页和定位做出来。"
      />
    </>
  );
}
