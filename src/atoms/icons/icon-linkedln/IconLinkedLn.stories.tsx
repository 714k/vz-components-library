import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import atomsTitles from "../../index";
import IconLinkedLn from "./IconLinkedLn";

export default {
  component: IconLinkedLn,
  title: `${atomsTitles.iconLinkedLn}`,
  argTypes: {
    className: {
      control: { type: "text" },
    },
    styles: {
      control: { type: "object" },
    },
  },
} as ComponentMeta<typeof IconLinkedLn>;

const Template: ComponentStory<typeof IconLinkedLn> = (args: any) => (
  <IconLinkedLn {...args} />
);

export const Small: ComponentStory<typeof IconLinkedLn> = (args) => (
  <IconLinkedLn {...args} />
);

Small.args = IconLinkedLn.defaultProps;

export const Medium: ComponentStory<typeof IconLinkedLn> = (args) => (
  <IconLinkedLn {...args} />
);

Medium.args = {
  className: "medium",
  style: {
    width: "80px",
    height: "auto",
  },
  testId: "main-IconLinkedLn",
};

export const Large: ComponentStory<typeof IconLinkedLn> = (args) => (
  <IconLinkedLn {...args} />
);

Large.args = {
  className: "large",
  style: {
    width: "120px",
    height: "auto",
  },
  testId: "main-IconLinkedLn",
};
