import React from "react";
import NarrativeBlock from "../components/NarrativeBlock";

// Mock
import imagesMock from "./mock/images.mock";
import ctasMock from "./mock/ctas.mock";

export default {
  title: "Components/NarrativeBlock",
  component: NarrativeBlock,
  argTypes: {
    alignment: {
      options: ["left", "center", "right"],
      control: { type: "radio" },
    },
    bgColor: {
      options: ["red", "blue", "green"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <NarrativeBlock {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  title: "Title example",
  preTitle: "Pre title",
  content:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec imperdiet metus.</p>",
  alignment: "left",
  bgColor: "red",
  images: imagesMock,
  ctas: ctasMock,
};
