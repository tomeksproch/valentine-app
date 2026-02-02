import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anusiu, mam pytanie... ❤️",
  description: "Specjalna wiadomość dla mojej żony",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#fb7185",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-rose-200 selection:text-rose-900`}
      >
        {children}
      </body>
    </html>
  );
}