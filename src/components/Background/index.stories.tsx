import type { Meta, StoryObj } from "@storybook/react";

import Background from "./index";

const meta = {
  title: "components/Background",
  component: Background,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    background: { control: "color" },
  },
} satisfies Meta<typeof Background>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "red",
    background: "yellow",
  },
};
