import React from "react";
import CTSlider from "./CTSlider";
import GlobalImage from "./GlobalImage";

export default function ImageWrapper({ image, ...props }) {
  if (image.length > 1) {
    return (
      <CTSlider>
        {image.map((img) => (
          <GlobalImage image={img} {...props} />
        ))}
      </CTSlider>
    );
  }

  return <GlobalImage image={image[0]} {...props} />;
}
