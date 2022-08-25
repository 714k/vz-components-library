import * as React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import moleculesTitles from "../index";
import ShareContent from "./ShareContent";

export default {
  component: ShareContent,
  title: moleculesTitles.sharedContent,
} as ComponentMeta<typeof ShareContent>;

export const Primary: Story = (args) => <ShareContent {...args} />;

Primary.args = {
  href: "#",
  className: "share-link",
  text: "Share",
  showBullet: false,
};
