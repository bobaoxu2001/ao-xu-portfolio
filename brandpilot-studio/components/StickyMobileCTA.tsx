"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Copy, Check, MessageCircle } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/config";

// 移动端底部常驻 CTA 条。小红书/微信来的流量基本都在手机上，
// 一个一直在的「加微信 / 咨询」按钮能显著提升转化。仅移动端显示。
export default function StickyMobileCTA() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  // 咨询页本身已经有完整表单 + 微信卡片，不再叠加底部条
  if (pathname?.startsWith("/inquiry")) return null;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.wechatId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 忽略
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="flex items-center gap-2">
        <button
          onClick={copy}
          className="flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200 px-3.5 py-2.5 text-xs font-semibold text-ink-700 active:scale-[0.98]"
          aria-label="复制微信号"
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? "已复制" : "微信号"}
        </button>
        <Link href="/inquiry" className="btn-primary flex-1 py-2.5">
          <MessageCircle size={16} />
          立即咨询（¥399 起）
        </Link>
      </div>
    </div>
  );
}
