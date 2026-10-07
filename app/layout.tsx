import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { profile } from "@/content/profile";

const geistSans = localFont({
  src: "../assets/Geist-Variable-Latin.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "100 900",
});

const jetbrainsMono = localFont({
  src: "../assets/JetBrainsMono-Regular.ttf",
  variable: "--font-mono",
  display: "swap",
  weight: "400",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://portfolio-liard-two-ntjfmwxolk.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0f12",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — Software Developer · Full Stack & IA aplicada`,
  description:
    "Construyo software y productos digitales de punta a punta: arquitectura web, backend distribuido, aplicaciones móviles multiplataforma e inteligencia artificial aplicada.",
  keywords: [
    "Juan Cruz Elias Martin",
    "Software Developer",
    "Full Stack Developer",
    "Backend Developer",
    "Arquitectura de Software",
    ".NET 10",
    "Java Spring Boot",
    "Next.js",
    "Kotlin Multiplatform",
    "IA aplicada",
    "Mendoza Argentina",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} — Software Developer · Full Stack & IA aplicada`,
    description:
      "Diseño y construyo sistemas completos de punta a punta: desde el modelado de datos hasta el backend, la interfaz y el despliegue en la nube.",
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Software Developer · Full Stack & IA aplicada`,
    description:
      "Construyo software y productos digitales de punta a punta. Arquitectura limpia, código tipado y soluciones que resuelven problemas reales.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
