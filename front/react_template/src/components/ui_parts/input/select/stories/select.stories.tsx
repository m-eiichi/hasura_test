import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "../";

const meta = {
  title: "ui_parts/input/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "ラベル",
    requirement: true,
    supportText: "サポートテキスト",
    options: [
      { text: "", value: -1 },
      { text: "選択肢1", value: 1 },
      { text: "選択肢2", value: 2 },
      { text: "選択肢3", value: 3 },
    ],
    name: "test",
    id: "test",
  },
};
