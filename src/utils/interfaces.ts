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

export interface Color {
  color: string;
}

export interface Clickable {
  onClick: Function;
}

export interface ModalProps {
  isVisible: boolean;
}
