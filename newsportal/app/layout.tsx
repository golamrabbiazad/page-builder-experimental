import type { Metadata } from "next";
import "./../styles/main.scss";
import { Providers } from "./providers";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { AntDProvider } from "@/styles/antd-config/antd-config-provider";

export const metadata: Metadata = {
  title: "News Portal",
  description: "Todays Latest News",
  robots: "noindex,nofollow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <AntDProvider>
            <AntdRegistry>{children}</AntdRegistry>
          </AntDProvider>
        </Providers>
      </body>
    </html>
  );
}
