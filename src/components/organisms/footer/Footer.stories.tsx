import * as React from "react";
import { ComponentStory, ComponentMeta, Story } from "@storybook/react";
import organismTitles from "../../organisms";
import Footer from "./Footer";

export default {
  component: Footer,
  title: `${organismTitles.footer}`,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args: any) => (
  <Footer {...args} />
);

export const Primary = Template.bind({});

Primary.args = Footer.defaultProps;
