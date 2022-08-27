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

export const Small: ComponentStory<typeof IconFacebook> = (args) => (
  <IconFacebook {...args} />
);

Small.args = IconFacebook.defaultProps;
