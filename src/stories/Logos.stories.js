import React from "react";
import Logos from "../components/Logos";

// Mock
import ctasMock from "./mock/ctas.mock";
import logosMock from "./mock/logos.mock";

export default {
  title: "Components/Logos",
  component: Logos,
  argTypes: {
    bgColor: {
      options: ["red", "blue", "green"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Logos {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  bgColor: "red",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel dictum viverra bibendum erat eget consequat tellus sit a.",
  title: "Lorem ipsum dolor sit amet",
  ctas: ctasMock,
  logos: logosMock,
};
