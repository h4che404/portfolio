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
  title: `${profile.name} — Desarrollo Web, Sistemas y Apps Móviles`,
  description:
    "Desarrollo productos digitales completos para empresas y negocios: aplicaciones web, sistemas de gestión interna, apps móviles e inteligencia artificial aplicada.",
  keywords: [
    "Juan Cruz Elias Martin",
    "Desarrollador Full Stack",
    "Desarrollo Web Mendoza",
    "Sistemas a Medida",
    "Aplicaciones Móviles",
    "Kotlin Multiplatform",
    ".NET",
    "Next.js",
    "IA aplicada",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} — Desarrollo de Software & Apps`,
    description:
      "Diseño y construyo sistemas completos, no pantallas sueltas. Soluciones a medida para negocios y startups.",
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Desarrollo de Software & Apps`,
    description:
      "Diseño y construyo sistemas completos para tu negocio: webs, paneles a medida y aplicaciones móviles.",
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
