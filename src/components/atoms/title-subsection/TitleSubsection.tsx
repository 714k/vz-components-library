import React from "react";

function TitleSubsection({ className, text }) {
  return <h3 className={className}>{text}</h3>;
}

TitleSubsection.displayName = "TitleSubsection";

TitleSubsection.defaultProps = {
  className: 'title-subsection',
  text: 'September 2013 -'
};

export default TitleSubsection;
