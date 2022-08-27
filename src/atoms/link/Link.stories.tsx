import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconLinkedLn } from "../icons";

import atomsTitles from "../index";
import Link from "./Link";

export default {
  component: Link,
  title: `${atomsTitles.link}`,
  argTypes: {
    className: {
      control: { type: "text" },
    },
    styles: {
      control: { type: "object" },
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args: any) => (
  <Link {...args}>Text</Link>
);

export const TextLink: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>Text</Link>
);

TextLink.args = Link.defaultProps;

export const WithIcon: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>
    <IconLinkedLn />
  </Link>
);

WithIcon.args = {
  className: "vz-atom-link-with-icon",
  component: "a",
  href: "#",
  sx: { width: "50px" },
  testId: "vz-atom-link-with-icon",
  title: "Link with icon",
  typographyVariant: "body1",
};
