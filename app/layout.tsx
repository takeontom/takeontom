import "../styles/globals.scss";
import styles from "../styles/Layout.module.scss";

import { Open_Sans, Source_Sans_Pro } from "@next/font/google";

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
      </head>
      <body>
        <div className={styles.bg}></div>
        <div className={styles.pageContainer}>
          <div className={styles.container}>{children}</div>
          <footer className={styles.footer}>
            <div className={styles.container}>
              <p>© 2013-2022 Take on Tom Ltd</p>
              <p>
                <a href="/privacy">Privacy policy</a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
