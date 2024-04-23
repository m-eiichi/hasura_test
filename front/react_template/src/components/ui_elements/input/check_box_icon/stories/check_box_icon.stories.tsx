import type { Meta, StoryObj } from "@storybook/react";

import { CheckBoxIcon } from "..";

const meta = {
  title: "ui_elements/input/CheckBoxIcon",
  component: CheckBoxIcon,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof CheckBoxIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "id",
    name: "name",
  },
};
