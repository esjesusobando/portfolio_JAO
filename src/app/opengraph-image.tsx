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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Name */}
        <div style={{ display: "flex", marginBottom: "16px" }}>
          <span
            style={{
              color: "#ffffff",
              fontSize: "64px",
              fontWeight: "700",
              letterSpacing: "-0.02em",
            }}
          >
            {personalInfo.name.split(" ")[0]}
          </span>
          <span
            style={{
              color: "#3b82f6",
              fontSize: "64px",
              fontWeight: "700",
              letterSpacing: "-0.02em",
            }}
          >
            {" "}
            {personalInfo.name.split(" ")[1]}
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            color: "#a1a1a1",
            fontSize: "24px",
            marginBottom: "48px",
            textAlign: "center",
          }}
        >
          {personalInfo.title}
        </div>

        {/* Two versions */}
        <div
          style={{
            display: "flex",
            gap: "24px",
          }}
        >
          {/* FelixStyle */}
          <div
            style={{
              backgroundColor: "#141414",
              borderWidth: "1px",
              borderColor: "rgba(59, 130, 246, 0.3)",
              borderRadius: "16px",
              padding: "24px 32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span
              style={{
                color: "#3b82f6",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              FelixStyle
            </span>
            <span
              style={{
                color: "#737373",
                fontSize: "14px",
              }}
            >
              Premium Creative Portfolio
            </span>
          </div>

          {/* SOTA */}
          <div
            style={{
              backgroundColor: "#141414",
              borderWidth: "1px",
              borderColor: "rgba(156, 163, 175, 0.3)",
              borderRadius: "16px",
              padding: "24px 32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span
              style={{
                color: "#9ca3af",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              SOTA CV
            </span>
            <span
              style={{
                color: "#737373",
                fontSize: "14px",
              }}
            >
              ATS-Optimized Resume
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            color: "#525252",
            fontSize: "14px",
          }}
        >
          jesussobando.dev
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
