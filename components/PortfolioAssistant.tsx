"use client";

import { useState, useRef, KeyboardEvent } from "react";
import { Send, Bot } from "lucide-react";

// ── Q&A data ────────────────────────────────────────────────────────────────

const QA: { id: string; q: string; a: string }[] = [
  {
    id: "strongest-ai",
    q: "What is Ao's strongest AI experience?",
    a: "My strongest AI experience is probably the China Telecom AI Center work, because it pushed me beyond just analyzing data. I had to turn messy dialogue logs and product requirements into LLM workflows that could actually be tested and improved. I worked on intent labeling, prompt evaluation, and QA loops for 20,000+ dialogue records — which helped me understand how AI products move from \"demo\" to something closer to a reliable workflow.",
  },
  {
    id: "llm-workflow",
    q: "Tell me about Ao's LLM workflow projects.",
    a: "A lot of my LLM work sits between product thinking and data science. At China Telecom, I worked on workflows for intent classification, briefing generation, narration, and structured output review. For my support-ticket routing project, I took a more analytical angle: when should a ticket be handled by rules, ML, an LLM fallback, or a human reviewer? That project helped me think about LLM systems not just as generation tools, but as decision workflows with confidence, cost, and review tradeoffs.",
  },
  {
    id: "data-analytics",
    q: "What data analytics experience does Ao have?",
    a: "My strongest analytics experience is from TikTok's Global Seller Operations team. I analyzed seller onboarding and support data using SQL, Python, and Tableau. One project traced a 10% month-over-month drop in onboarding satisfaction and uncovered KPI distortion from duplicate-ticket logic. I also mapped onboarding bottlenecks and quantified a 48% potential conversion lift from funnel improvements.",
  },
  {
    id: "skills",
    q: "What technical skills does Ao use most?",
    a: "The tools I use most are Python, SQL, and dashboarding tools like Tableau, Power BI, Streamlit, and Retool. On the modeling side, I've worked with NLP pipelines, logistic regression, LightGBM, XGBoost, time-series forecasting models, and LLM evaluation workflows. I'm strongest when the work combines technical analysis with a real business decision.",
  },
  {
    id: "roles",
    q: "What roles is Ao a strong fit for?",
    a: "I'm a strong fit for roles that combine data science, AI workflows, and business operations. That includes Business Data Scientist, Product Analyst, Applied AI Analyst, AI Strategy Analyst, and support or operations analytics roles. I'm especially interested in teams where the work isn't just building models — but using models and analysis to improve workflows, customer experience, and decision-making.",
  },
  {
    id: "china-telecom",
    q: "Summarize Ao's China Telecom experience.",
    a: "At China Telecom's AI Center, the core of the work was taking unstructured dialogue data, product requirements, and AI workflow ideas, then turning them into structured prompts, labeling frameworks, QA loops, and evaluation criteria. I classified dialogue logs into intent labels, designed prompt A/B tests to compare output quality, and prepared materials for international AI platform stakeholders.",
  },
  {
    id: "tiktok",
    q: "Summarize Ao's TikTok experience.",
    a: "At TikTok, I worked on seller support and onboarding analytics. The work was very operations-focused: define the right KPIs, understand why satisfaction or conversion was changing, and explain the issue clearly enough for PM and ops teams to act on it. I used SQL, Python, and Tableau to analyze support workflows, duplicate-ticket logic, onboarding bottlenecks, and seller satisfaction trends.",
  },
  {
    id: "different",
    q: "What makes Ao different from a typical data analyst?",
    a: "I'm not only interested in reporting what happened. I like taking an ambiguous workflow problem, structuring it into data questions, testing what's actually driving the issue, and then turning the result into a decision or prototype. That's why my work often connects analytics, AI systems, dashboards, and stakeholder communication — rather than staying in one narrow lane.",
  },
];

const FALLBACK =
  "I can answer questions about my AI projects, data analytics experience, technical skills, and career background. Try asking about the LLM workflow work, TikTok analytics, or the support ticket routing project.";

