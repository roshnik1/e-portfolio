import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://e-portfolio-blond.vercel.app/"),
  alternates: {
    canonical: "https://e-portfolio-blond.vercel.app/",
  },
  title: "Roshni Khatri",
  description:
    "",
  keywords:
    "Roshni Khatri",
  openGraph: {
    locale: "en_US",
    siteName: "Roshni Khatri",
    type: "website",
    title: "Roshni Khatri",
    description:
      "",
    url: "",
    images: [
      {
        url: "",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
