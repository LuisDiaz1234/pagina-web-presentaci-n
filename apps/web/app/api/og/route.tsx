import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          background: "linear-gradient(135deg,#0E76FF, #10B981)"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 64,
            width: "100%",
            color: "white",
            fontSize: 64,
            fontWeight: 800
          }}
        >
          <div style={{ fontSize: 28, opacity: 0.95 }}>LuLab Technology</div>
          <div>Software bello y poderoso</div>
          <div style={{ fontSize: 28, marginTop: 8, opacity: 0.8 }}>
            Plataformas · Integraciones · Data + IA
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
