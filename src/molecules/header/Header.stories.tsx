import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import moleculesTitles from "../index";
import Header from "./Header";

export default {
  component: Header,
  title: `${moleculesTitles.header}`,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: any) => (
  <Header {...args} />
);
export const Mobile = Template.bind({});
Mobile.args = Header.defaultProps;
