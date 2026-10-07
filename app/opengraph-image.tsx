import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [archivo, mono] = await Promise.all([
    readFile(join(process.cwd(), "assets/Archivo-ExtraBold.ttf")),
    readFile(join(process.cwd(), "assets/JetBrainsMono-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d0f12",
          color: "#f3f4f6",
          fontFamily: "JetBrains Mono",
          padding: "72px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#9ca3af",
          }}
        >
          <span>{profile.name.toUpperCase()}</span>
          <span>MENDOZA, AR · {profile.availability.toUpperCase()}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Archivo",
              fontSize: 76,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            <span>SOFTWARE DEVELOPER</span>
            <span style={{ color: "#f59e0b" }}>SISTEMAS DE PUNTA A PUNTA</span>
          </div>
          <p
            style={{
              fontSize: 26,
              color: "#9ca3af",
              marginTop: 20,
              fontFamily: "JetBrains Mono",
            }}
          >
            Arquitectura Web · Backend Distribuido · Apps Móviles · IA Aplicada
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            borderTop: "1px solid #222731",
            paddingTop: 24,
          }}
        >
          <span style={{ color: "#9ca3af" }}>eliasjuancruz303@gmail.com</span>
          <span style={{ color: "#f59e0b" }}>.NET · Next.js · KMP · ONNX</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo", data: archivo, style: "normal", weight: 800 },
        { name: "JetBrains Mono", data: mono, style: "normal", weight: 400 },
      ],
    },
  );
}
