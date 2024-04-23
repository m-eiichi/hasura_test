import type { Meta, StoryObj } from "@storybook/react";

import { Edit } from "../";

const meta = {
  title: "ui_parts/input/Edit",
  component: Edit,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Edit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "ラベルテキスト",
    requirement: true,
    supportText: "サブテキスト",
    name: "test",
    id: "test",
  },
};
