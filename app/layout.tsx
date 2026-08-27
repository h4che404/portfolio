import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/content/profile";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Absolute base for the generated Open Graph image, so link previews
// (WhatsApp above all) resolve it. Override per environment if needed.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://portfolio-liard-two-ntjfmwxolk.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — ${profile.role}`,
  description: profile.headline,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.headline,
    type: "website",
    locale: "es_AR",
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.headline,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${jetbrainsMono.variable} h-full antialiased`}
      // Browser extensions (Dark Reader, etc.) inject attributes into <html>
      // before React hydrates. Those mismatches are outside our control.
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
