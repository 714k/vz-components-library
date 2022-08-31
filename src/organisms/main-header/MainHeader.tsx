import React from "react";
import Box from "@mui/material/Box";
import { Logo } from "../../atoms";

type MainHeaderProps = {
  className?: string;
  sx?: object;
  testId: string;
};

function MainHeader({ className, sx, testId }: MainHeaderProps) {
  return (
    <Box
      className={`branding ${className}`}
      sx={sx}
      role="banner"
      id="header"
      data-testid={testId}
    >
      <Logo />
      <p>Site Tools Component[Future consideration]</p>
      <p className="vz jump">
        Jump to{" "}
        <a
          href="src/organisms/main-header/MainHeader.tsx"
          id="mainContentLink"
          title="Main Content"
          target="self"
        >
          Content
        </a>
      </p>
    </Box>
  );
}

MainHeader.defaultProps = {
  className: "vz molecule mainHeader",
  testId: "mainHeader",
};

MainHeader.displayName = "MainHeader";

export default MainHeader;
