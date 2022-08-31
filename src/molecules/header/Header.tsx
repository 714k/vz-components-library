import React from "react";
import Box from "@mui/material/Box";
import { Logo } from "../../atoms";

type HeaderProps = {
  className?: string;
  sx?: object;
  testId: string;
};

function Header({ className, sx, testId }: HeaderProps) {
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
          href="#mainContent"
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

Header.defaultProps = {
  className: "vz molecule mainHeader",
  testId: "mainHeader",
};

Header.displayName = "MainHeader";

export default Header;
