import type { Meta, StoryObj } from "@storybook/react";

import { RadioButtonsRhf } from "./component/radio_buttons_rhf";

const meta = {
  title: "ui_parts/input/RadioButtons",
  component: RadioButtonsRhf,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioButtonsRhf>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rhf: Story = {
  args: {
    label: "ラベル",
    requirement: true,
    supportText: "サポートテキスト",
    size: "s",
    name: "test",
    items: [
      {
        id: "1",
        value: "string1",
        text: "ラベル１",
        subText: "サブテキスト",
        disabled: true,
      },
      {
        id: "2",
        value: "string2",
        text: "ラベル２",
        subText: "サブテキスト",
      },
      {
        id: "3",
        value: "string3",
        text: "ラベル３",
        subText: "サブテキスト",
      },
    ],
  },
};
