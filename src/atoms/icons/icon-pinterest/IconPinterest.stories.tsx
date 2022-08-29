import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import atomsTitles from "../../index";
import IconPinterest from "./IconPinterest";

export default {
  component: IconPinterest,
  title: `${atomsTitles.iconPinterest}`,
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

export const Small = Template.bind({});
Small.args = IconPinterest.defaultProps;

export const Medium = Template.bind({});
Medium.args = {
  ...IconPinterest.defaultProps,
  className: "icon pinterest medium",
  style: {
    width: "32px",
    height: "auto",
  },
};

export const Large = Template.bind({});
Large.args = {
  ...IconPinterest.defaultProps,
  className: "icon pinterest large",
  style: {
    width: "64px",
    height: "auto",
  },
};
