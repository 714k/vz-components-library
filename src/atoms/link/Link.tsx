import React from "react";
import LinkMui from "@mui/material/Link";
import { LinkType } from "../../types";

function Link({
  className,
  component,
  sx,
  href,
  children,
  typographyVariant,
  testId,
  title,
}: LinkType & typeof LinkMui) {
  return (
    <LinkMui
      className={className}
      component={component}
      sx={sx}
      href={href}
      variant={typographyVariant}
      data-testid={testId}
      title={title}
    >
      {children}
    </LinkMui>
  );
}

Link.displayName = "Link";

Link.defaultProps = {
  children: "Text Link",
  className: "vz-atom-link-text",
  component: "a",
  href: "#",
  sx: { color: "#ff3b00" },
  testId: "vz-atom-link",
  title: "Text link",
  typographyVariant: "body1",
};

export default Link;
