import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import atomsTitles from "../index";
import Logo from "./Logo";

export default {
  component: Logo,
  title: `${atomsTitles.logo}`,
  argTypes: {
    className: {
      control: { type: "text" },
    },
    styles: {
      control: { type: "object" },
    },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args: any) => <Logo {...args} />;

export const Small = Template.bind({});
Small.args = Logo.defaultProps;

export const Medium = Template.bind({});
Medium.args = {
  ...Logo.defaultProps,
  className: "vz atom main-logo medium",
  style: {
    width: "80px"
  },
};

export const Large = Template.bind({});

Large.args = {
  ...Logo.defaultProps,
  className: "vz atom main-logo large",
  style: {
    width: "120px"
  },
};
