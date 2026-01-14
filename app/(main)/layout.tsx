import "app/globals.scss";
import styles from "./layout.module.scss";

import { Open_Sans, Source_Sans_3 } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Metadata } from "next";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "700"],
});

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans-pro",
  weight: ["400", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://takeontom.com'),
    title: {
      default: "Tom Smith - Experienced Developer & Technical Leader",
      template: "%s | Tom Smith - Experienced Developer & Technical Leader",
    },
    description: "Experienced developer and leader based in the UK",
    manifest: "/site.webmanifest",
    keywords: [
      "Technical Leader",
      "Full Stack Developer",
      "Python Developer",
      "Django Developer",
      "Next.js Developer",
      "React Developer",
      "Engineering Manager",
      "Software Architect",
    ],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: "https://takeontom.com",
      siteName: "Tom Smith",
      title: "Tom Smith - Experienced Developer & Technical Leader",
      description: "Experienced developer and leader based in the UK",
      images: [
        {
          url: "/android-chrome-384x384.png",
          width: 384,
          height: 384,
          alt: "Tom Smith",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: "Tom Smith - Experienced Developer & Technical Leader",
      description: "Experienced developer and leader based in the UK",
      images: ["/android-chrome-384x384.png"],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tom Smith",
    url: "https://takeontom.com",
    jobTitle: "Technical Leader & Full Stack Developer",
    image: "https://takeontom.com/android-chrome-384x384.png",
    sameAs: [
      "https://uk.linkedin.com/in/takeontom",
      "https://github.com/takeontom/",
    ],
    description: "Experienced developer and leader based in the UK.",
  };

  return (
    <html
      lang="en"
      className={[openSans.variable, sourceSansPro.variable].join(" ")}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
