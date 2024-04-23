import type { Meta, StoryObj } from "@storybook/react";

import { SelectRhf } from "./component/select_rhf";

const meta = {
  title: "ui_parts/input/Select",
  component: SelectRhf,
  tags: ["autodocs"],
} satisfies Meta<typeof SelectRhf>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rhf: Story = {
  args: {
    label: "ラベル",
    requirement: true,
    supportText: "サポートテキスト",
    options: [
      { text: "", value: "" },
      { text: "選択肢1", value: 1 },
      { text: "選択肢2", value: 2 },
      { text: "選択肢3", value: 3 },
    ],
    // name: "test",
    defaultvalue: "現在「storybook」では機能しない。",
  },
};
