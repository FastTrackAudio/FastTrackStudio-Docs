import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Banner } from "fumadocs-ui/components/banner";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <RootProvider>
          <Banner
            id="beta-thing"
            className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 border-b border-gray-700"
          >
            This website was put together in like 20 minutes. It&apos;s a work
            in progress. Much more information coming soon!
          </Banner>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
