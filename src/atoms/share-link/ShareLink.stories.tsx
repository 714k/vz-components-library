import * as React from "react";
import { ComponentStory, ComponentMeta, Story } from "@storybook/react";
import atomsTitles from "../index";
import ShareLink from "./ShareLink";

export default {
  component: ShareLink,
  title: `${atomsTitles.sharedLink}`,
} as ComponentMeta<typeof ShareLink>;

const Template: ComponentStory<typeof ShareLink> = (args: any) => (
  <ShareLink {...args} />
);

export const Facebook = Template.bind({});

Facebook.args = {
  href: "#",
  className: "share-link",
  text: "Facebook",
  showBullet: false,
};
