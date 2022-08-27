import React from "react";

export type IconType = {
  className?: string;
  style?: object;
  testId: string;
};

export type LinkType = {
  className?: string;
  component?: any;
  href: string;
  sx?: object;
  testId: string;
  children: React.ReactNode;
  typographyVariant?: any;
  title: string;
}

export type TitleSectionType = {
  className?: string;
  text: string;
};

export type TitleSubSectionType = {
  className?: string;
  text: string;
};


