import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Fire Alarm Device Manager", description: "Excel-based fire alarm device management for Vercel." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
