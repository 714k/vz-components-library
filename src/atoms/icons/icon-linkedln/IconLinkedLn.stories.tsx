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

export const Small = Template.bind({});
Small.args = IconLinkedLn.defaultProps;

export const Medium = Template.bind({});
Medium.args = {
  ...IconLinkedLn.defaultProps,
  className: "icon linkedln medium",
  style: {
    width: "32px",
    height: "auto",
  },
};

export const Large = Template.bind({});
Large.args = {
  ...IconLinkedLn.defaultProps,
  className: "icon linkedln large",
  style: {
    width: "64px",
    height: "auto",
  },
};
