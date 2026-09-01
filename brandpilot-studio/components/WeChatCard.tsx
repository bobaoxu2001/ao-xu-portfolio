"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, Copy, QrCode } from "lucide-react";
import { site } from "@/lib/config";

// 微信加好友卡片：有二维码就显示二维码（中国用户习惯扫码），
// 同时给出微信号 + 一键复制按钮。
export default function WeChatCard({ note = "个人品牌" }: { note?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.wechatId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 剪贴板不可用时静默失败，用户仍可手动选择文本
    }
  };

  return (
    <div className="rounded-2xl border border-brand-100 bg-white p-5 shadow-soft">
      <div className="flex items-center gap-4">
        {site.wechatQr ? (
          <Image
            src={site.wechatQr}
            alt="微信二维码"
            width={96}
            height={96}
            className="h-24 w-24 shrink-0 rounded-xl border border-slate-100"
          />
        ) : (
          <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 text-center text-ink-400">
            <QrCode size={28} />
            <span className="mt-1 px-1 text-[10px] leading-tight">
              二维码放这
            </span>
          </div>
        )}

        <div className="min-w-0 flex-1">
          <p className="text-sm text-ink-500">
            {site.wechatQr ? "微信扫码加我，或搜索微信号" : "添加我的微信"}
          </p>
          <p className="mt-1 truncate text-lg font-bold text-ink-900">
            {site.wechatId}
          </p>
          <p className="mt-0.5 text-xs text-ink-400">添加时备注「{note}」,通过更快</p>
          <button
            onClick={copy}
            className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-ink-700 transition hover:border-brand-300 hover:bg-brand-50 active:scale-[0.98]"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "已复制" : "复制微信号"}
          </button>
        </div>
      </div>
    </div>
  );
}
