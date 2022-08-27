import React from "react";
import { TitleSectionType } from "../../types";

function TitleSection({ className, text }: TitleSectionType) {
  return <h2 className={className}>{text}</h2>;
}

TitleSection.displayName = "TitleSection";

export default TitleSection;
