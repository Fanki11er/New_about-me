import { ReactChild } from "react";

export interface BackgroundImageUrl {
  imageUrl: string;
}

export interface MenuElementProps {
  linkToPage: string;
  label: string;
  children: ReactChild;
  newWindow?: boolean;
  externalLink?: boolean;
}
