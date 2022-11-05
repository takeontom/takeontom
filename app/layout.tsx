import "../styles/globals.scss";
import styles from "../styles/Layout.module.scss";

import { Open_Sans, Source_Sans_Pro } from "@next/font/google";
import Link from "next/link";
import SiteHeader from "../components/site-header";

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
      {/* <html lang="en"> */}
      <head>
        <title>Tom Smith - Senior Full Stack Developer</title>
        <meta
          name="description"
          content="Experienced Senior Full Stack Developer, based in the UK"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/manifest.json" />
        <link
          rel="mask-icon"
          href="/images/favicon/safari-pinned-tab.svg"
          color="#ee0979"
        />
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Take on Tom" />
        <meta name="application-name" content="Take on Tom" />
        <meta
          name="msapplication-config"
          content="/images/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ee0979" />
      </head>
      <body>
        <div className={styles.bg}></div>
        <div className={styles.pageContainer}>
          <div className={styles.container}>
            <SiteHeader />
            {children}
            <footer className={styles.footer}>
              <p>© 2013-2022 Take on Tom Ltd</p>
              <p>
                <Link href="/privacy">Privacy policy</Link>
              </p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