// ── Keyword matcher ──────────────────────────────────────────────────────────

function matchAnswer(input: string): string {
  const s = input.toLowerCase();
  if (!s.trim()) return "";
  if (s.includes("strongest") || (s.includes("best") && s.includes("ai"))) return QA[0].a;
  if (s.includes("llm") || s.includes("workflow") || s.includes("platform")) return QA[1].a;
  if (s.includes("data") && (s.includes("analytic") || s.includes("analyst"))) return QA[2].a;
  if (s.includes("skill") || s.includes("technical") || s.includes("stack") || s.includes("tool")) return QA[3].a;
  if (s.includes("role") || s.includes("fit") || s.includes("position") || s.includes("job") || s.includes("hiring")) return QA[4].a;
  if (s.includes("china telecom") || s.includes("telecom") || (s.includes("china") && !s.includes("tiktok"))) return QA[5].a;
  if (s.includes("tiktok") || s.includes("bytedance") || s.includes("seller")) return QA[6].a;
  if (s.includes("different") || s.includes("unique") || s.includes("stand out")) return QA[7].a;
  if (s.includes("ai") || s.includes("experience")) return QA[0].a;
  if (s.includes("analytic") || s.includes("data")) return QA[2].a;
  return FALLBACK;
}

// ── Component ────────────────────────────────────────────────────────────────

export function PortfolioAssistant() {
  const [activeId, setActiveId] = useState<string>(QA[0].id);
  const [answer, setAnswer] = useState<string>(QA[0].a);
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function selectQuestion(item: (typeof QA)[number]) {
    setActiveId(item.id);
    setAnswer(item.a);
    setInputVal("");
  }

  function handleSend() {
    const result = matchAnswer(inputVal);
    if (!result) return;
    setActiveId("");
    setAnswer(result);
  }

  function handleKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSend();
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-xl">
        {/* Section header */}
        <div className="mb-8">
          <span className="eyebrow mb-2 block">Guided Exploration</span>
          <h2 className="section-heading">Portfolio Q&amp;A</h2>
          <p className="section-subheading max-w-xl">
            A guided, static Q&amp;A for common recruiter questions about my projects, skills, and background.
          </p>
        </div>

        {/* Main card */}
        <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.07)] bg-white">
          <div className="grid lg:grid-cols-5">

            {/* ── Left: suggested questions ── */}
            <div className="lg:col-span-2 bg-slate-50/80 border-b lg:border-b-0 lg:border-r border-slate-200 p-6">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                Suggested Questions
              </p>
              <div className="flex flex-col gap-1.5">
                {QA.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => selectQuestion(item)}
                    className={`text-left text-[13px] font-medium px-3.5 py-2.5 rounded-xl transition-all duration-150 leading-snug ${
                      activeId === item.id
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm"
                    }`}
                  >
                    {item.q}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Right: answer panel ── */}
            <div className="lg:col-span-3 flex flex-col">
              {/* Answer header */}
              <div className="flex items-center gap-2.5 px-6 pt-5 pb-4 border-b border-slate-100">
                <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <Bot size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-slate-800 leading-none">
                    Portfolio Guide
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Static demo · Based on Ao Xu&apos;s portfolio content
                  </p>
                </div>
              </div>

              {/* Answer text */}
              <div className="flex-1 px-6 py-5 bg-gradient-to-b from-blue-50/40 to-white min-h-[160px]">
                <p className="text-[14px] text-slate-700 leading-relaxed">
                  {answer}
                </p>
              </div>

              {/* Input row */}
              <div className="px-6 pb-5 pt-3 border-t border-slate-100">
                <div className="flex gap-2.5">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="Ask anything about Ao..."
                    className="flex-1 text-sm px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400
                               focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!inputVal.trim()}
                    aria-label="Send"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm"
                  >
                    <Send size={15} className="text-white" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
