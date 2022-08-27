import React from "react";
import { TitleSubSectionType } from "../../types";

function TitleSubsection({ className, text }: TitleSubSectionType) {
  return <h3 className={className}>{text}</h3>;
}

TitleSubsection.displayName = "TitleSubsection";

TitleSubsection.defaultProps = {
  className: "title-subsection",
  text: "September 2013 -",
};

export default TitleSubsection;
