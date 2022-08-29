import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import atomsTitles from "../../index";
import IconTwitter from "./IconTwitter";

export default {
  component: IconTwitter,
  title: `${atomsTitles.iconTwitter}`,
  argTypes: {
    className: {
      control: { type: "text" },
    },
    styles: {
      control: { type: "object" },
    },
  },
} as ComponentMeta<typeof IconTwitter>;

const Template: ComponentStory<typeof IconTwitter> = (args: any) => (
  <IconTwitter {...args} />
);

export const Small = Template.bind({});
Small.args = IconTwitter.defaultProps;

export const Medium = Template.bind({});
Medium.args = {
  ...IconTwitter.defaultProps,
  className: "icon twitter medium",
  style: {
    width: "32px",
    height: "auto",
  },
};

export const Large = Template.bind({});
Large.args = {
  ...IconTwitter.defaultProps,
  className: "icon twitter large",
  style: {
    width: "64px",
    height: "auto",
  },
};

