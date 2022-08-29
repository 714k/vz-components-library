import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import atomsTitles from "../index";
import { IconFacebook } from "../icons";
import ShareLink from "./ShareLink";

export default {
  component: ShareLink,
  title: `${atomsTitles.sharedLink}`,
} as ComponentMeta<typeof ShareLink>;

export const WithIcon: ComponentStory<typeof ShareLink> = (args: any) => (
  <ShareLink {...args}>
    <IconFacebook
      style={{
        fill: "white",
        zIndex: 3,
        position: "absolute",
        height: "20px",
        transform: "translate(8px, 4px)",
      }}
    />
  </ShareLink>
);
WithIcon.args = ShareLink.defaultProps;
