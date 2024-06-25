import React from "react";
import CV from "@/components/CV";
import { ICV } from "@/types";
import DevCV from "@/data/cv/dev";

type flavour = "dev" | "manager" | "tech-lead" | "python" | "frontend";

interface PageParams {
  params: { slug: flavour };
}

function getCV(slug: flavour): ICV {
  const cv: ICV = { ...DevCV };
  switch (slug) {
    case "dev":
      cv.slug = "dev";
      break;
    case "python":
      cv.slug = "python";
      cv.targetPosition = "Senior Python Developer";
      break;
    case "manager":
      cv.slug = "manager";
      cv.targetPosition = "Technical Leader";
      break;
    case "tech-lead":
      cv.slug = "tech-lead";
      cv.targetPosition = "Technical Leader";
      break;
    default:
      cv.slug = "dev";
  }

  return cv;
}

export async function generateMetadata({ params }: PageParams) {
  const cv = getCV(params.slug);
  return {
    title: `${cv.name} - ${cv.targetPosition}`,
    description: cv.summary,
    manifest: "/site.webmanifest",
  };
}

export default function Page({ params }: PageParams) {
  const cv = getCV(params.slug);
  return <CV cv={cv} />;
}
