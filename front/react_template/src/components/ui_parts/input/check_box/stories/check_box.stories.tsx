import type { Meta, StoryObj } from "@storybook/react";

import { CheckBox } from "..";

const meta = {
  title: "ui_parts/input/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "name",
    id: "id",
    text: "ラベルテキスト",
    subText: "サブテキスト",
    // value: "value",
    // checked: true,
  },
};
