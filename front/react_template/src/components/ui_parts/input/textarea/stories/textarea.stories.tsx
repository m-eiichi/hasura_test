import type { Meta, StoryObj } from "@storybook/react";

import { TextArea } from "../";

const meta = {
  title: "ui_parts/input/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "ラベル",
    requirement: true,
    supportText: "サブテキスト",
    name: "test",
    id: "test",
  },
};
