import * as React from "react";
import { ComponentStory, ComponentMeta, Story } from "@storybook/react";
import atomsTitles from "../../atoms";
import ShareLink from "./ShareLink";

export default {
  component: ShareLink,
  title: `${atomsTitles.sharedLink}`,
} as ComponentMeta<typeof ShareLink>;

const Template: ComponentStory<typeof ShareLink> = (args: any) => (
  <ShareLink {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  href: "#",
  className: "share-link",
  text: "Share",
  showBullet: false,
};
