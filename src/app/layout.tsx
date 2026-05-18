import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALLÔ SHISHA Suite",
  description: "CRM, POS, QR ordering, stock, finance and HR suite for ALLÔ SHISHA.",
  manifest: "/manifest.json"
};

export const viewport: Viewport = {
  themeColor: "#08070A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
