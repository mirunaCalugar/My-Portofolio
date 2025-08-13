import React from "react";
import SubmitButton from "./SubmitButton";

export default {
  title: "Components/SubmitButton",
  component: SubmitButton,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    isLoading: { control: "boolean" },
    error: { control: "boolean" },
    type: { control: { type: "select" }, options: ["submit", "button", "reset"] },
    onClick: { action: "clicked" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Buton de submit (Trimite) cu stări: **normal**, **disabled**, **error** și **loading**.",
      },
    },
  },
};

export const Default = (args) => <SubmitButton {...args} />;
Default.args = {
  label: "Trimite",
  disabled: false,
  isLoading: false,
  error: false,
  type: "submit",
};

export const Disabled = (args) => <SubmitButton {...args} />;
Disabled.args = {
  label: "Trimite",
  disabled: true,
  isLoading: false,
  error: false,
};

export const Error = (args) => <SubmitButton {...args} />;
Error.args = {
  label: "Trimite",
  disabled: false,
  isLoading: false,
  error: true,
};

export const Loading = (args) => <SubmitButton {...args} />;
Loading.args = {
  label: "Trimite",
  disabled: false,
  isLoading: true,
  error: false,
};
