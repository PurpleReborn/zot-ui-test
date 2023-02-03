import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CustomButton } from "./CustomButton";

export default {
  title: "Components/CustomButton",
  component: CustomButton,
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args) => (
  <CustomButton {...args} />
);

export const Button = Template.bind({});
Button.args = {
  label: "Buton",
};

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  label: "Sign in",
  type: "primary",
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  label: "View Report",
  type: "secondary",
};

