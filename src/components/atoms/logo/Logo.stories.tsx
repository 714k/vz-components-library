import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Logo from "./Logo";

export default {
  component: Logo,
} as Meta;

export const Primary: Story = (args) => <Logo {...args} />;
Primary.args = {
  className: "main-logo",
  styles: { width: "80px", height: "auto" },
};
