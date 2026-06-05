import type { Metadata, Viewport } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Portafolio",
  description: "Software Portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-screen bg-[#030712] text-white antialiased">{children}</body>
    </html>
  );
}
