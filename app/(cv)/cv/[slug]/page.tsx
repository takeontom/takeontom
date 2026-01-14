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
    metadataBase: new URL('https://takeontom.com'),
    title: `${cv.name} - ${cv.targetPosition}`,
    description: cv.summary,
    manifest: "/site.webmanifest",
  };
}

export default async function Page({ params }: PageParams) {
  const { slug } = await params;
  const cv = getCV(slug);
  return <CV cv={cv} />;
}
