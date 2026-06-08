"use client";

import { useMemo, useState } from "react";
import { Check, Copy, Mail, MessageCircle } from "lucide-react";
import { site } from "@/lib/config";

const needOptions = [
  "求职作品集",
  "个人 IP",
  "小商家官网",
  "小红书主页优化",
  "其他",
];

const budgetOptions = ["¥399（前 3 位案例）", "¥699 标准包", "¥1299 专业包", "还不确定"];

type FormState = {
  name: string;
  wechat: string;
  need: string;
  link: string;
  deadline: string;
  budget: string;
  notes: string;
};

const empty: FormState = {
  name: "",
  wechat: "",
  need: needOptions[0],
  link: "",
  deadline: "",
  budget: budgetOptions[0],
  notes: "",
};

export default function InquiryForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const update = (k: keyof FormState, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const summary = useMemo(() => {
    return [
      "【个人品牌起步包 · 咨询】",
      `称呼：${form.name || "（未填）"}`,
      `微信号：${form.wechat || "（未填）"}`,
      `需求：${form.need}`,
      `现有链接/账号：${form.link || "（无）"}`,
      `期望交付时间：${form.deadline || "（未定）"}`,
      `预算：${form.budget}`,
      `补充说明：${form.notes || "（无）"}`,
    ].join("\n");
  }, [form]);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      `个人品牌起步包咨询 - ${form.name || "新客户"}`
    );
    const body = encodeURIComponent(summary);
    return `mailto:${site.contactEmail}?subject=${subject}&body=${body}`;
  }, [summary, form.name]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 剪贴板不可用时静默失败，用户仍可手动选择文本
    }
  };

  const inputCls =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100";
  const labelCls = "mb-1.5 block text-sm font-medium text-ink-900";

  if (submitted) {
    return (
      <div className="card p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600">
            <Check size={22} />
          </span>
          <h3 className="text-lg font-bold text-ink-900">最后一步：把信息发给我</h3>
        </div>
        <p className="mt-3 text-sm leading-6 text-ink-500">
          这个页面没有后台数据库（刻意保持简单）。请用下面任意一种方式把你的信息发给我，
          我会尽快回复你，并发你对应的案例。
        </p>

        <div className="mt-5 rounded-2xl border border-brand-100 bg-brand-50/60 p-4">
          <p className="text-sm font-semibold text-ink-900">
            方式一（推荐）：截图本页 + 添加微信
          </p>
          <p className="mt-1 text-sm text-ink-700">
            微信号：
            <span className="font-bold text-brand-700">{site.wechatId}</span>
            （备注：个人品牌）
          </p>
        </div>

        <div className="mt-4">
          <p className="mb-2 text-sm font-semibold text-ink-900">
            方式二：复制下面的需求信息，发我微信
          </p>
          <pre className="whitespace-pre-wrap rounded-xl border border-slate-200 bg-slate-50 p-4 text-[13px] leading-6 text-ink-700">
            {summary}
          </pre>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <button onClick={copySummary} className="btn-ghost">
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "已复制" : "复制需求信息"}
            </button>
            <a href={mailtoHref} className="btn-primary">
              <Mail size={16} />
              用邮件发送
            </a>
          </div>
        </div>

        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-ink-500 underline underline-offset-2 hover:text-ink-700"
        >
          ← 返回修改信息
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls}>称呼 *</label>
          <input
            required
            className={inputCls}
            placeholder="怎么称呼你"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </div>
        <div>
          <label className={labelCls}>微信号 *</label>
          <input
            required
            className={inputCls}
            placeholder="方便我联系你"
            value={form.wechat}
            onChange={(e) => update("wechat", e.target.value)}
          />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelCls}>你需要什么？*</label>
        <div className="flex flex-wrap gap-2">
          {needOptions.map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => update("need", opt)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                form.need === opt
                  ? "border-brand-400 bg-brand-50 text-brand-700"
                  : "border-slate-200 bg-white text-ink-700 hover:border-brand-300"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label className={labelCls}>现有链接 / 账号（可选）</label>
        <input
          className={inputCls}
          placeholder="小红书主页、领英、现有网站…"
          value={form.link}
          onChange={(e) => update("link", e.target.value)}
        />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls}>期望交付时间（可选）</label>
          <input
            className={inputCls}
            placeholder="如：两周内 / 越快越好"
            value={form.deadline}
            onChange={(e) => update("deadline", e.target.value)}
          />
        </div>
        <div>
          <label className={labelCls}>预算</label>
          <select
            className={inputCls}
            value={form.budget}
            onChange={(e) => update("budget", e.target.value)}
          >
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className={labelCls}>补充说明（可选）</label>
        <textarea
          rows={4}
          className={inputCls}
          placeholder="你想吸引什么人、目标是什么、有没有参考案例…"
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
        />
      </div>

      <button type="submit" className="btn-primary mt-7 w-full">
        <MessageCircle size={18} />
        生成我的咨询信息
      </button>
      <p className="mt-3 text-center text-xs text-ink-400">
        提交后会生成一段可复制的需求信息，并显示我的微信号。无需注册，不收集到任何服务器。
      </p>
    </form>
  );
}
