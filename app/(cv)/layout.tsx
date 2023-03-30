import "@/app/globals.scss";
import styles from "./CVLayout.module.scss";
import { Open_Sans, Source_Sans_Pro } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "700"],
});

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  variable: "--font-source-sans-pro",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[openSans.variable, sourceSansPro.variable].join(" ")}
    >
      <head></head>
      <body className={styles.Body}>{children}</body>
    </html>
  );
}
