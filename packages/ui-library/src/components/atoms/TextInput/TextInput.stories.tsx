import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextInput from "./TextInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const EmailTextInput = Template.bind({});

EmailTextInput.args = {
  type: "email",
  placeholder: "email",
};

export const PasswordTextInput = Template.bind({});
PasswordTextInput.args = {
  type: "password",
  placeholder: "password",
};
