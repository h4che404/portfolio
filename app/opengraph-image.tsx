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
          background: "#050505",
          color: "#e8e8e3",
          fontFamily: "JetBrains Mono",
          padding: "72px 72px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#6a6a63" }}>
          <span>{profile.name.toUpperCase()}</span>
          <span>AR · {profile.availability.toUpperCase()}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Archivo",
              fontSize: 86,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
            }}
          >
            <span>SISTEMAS COMPLETOS.</span>
            <span style={{ color: "#c9f24e" }}>NO PANTALLAS SUELTAS.</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 24 }}>
          <span style={{ color: "#8e8e86" }}>{profile.role}</span>
          <span style={{ color: "#c9f24e" }}>.NET · Next.js · Kotlin Multiplatform</span>
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
