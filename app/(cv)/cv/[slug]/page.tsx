import React from "react";
import CV from "@/components/CV";
import { ICV } from "@/types";
import DevCV from "@/data/cv/dev";
import { Metadata } from "next";

interface PageParams {
  params: Promise<{ slug: string }>;
}

function getCV(slug: string): ICV {
  const cv: ICV = { ...DevCV };
  switch (slug) {
    case "dev":
      cv.slug = "dev";
      break;
    case "python":
      cv.slug = "python";
      cv.targetPosition = "Senior Python Developer";
      break;
    case "django":
      cv.slug = "django";
      cv.targetPosition = "Senior Python & Django Developer";
      break;
    case "manager":
      cv.slug = "manager";
      cv.targetPosition = "Technical Leader";
      break;
    case "tech-lead":
      cv.slug = "tech-lead";
      cv.targetPosition = "Technical Leader";
      break;
    case "senior-dev":
      cv.slug = "senior-dev";
      cv.targetPosition = "Senior Developer";
      break;
    default:
      cv.slug = "dev";
  }

  return cv;
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const cv = getCV(slug);
  return {
    metadataBase: new URL("https://takeontom.com"),
    title: `${cv.name} - ${cv.targetPosition}`,
    description: cv.summary,
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
      cv.targetPosition,
    ],
    alternates: {
      canonical: `/cv/${slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: `https://takeontom.com/cv/${slug}`,
      siteName: "Tom Smith",
      title: `${cv.name} - ${cv.targetPosition}`,
      description: cv.summary,
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
      title: `${cv.name} - ${cv.targetPosition}`,
      description: cv.summary,
      images: ["/android-chrome-384x384.png"],
    },
  };
}

export default async function Page({ params }: PageParams) {
  const { slug } = await params;
  const cv = getCV(slug);
  return <CV cv={cv} />;
}
