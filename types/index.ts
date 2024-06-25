import React from "react";

export interface ICV {
  slug?: string;
  name: string;
  targetPosition: string;
  summary: string;
  about: React.ReactNode;
  socials: ISocials;
  roles: IRole[];
  skills: ISkills;
}

export type ISkills = string[][];

export interface ISocials {
  tel?: { international: string; human: string };
  email?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface IRole {
  name: string;
  start: string;
  end: string;
  contract?: boolean;
  positions: string[];
  skills?: string[];
  points?: React.ReactNode[];
  highlight?: boolean;
}
