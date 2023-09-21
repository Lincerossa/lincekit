import type { Meta, StoryObj } from "@storybook/react";

import MainLabel from "./index";

const meta = {
  title: "components/MainLabel",
  component: MainLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
} satisfies Meta<typeof MainLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Hover me!",
  },
};
