import DevCV from "@/data/cv";
import React from "react";
import CV from "@/components/CV";

export async function generateMetadata() {
  return {
    title: `${DevCV.name} - ${DevCV.targetPosition}`,
    description: DevCV.summary,
    manifest: "/site.webmanifest",
  };
}

export default function Page() {
  return <CV cv={DevCV} />;
}
