import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import atomsTitles from "../index";
import Copyright from "./Copyright";

export default {
  component: Copyright,
  title: `${atomsTitles.copyright}`,
} as ComponentMeta<typeof Copyright>;

export const Text: ComponentStory<typeof Copyright> = (args: any) => (
  <Copyright {...args} />
);
Text.args = Copyright.defaultProps;
