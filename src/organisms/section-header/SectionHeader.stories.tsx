import { ComponentMeta, ComponentStory } from "@storybook/react";
import organismTitles from "../index";
import SectionHeader from "./SectionHeader";

export default {
  component: SectionHeader,
  title: organismTitles.sectionHeader,
} as ComponentMeta<typeof SectionHeader>;

export const Default: ComponentStory<typeof SectionHeader> = (args: any) => (
  <SectionHeader {...args} />
);
Default.args = SectionHeader.defaultProps;
