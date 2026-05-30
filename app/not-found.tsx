import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="py-24 min-h-[60vh] flex items-center">
      <div className="container-xl max-w-xl text-center">
        <p className="eyebrow mb-3">404</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Page not found
        </h1>
        <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
          That page doesn&apos;t exist — or it moved. Try the homepage, projects, or experience.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={14} /> Home
          </Link>
          <Link href="/projects" className="btn-secondary">
            <ArrowLeft size={14} /> View projects
          </Link>
        </div>
      </div>
    </section>
  );
}
