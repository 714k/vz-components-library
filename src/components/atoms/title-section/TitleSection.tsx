import React from "react";

function TitleSection({ className, text }) {
  return <h2 className={className}>{text}</h2>;
}

TitleSection.displayName = "TitleSection";

export default TitleSection;
