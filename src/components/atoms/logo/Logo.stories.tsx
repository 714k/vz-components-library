import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Meta } from "@storybook/addon-docs";

import atomsTitles from "../../atoms";
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

export const Small: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

Small.args = {
  className: "small",
  styles: {
    width: "40px",
    height: "auto",
  },
  testId: "main-logo",
};

export const Medium: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

Medium.args = {
  className: "medium",
  styles: {
    width: "80px",
    height: "auto",
  },
  testId: "main-logo",
};

export const Large: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

Large.args = {
  className: "large",
  styles: {
    width: "120px",
    height: "auto",
  },
  testId: "main-logo",
};
