import type { Meta, StoryObj } from "@storybook/react";

import { RadioButton } from "..";

const meta = {
  title: "ui_parts/input/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "name",
    id: "id",
    text: "ラベルテキスト",
    subText: "サブテキスト",
    value: "value",
    // checked: true,
  },
};
