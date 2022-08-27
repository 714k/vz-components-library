import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import atomsTitles from "../../index";
import IconPinterest from "./IconPinterest";

export default {
  component: IconPinterest,
  title: `${atomsTitles.iconLinkedLn}`,
  argTypes: {
    className: {
      control: { type: "text" },
    },
    styles: {
      control: { type: "object" },
    },
  },
} as ComponentMeta<typeof IconPinterest>;

const Template: ComponentStory<typeof IconPinterest> = (args: any) => (
  <IconPinterest {...args} />
);

export const Small: ComponentStory<typeof IconPinterest> = (args) => (
  <IconPinterest {...args} />
);

Small.args = IconPinterest.defaultProps;

export const Medium: ComponentStory<typeof IconPinterest> = (args) => (
  <IconPinterest {...args} />
);

Medium.args = {
  className: "medium",
  style: {
    width: "80px",
    height: "auto",
  },
  testId: "main-IconPinterest",
};

export const Large: ComponentStory<typeof IconPinterest> = (args) => (
  <IconPinterest {...args} />
);

Large.args = {
  className: "large",
  style: {
    width: "120px",
    height: "auto",
  },
  testId: "main-IconPinterest",
};
