import type { Meta, StoryObj } from "@storybook/react";

import { TextAreaElement } from "..";

const meta = {
  title: "ui_elements/input/TextAreaElement",
  component: TextAreaElement,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof TextAreaElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "test",
    id: "test",
  },
};
