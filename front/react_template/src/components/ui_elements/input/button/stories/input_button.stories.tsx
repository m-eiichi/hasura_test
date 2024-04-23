import type { Meta, StoryObj } from "@storybook/react";

import { InputButton } from "../";

const meta = {
  title: "ui_elements/input/Button",
  component: InputButton,
  tags: ["autodocs"],
} satisfies Meta<typeof InputButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "BUTTON",
  },
};
