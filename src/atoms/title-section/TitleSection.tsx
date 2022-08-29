import React from "react";
import { TitleSectionType } from "../../types";

function TitleSection({ className, text }: TitleSectionType) {
  return <h2 className={className}>{text}</h2>;
}

TitleSection.displayName = "TitleSection";

TitleSection.defaultProps = {
  className: "vz-atoms title-section",
  text: "At first...",
};

export default TitleSection;
