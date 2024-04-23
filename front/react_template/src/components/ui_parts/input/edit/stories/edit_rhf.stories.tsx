import type { Meta, StoryObj } from "@storybook/react";

import { EditRhf } from "./component/edit_rhf";

const meta = {
  title: "ui_parts/input/Edit",
  component: EditRhf,
} satisfies Meta<typeof EditRhf>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rhf: Story = {
  args: {
    type: "email",
  },
};
