import React from "react";
import CV from "@/components/CV";
import { ICV } from "@/types";
import DevCV from "@/data/cv/dev";
import ManagerCV from "@/data/cv/manager";

type flavour = "dev" | "manager";

interface PageParams {
  params: { slug: flavour };
}

function getCV(slug: flavour): ICV {
  switch (slug) {
    case "dev":
      return DevCV;
    case "manager":
      return ManagerCV;
    default:
      return ManagerCV;
  }
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
