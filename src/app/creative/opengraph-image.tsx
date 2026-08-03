import { ImageResponse } from "next/og";
import { personalInfo } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#cbff6a",
              boxShadow: "0 0 20px #cbff6a",
            }}
          />
          <span
            style={{
              color: "#64748b",
              fontSize: "16px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Portfolio Creativo
          </span>
        </div>

        <span
          style={{
            color: "#ffffff",
            fontSize: "72px",
            fontWeight: "700",
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            marginBottom: "16px",
          }}
        >
          {personalInfo.name}
        </span>

        <span
          style={{
            color: "#a1a1a1",
            fontSize: "28px",
            marginBottom: "40px",
          }}
        >
          {personalInfo.title}
        </span>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {["LLM Integration", "Prompt Engineering", "MVP Prototyping", "Oil & Gas"].map((skill) => (
            <div
              key={skill}
              style={{
                backgroundColor: "rgba(203, 255, 106, 0.1)",
                borderColor: "rgba(203, 255, 106, 0.3)",
                borderWidth: "1px",
                borderRadius: "999px",
                padding: "8px 20px",
                color: "#cbff6a",
                fontSize: "16px",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
