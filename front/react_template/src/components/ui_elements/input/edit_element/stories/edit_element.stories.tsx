import type { Meta, StoryObj } from "@storybook/react";

import { EditElement } from "..";

const meta = {
  title: "ui_elements/input/EditElement",
  component: EditElement,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof EditElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "test",
    id: "test",
  },
};
