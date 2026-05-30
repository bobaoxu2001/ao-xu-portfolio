import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ao (Allen) Xu — AI + Data Analyst";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0b1220 0%, #0f172a 45%, #111827 100%)",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 9999,
              background: "#22c55e",
              boxShadow: "0 0 16px rgba(34,197,94,0.7)",
            }}
          />
          <div
            style={{
              fontSize: 22,
              color: "#94a3b8",
              fontWeight: 500,
              letterSpacing: 0.2,
            }}
          >
            Available for full-time roles
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              color: "#60a5fa",
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            AI + Data Analyst
          </div>
          <div
            style={{
              fontSize: 100,
              color: "#ffffff",
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -2,
              marginBottom: 22,
              display: "flex",
            }}
          >
            Ao (Allen) Xu
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#cbd5e1",
              lineHeight: 1.4,
              maxWidth: 980,
              display: "flex",
            }}
          >
            Applied AI builder · LLM workflow evaluation · Product &amp; ops analytics
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 40,
            fontSize: 22,
            color: "#94a3b8",
            paddingTop: 32,
            borderTop: "1px solid rgba(148,163,184,0.2)",
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            <span style={{ color: "#ffffff", fontWeight: 700 }}>20K+</span>
            <span>dialog logs</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <span style={{ color: "#ffffff", fontWeight: 700 }}>170+</span>
            <span>intent labels</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <span style={{ color: "#ffffff", fontWeight: 700 }}>+21.1 pts</span>
            <span>Macro-F1</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <span style={{ color: "#ffffff", fontWeight: 700 }}>71%</span>
            <span>MAE reduction</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
