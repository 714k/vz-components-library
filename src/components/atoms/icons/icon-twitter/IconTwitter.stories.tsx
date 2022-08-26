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

export const Small: ComponentStory<typeof IconTwitter> = (args) => (
  <IconTwitter {...args} />
);

Small.args = IconTwitter.defaultProps;
