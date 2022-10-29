import "../styles/globals.scss";
import { Open_Sans } from "@next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.variable}>
      <head>
        <title>Tom Smith - Senior Full Stack Developer</title>
        <meta
          name="description"
          content="Experienced Senior Full Stack Developer, based in the UK"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
