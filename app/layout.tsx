import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "猪没什么想不通的｜视觉设计作品集",
    description: "一个收集街头标识、日常物件、海报、表情和文字实验的个人设计作品集。",
    icons: {
      icon: "/favicon.svg",
    },
    openGraph: {
      title: "猪没什么想不通的",
      description: "日常物件、街头标识与视觉实验。",
      images: [{ url: `${origin}/og.png`, width: 1672, height: 941 }],
      locale: "zh_CN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "猪没什么想不通的",
      description: "日常物件、街头标识与视觉实验。",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
