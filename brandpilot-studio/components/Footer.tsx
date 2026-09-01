import Link from "next/link";
import { site, nav } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50/60">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-grad-brand text-sm font-bold text-white">
                B
              </span>
              <span className="text-base font-bold text-ink-900">{site.brand}</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-ink-500">
              {site.brandCn}：为留学生、求职者、自由职业者、小商家和创作者，
              快速搭建专业的线上名片与小红书定位。
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                导航
              </p>
              <ul className="mt-3 space-y-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-ink-700 transition hover:text-brand-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                联系
              </p>
              <ul className="mt-3 space-y-2 text-sm text-ink-700">
                <li>微信：{site.wechatId}</li>
                <li>小红书：{site.xiaohongshu}</li>
                <li>
                  <Link href="/inquiry" className="text-brand-600 hover:underline">
                    提交咨询 →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-ink-400">
          <p>
            © {new Date().getFullYear()} {site.brand}. 我们只做诚实的承诺：
            把你的线上形象做得更专业、更可信。不承诺涨粉、不承诺成交、不刷数据。
          </p>
        </div>
      </div>
    </footer>
  );
}
