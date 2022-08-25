import * as React from "react";
import { ComponentStory, ComponentMeta, Story } from "@storybook/react";
import atomsTitles from "../../atoms";
import TitleSubsection from "./TitleSubsection";

export default {
  component: TitleSubsection,
  title: `${atomsTitles.titleSubsection}`,
} as ComponentMeta<typeof TitleSubsection>;

const Template: ComponentStory<typeof TitleSubsection> = (args: any) => (
  <TitleSubsection {...args} />
);

export const Primary = Template.bind({});

Primary.args = TitleSubsection.defaultProps;
