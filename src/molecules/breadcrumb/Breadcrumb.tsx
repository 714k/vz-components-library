import React from "react";
import Breadcrumbs, { BreadcrumbsProps } from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";


function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
type BreadcrumbType = {
  breadcrumbs: any
} & BreadcrumbsProps

function Breadcrumb({ breadcrumbs, maxItems }: BreadcrumbType) {
  return (
    <Breadcrumbs maxItems={maxItems} separator="›" aria-label="breadcrumb">
      {breadcrumbs}
    </Breadcrumbs>
  );
}

Breadcrumb.displayName = "Breadcrumb";

Breadcrumb.defaultProps = {
  breadcrumbs: [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/at-first"
      onClick={handleClick}
    >
      Level 0
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/at-first/nobody-knows-him"
      onClick={handleClick}
    >
      Level 1
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="inherit"
      href="/at-first/nobody-knows-him/the-navigator"
      onClick={handleClick}
    >
      Level 2
    </Link>,
    <Typography key="3" color="text.primary" aria-current="page">
      Current Level
    </Typography>,
  ],
};

export default Breadcrumb;
