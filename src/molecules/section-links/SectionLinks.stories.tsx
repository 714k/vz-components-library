import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import atomsTitles from "../index";
import SectionLinks from "./SectionLinks";

export default {
  component: SectionLinks,
  title: `${atomsTitles.sectionLinks}`,
} as ComponentMeta<typeof SectionLinks>;

export const Text: ComponentStory<typeof SectionLinks> = (args: any) => (
  <SectionLinks {...args} />
);
Text.args = SectionLinks.defaultProps;
