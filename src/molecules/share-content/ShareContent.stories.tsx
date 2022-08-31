import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  IconFacebook,
  IconLinkedLn,
  IconPinterest,
  IconTwitter,
  ShareLink,
} from "../../atoms";
import moleculesTitles from "../index";
import ShareContent from "./ShareContent";

export default {
  component: ShareContent,
  title: moleculesTitles.sharedContent,
} as ComponentMeta<typeof ShareContent>;

export const WithOneShareLink: ComponentStory<typeof ShareContent> = (
  args: any
) => (
  <ShareContent {...args}>
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
  </ShareContent>
);
WithOneShareLink.args = ShareContent.defaultProps;

export const WithFourShareLinks: ComponentStory<typeof ShareContent> = (
  args: any
) => (
  <ShareContent {...args}>
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
    <ShareLink {...args}>
      <IconLinkedLn
        style={{
          fill: "white",
          zIndex: 3,
          position: "absolute",
          height: "20px",
          transform: "translate(8px, 4px)",
        }}
      />
    </ShareLink>
    <ShareLink {...args}>
      <IconTwitter
        style={{
          fill: "white",
          zIndex: 3,
          position: "absolute",
          height: "20px",
          transform: "translate(8px, 4px)",
        }}
      />
    </ShareLink>
    <ShareLink {...args}>
      <IconPinterest
        style={{
          fill: "white",
          zIndex: 3,
          position: "absolute",
          height: "20px",
          transform: "translate(8px, 4px)",
        }}
      />
    </ShareLink>
  </ShareContent>
);
WithFourShareLinks.args = ShareContent.defaultProps;
