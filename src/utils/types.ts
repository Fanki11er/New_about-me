import { RefObject } from "react";
import { Clickable, Hidable } from "./interfaces";

export type AssetUrl = {
  publicURL: string;
};

export type MainPageImages = {
  background: string;
  hero: string;
  logo: string;
  projects_background: string;
  contact_background: string;
  about_background: string;
  person: string;
  bulb: string;
  not_found: string;
  o4o_image: string;
};

export type SkillType = {
  id: string;
  technologyName: string;
  level: string;
  skills: { skillDescription: string; id: string }[];
  logo: {
    alt: string;
    url: string;
  };
};

export type ProjectType = {
  position: string;
  projectName: string;
  projectDescription: string;
  appLink: string;
  githubLink: string;
  credentials: [
    {
      password: string;
      username: string;
    }
  ];
  projectPreview: PictureWithAlt;
};

export type PictureWithAlt = {
  alt: string;
  url: string;
};

export type AboutContentParagraph = {
  paragraph: string;
  id: string;
};

export type singleAdditionalSkill = {
  additionalSkill: string;
  id: string;
};

export type Status = "Ok" | "Err" | "Submitting" | "Wait";

export type RefToButton = RefObject<any & Clickable> | null;
export type RefToMobileNav = RefObject<any & Hidable> | null;
