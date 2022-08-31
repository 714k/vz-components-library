import React from "react";
import Box from "@mui/material/Box";
import { Logo } from "../../atoms";

type HeaderProps = {
  className?: string;
  style?: object;
  testId: string;
};

function Header({ className, style, testId }) {
  return (
    <Box
      className={className}
      style={style}
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

Header.displayName = "Header";

export default Header;
