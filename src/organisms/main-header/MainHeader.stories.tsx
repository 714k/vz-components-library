import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import organismTitles from "../../organisms";
import MainHeader from "./MainHeader";

export default {
  component: MainHeader,
  title: `${organismTitles.mainHeader}`,
} as ComponentMeta<typeof MainHeader>;

const Template: ComponentStory<typeof MainHeader> = (args: any) => (
  <MainHeader {...args} />
);
export const Mobile = Template.bind({});
Mobile.args = MainHeader.defaultProps;
