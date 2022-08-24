import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import atomsTitles from "../../atoms";
import Logo from "./Logo";

export default {
  component: Logo,
  title: `${atomsTitles.logo}`,
  argTypes: {
    className: {
      control: "text",
    },
    styles: {
      width: {
        control: { type: "range", min: 1, max: 30, step: 3 },
      },
      height: {
        control: "text",
      },
    },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args: any) => <Logo {...args} />;

export const Primary = Template.bind({});
