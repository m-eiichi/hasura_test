import type { Meta, StoryObj } from "@storybook/react";

import { RadioButtonIcon } from "..";

const meta = {
  title: "ui_elements/input/RadioButtonIcon",
  component: RadioButtonIcon,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof RadioButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "id",
    name: "name",
  },
};
