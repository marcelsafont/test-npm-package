import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const GlobalImage = ({ image, ...props }) => {
  if (image?.gatsbyImageData) {
    return <GatsbyImage image={image.gatsbyImageData} {...props} />;
  }

  return image.url ? <img src={image.url} /> : null;
};

export default GlobalImage;
