import type { Meta, StoryObj } from "@storybook/react";

import { CheckBoxes } from "..";

const meta = {
  title: "ui_parts/input/CheckBoxes",
  component: CheckBoxes,
  tags: ["autodocs"],
} satisfies Meta<typeof CheckBoxes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "ラベル",
    requirement: true,
    // disabled: true,
    supportText: "サポートテキスト",
    size: "s",
    // register?: UseFormRegisterReturn;
    // errors?: FieldError | Merge<FieldError, FieldErrorsImpl<T>> | undefined;
    name: "string",
    items: [
      {
        id: "1",
        value: "string1",
        text: "ラベル１",
        subText: "サブテキスト",
        // checked: true,
        // checked?: boolean;
        // disabled?: boolean;
        // error?: boolean;
      },
      {
        id: "2",
        value: "string2",
        text: "ラベル２",
        subText: "サブテキスト",
        // disabled?: boolean;
        // error?: boolean;
      },
      {
        id: "3",
        value: "string3",
        text: "ラベル３",
        subText: "サブテキスト",
        // checked?: boolean;
        // error?: boolean;
      },
    ],
  },
};
