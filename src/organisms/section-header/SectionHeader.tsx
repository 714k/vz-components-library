import React from "react";
import {
  Breadcrumb,
  IconFacebook,
  SectionLinks,
  ShareContent,
  TitleSection,
} from "../../main";

type SectionHeaderType = {
  maxItemsBreadcrumb?: number;
  shareContent: object;
  testId: string;
  titleSection: object;
};

function SectionHeader({
  maxItemsBreadcrumb,
  shareContent,
  testId,
  titleSection,
}: SectionHeaderType) {
  return (
    <article role="main" id={testId} data-testid={testId}>
      <header className="header"></header>
      <hr />
      <Breadcrumb maxItems={maxItemsBreadcrumb} />
      <TitleSection text={titleSection?.text} />
      <ShareContent>
        <IconFacebook style={shareContent?.icons?.style} />
      </ShareContent>
      <SectionLinks />
    </article>
  );
}

SectionHeader.defaultProps = {
  maxItemsBreadcrumb: 2,
  shareContent: {
    icons: {
      style: {
        fill: "white",
        zIndex: 3,
        position: "absolute",
        height: "20px",
        transform: "translate(8px, 4px)",
      },
    },
  },
  testId: "sectionHeader",
  titleSection: {
    className: "sectionTitle",
    text: "At first...",
  },
};

SectionHeader.displayName = "SectionHeader";

export default SectionHeader;
