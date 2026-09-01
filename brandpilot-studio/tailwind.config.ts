import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // 案例渐变色在 lib/cases.ts 中以字符串拼接（bg-gradient-to-br + from/via/to），
  // safelist 确保这些动态类一定被生成。
  safelist: [
    "from-indigo-500", "via-violet-500", "to-blue-500",
    "from-rose-500", "via-orange-400", "to-amber-400",
    "from-amber-500", "via-yellow-500", "to-lime-500",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        accent: {
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
        },
        ink: {
          900: "#0f172a",
          700: "#334155",
          500: "#64748b",
          400: "#94a3b8",
        },
      },
      boxShadow: {
        soft: "0 8px 30px rgba(15, 23, 42, 0.06)",
        card: "0 12px 40px rgba(79, 70, 229, 0.08)",
        glow: "0 20px 60px rgba(99, 102, 241, 0.18)",
      },
      backgroundImage: {
        "grad-hero":
          "radial-gradient(60% 50% at 50% 0%, rgba(99,102,241,0.14), transparent 70%), radial-gradient(40% 35% at 100% 0%, rgba(244,63,94,0.10), transparent 70%)",
        "grad-brand": "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #f43f5e 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
