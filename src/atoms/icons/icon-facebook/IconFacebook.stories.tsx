import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import atomsTitles from "../../index";
import IconFacebook from "./IconFacebook";

export default {
  component: IconFacebook,
  title: `${atomsTitles.iconFacebook}`,
  argTypes: {
    className: {
      control: { type: "text" },
    },
    styles: {
      control: { type: "object" },
    },
  },
} as ComponentMeta<typeof IconFacebook>;

const Template: ComponentStory<typeof IconFacebook> = (args: any) => (
  <IconFacebook {...args} />
);

export const Small = Template.bind({});
Small.args = IconFacebook.defaultProps;

export const Medium = Template.bind({});
Medium.args = {
  ...IconFacebook.defaultProps,
  className: "icon facebook medium",
  style: {
    width: "32px",
    height: "auto",
  },
};

export const Large = Template.bind({});
Large.args = {
  ...IconFacebook.defaultProps,
  className: "icon facebook large",
  style: {
    width: "64px",
    height: "auto",
  },
};
