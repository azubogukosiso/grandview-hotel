import type { Metadata } from "next";
import { Lora, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

// const lora = Lora({
//   subsets: ["latin"],
//   variable: "--font-lora",
//   display: "swap",
//   adjustFontFallback: false,
// });
// const cinzelDec = Cinzel_Decorative({
//   subsets: ["latin"],
//   variable: "--font-cinzelDec",
//   weight: "400",
//   display: "swap",
//   adjustFontFallback: false,
// });

export const metadata: Metadata = {
  title: "Grand View Hotel and Suites",
  description: "A hotel management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
