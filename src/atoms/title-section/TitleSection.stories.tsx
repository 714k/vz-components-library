import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import atomsTitles from "../index";
import TitleSection from "./TitleSection";

export default {
  component: TitleSection,
  title: `${atomsTitles.titleSection}`,
} as ComponentMeta<typeof TitleSection>;

export const AtFirst: ComponentStory<typeof TitleSection> = (args: any) => (
  <TitleSection {...args} />
);

AtFirst.args = TitleSection.defaultProps;
