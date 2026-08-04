import { ImageResponse } from "next/og";
import { personalInfo } from "@/lib/data";

export const size = { width: 1200, height: 630 };
// Force cache invalidation - updated OG image design
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
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "linear-gradient(rgba(0,180,216,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, transparent, #00b4d8, #cbff6a, #00b4d8, transparent)",
          }}
        />

        {/* Main content card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            padding: "40px 60px",
            background: "rgba(10,10,10,0.7)",
            borderRadius: "16px",
            border: "1px solid rgba(0,180,216,0.2)",
            backdropFilter: "blur(10px)",
            zIndex: 1,
          }}
        >
          {/* Name */}
          <span
            style={{
              color: "#ffffff",
              fontSize: "48px",
              fontWeight: "700",
              letterSpacing: "-0.02em",
              textAlign: "center",
              textShadow: "0 0 30px rgba(0,180,216,0.3)",
            }}
          >
            {personalInfo.name}
          </span>

          {/* Title */}
          <span
            style={{
              color: "#00b4d8",
              fontSize: "20px",
              textAlign: "center",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {personalInfo.title}
          </span>

          {/* Divider */}
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "linear-gradient(90deg, transparent, #cbff6a, transparent)",
              marginTop: "4px",
              marginBottom: "4px",
            }}
          />

          {/* Location */}
          <span
            style={{
              color: "#64748b",
              fontSize: "13px",
              textAlign: "center",
            }}
          >
            {personalInfo.location}
          </span>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, transparent, #cbff6a, #00b4d8, #cbff6a, transparent)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
