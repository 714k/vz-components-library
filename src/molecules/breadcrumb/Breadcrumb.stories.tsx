import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";

import moleculesTitles from "../index";
import Breadcrumb from "./Breadcrumb";

export default {
  component: Breadcrumb,
  title: `${moleculesTitles.breadcrumb}`,
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args: any) => (
  <Breadcrumb {...args} />
);

export const Basic: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
);

Basic.args = Breadcrumb.defaultProps;

export const Expandable: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} maxItems={2} />
);

Expandable.args = Breadcrumb.defaultProps;

export const WithIcons: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
);

WithIcons.args = {
  breadcrumbs: [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/at-first"
      onClick={() => console.info("level 0")}
      sx={{ display: "flex", alignItems: "center" }}
    >
      <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Level 0
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/at-first/nobody-knows-him"
      onClick={() => console.info("level 1")}
      sx={{ display: "flex", alignItems: "center" }}
    >
      <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Level 1
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="inherit"
      href="/at-first/nobody-knows-him/the-navigator"
      onClick={() => console.info("level 2")}
      sx={{ display: "flex", alignItems: "center" }}
    >
      <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Level 2
    </Link>,
    <Typography
      sx={{ display: "flex", alignItems: "center" }}
      color="text.primary"
    >
      Current Level
    </Typography>,
  ],
};
