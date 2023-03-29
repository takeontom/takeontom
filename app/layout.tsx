import "./globals.scss";
import styles from "./layout.module.scss";

import { Open_Sans, Source_Sans_Pro } from "next/font/google";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: "400",
});
const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  variable: "--font-source-sans-pro",
  weight: "400",
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
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
      <body>
        <div className={styles.bg}></div>
        <div className={styles.pageContainer}>
          <div className={styles.container}>
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
