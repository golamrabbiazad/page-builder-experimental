import localFont from "next/font/local";

export const shurjoFont = localFont({
  src: [
    {
      path: "./ShurjoWeb_400_v2.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./ShurjoWeb_700_v2.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-shurjo",
});

export const kironFont = localFont({
  src: "./Kiron_v2.woff2",
  display: "fallback",
  variable: "--font-kiron",
});
