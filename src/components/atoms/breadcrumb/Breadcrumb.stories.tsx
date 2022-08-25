import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import atomsTitles from "../../atoms";
import Breadcrumb from "./Breadcrumb";

export default {
  component: Breadcrumb,
  title: `${atomsTitles.breadcrumb}`,
  argTypes: {
    links: [
      {
        current: {
          control: "text",
        },
        href: {
          control: "text",
        },
        text: {
          control: "text",
        },
        title: {
          control: "text",
        },
      },
    ],
  },
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args: any) => (
  <Breadcrumb {...args} />
);

export const Root: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
);

Root.storyName = 'Level 0'

Root.args = {
  links: [
    {
      current: "/",
      href: "#",
      text: "Level 0",
      title: "The first level of the site",
    },
  ],
};
