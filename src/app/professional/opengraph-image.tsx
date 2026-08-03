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
          backgroundColor: "#F7F6F3",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <span
          style={{
            color: "#6b6b6b",
            fontSize: "16px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "32px",
          }}
        >
          CV Profesional
        </span>
        
        <span
          style={{
            color: "#111111",
            fontSize: "72px",
            fontWeight: "600",
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            marginBottom: "16px",
          }}
        >
          {personalInfo.name}
        </span>
        
        <span
          style={{
            color: "#6b6b6b",
            fontSize: "28px",
            marginBottom: "48px",
          }}
        >
          {personalInfo.title}
        </span>
        
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginBottom: "40px",
          }}
        >
          <span style={{ color: "#111111", fontSize: "18px" }}>
            {personalInfo.email}
          </span>
          <span style={{ color: "#6b6b6b", fontSize: "18px" }}>
            {personalInfo.phone}
          </span>
        </div>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {["LLM Integration", "Prompt Engineering", "MVP Creation", "Oil & Gas"].map(
            (skill) => (
              <div
                key={skill}
                style={{
                  backgroundColor: "#ffffff",
                  borderWidth: "1px",
                  borderColor: "#e2e8f0",
                  borderRadius: "8px",
                  padding: "8px 20px",
                  color: "#00b4d8",
                  fontSize: "16px",
                }}
              >
                {skill}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
