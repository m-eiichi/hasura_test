import type { Meta, StoryObj } from "@storybook/react";

import { CheckBoxesRhf } from "./component/check_boxes_rhf";

const meta = {
  title: "ui_parts/input/CheckBoxes",
  component: CheckBoxesRhf,
  tags: ["autodocs"],
} satisfies Meta<typeof CheckBoxesRhf>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rhf: Story = {
  args: {
    min: 1,
    max: 2,
    label: "ラベル",
    requirement: true,
    supportText: "サポートテキスト",
    size: "s",
    name: "test",
    items: [
      {
        id: "1",
        value: "string1",
        text: "ラベル１",
        subText: "サブテキスト",
      },
      {
        id: "2",
        value: "string2",
        text: "ラベル２",
        subText: "サブテキスト",
      },
      {
        id: "3",
        value: "string3",
        text: "ラベル３",
        subText: "サブテキスト",
      },
    ],
  },
};
