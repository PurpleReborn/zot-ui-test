import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DefaultText } from "./DefaultText";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DefaultText",
  component: DefaultText,
} as ComponentMeta<typeof DefaultText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DefaultText> = (args) => (
  <DefaultText {...args} />
);

export const Small = Template.bind({});
Small.args = {
  size: '12px',
  text: "Small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "22px",
  text: "Medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "32px",
  text: "Large",
  fontFamily: "Roboto-Black"
};
