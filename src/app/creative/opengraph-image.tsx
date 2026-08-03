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
          position: "relative",
        }}
      >
        {/* Background gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(0,180,216,0.15) 0%, rgba(10,10,10,0.9) 100%)",
          }}
        />

        {/* Accent line top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            backgroundColor: "#00b4d8",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            zIndex: 1,
          }}
        >
          {/* Name */}
          <span
            style={{
              color: "#ffffff",
              fontSize: "56px",
              fontWeight: "700",
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            {personalInfo.name}
          </span>

          {/* Title */}
          <span
            style={{
              color: "#00b4d8",
              fontSize: "22px",
              textAlign: "center",
              letterSpacing: "0.05em",
            }}
          >
            {personalInfo.title}
          </span>

          {/* Divider */}
          <div
            style={{
              width: "80px",
              height: "2px",
              backgroundColor: "#cbff6a",
              marginTop: "8px",
              marginBottom: "8px",
            }}
          />

          {/* Location */}
          <span
            style={{
              color: "#64748b",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            {personalInfo.location}
          </span>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            backgroundColor: "#cbff6a",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
