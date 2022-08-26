import React from "react";
import LinkMui from "@mui/material/Link";

interface LinkProps extends LinkMui {
  className?: string;
  component?: any;
  href: string;
  sx?: object;
  testId: string;
  children: React.ReactNode;
  typographyVariant?: any;
  title: string;
}

function Link({
  className,
  component,
  sx,
  href,
  children,
  typographyVariant,
  testId,
  title,
}: LinkProps) {
  return (
    <LinkMui
      className={className}
      component={component}
      sx={sx}
      href={href}
      variant={typographyVariant}
      data-testId={testId}
      title={title}
    >
      {children}
    </LinkMui>
  );
}

Link.displayName = "Link";

Link.defaultProps = {
  className: "vz-atom-link",
  component: "a",
  href: "#",
  sx: { width: "50px" },
  testId: "vz-atom-link",
  title: "Text link",
  typographyVariant: "body1",
};

export default Link;
