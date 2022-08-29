import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import atomsTitles from "../index";
import TitleSubsection from "./TitleSubsection";

export default {
  component: TitleSubsection,
  title: `${atomsTitles.titleSubsection}`,
} as ComponentMeta<typeof TitleSubsection>;

export const AtFirst: ComponentStory<typeof TitleSubsection> = (args: any) => (
  <TitleSubsection {...args} />
);

AtFirst.args = TitleSubsection.defaultProps;
