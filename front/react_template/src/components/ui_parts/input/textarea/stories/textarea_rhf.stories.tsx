import type { Meta, StoryObj } from "@storybook/react";

import { TextareaRhf } from "./component/textarea_rhf";

const meta = {
  title: "ui_parts/input/TextArea",
  component: TextareaRhf,
} satisfies Meta<typeof TextareaRhf>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rhf: Story = {
  args: {
    label: "ラベル",
    requirement: true,
    supportText: "サポートテキスト",
    cols: 10,
  },
};
