import { create } from "@storybook/theming";

export default create({
  base: "light",
  brandTitle: "React Components Library <br/> Victor Zamudio",
  brandUrl: "https://victorzamudio.tech",
  brandImage: "",
  brandTarget: "_self",

  //MAIN
  colorPrimary: "hotpink",
  colorSecondary: "#0f151d",

  //UI
  // appContentBg: 'grey',
  appBg: "#303748",
  textInverseColor: "green", // Toolbar default and active colors

  // Text
  textColor: "#ff3b00",
  barTextColor: "white",
  barSelectedColor: "#303748",
  barBg: "#ff3b00",

  // Form colors
  inputBorderRadius: 40,
});
