import type { Meta, StoryObj } from "@storybook/react";

import { SelectElement } from "../";

const meta = {
  title: "ui_elements/input/SelectElement",
  component: SelectElement,
  tags: ["autodocs"],
} satisfies Meta<typeof SelectElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { text: "", value: -1 },
      { text: "選択肢1", value: 1 },
      { text: "選択肢2", value: 2 },
      { text: "選択肢3", value: 3 },
    ],
    name: "test",
    id: "test",
    defaultvalue: "※現在storybookでは動作しません。",
  },
};
