import { Sparkles } from "lucide-react";
import { site } from "@/lib/config";

// 案例价剩余名额徽章 —— 制造合理稀缺。slotsLeft 为 0 时不显示，
// 避免「名额已满」反而劝退（满了就把 config.slotsLeft 调回新一批的数量）。
export default function SlotsBadge({
  className = "",
}: {
  className?: string;
}) {
  if (!site.slotsLeft || site.slotsLeft <= 0) return null;
  return (
    <span className={`chip ${className}`}>
      <Sparkles size={14} />
      前 {site.slotsTotal} 位案例客户 ¥399 · 仅剩 {site.slotsLeft} 席
    </span>
  );
}
