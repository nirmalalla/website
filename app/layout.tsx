import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Nirmal Alla",
  description:
    "Software engineer, CS & Math student at Vanderbilt University. Building full-stack applications and cloud infrastructure.",
  openGraph: {
    title: "Nirmal Alla",
    description:
      "Software engineer, CS & Math student at Vanderbilt University.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
