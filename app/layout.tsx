import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Utsarga Baral — AI Trainer & Prompt Engineer",
  description:
    "Portfolio of Utsarga Baral — prompt engineering, document intelligence, generative brand visuals, and full-stack AI applications.",
  openGraph: {
    title: "Utsarga Baral — AI Trainer & Prompt Engineer",
    description:
      "Designing intelligent systems and generative brand worlds from Kathmandu.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden font-body">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
