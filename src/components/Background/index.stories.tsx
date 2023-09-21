import { FC } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Background from "./index";
import { BackgroundProps } from "./types";

const StoryOfBackround: FC<BackgroundProps> = (props) => (
  <Background {...props}>
    <div>Children component</div>
  </Background>
);
const meta = {
  title: "components/Background",
  component: StoryOfBackround,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    background: { control: "color" },
    color: { control: "color" },
  },
} satisfies Meta<typeof Background>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    background: "#CA99FE",
    color: "",
  },
};
