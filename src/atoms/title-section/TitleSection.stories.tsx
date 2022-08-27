import * as React from "react";
import { ComponentStory, ComponentMeta, Story } from "@storybook/react";
import atomsTitles from "../index";
import TitleSection from "./TitleSection";

export default {
  component: TitleSection,
  title: `${atomsTitles.titleSection}`,
} as ComponentMeta<typeof TitleSection>;

const Template: ComponentStory<typeof TitleSection> = (args: any) => (
  <TitleSection {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  className: "title-section",
  text: "At first...",
};
