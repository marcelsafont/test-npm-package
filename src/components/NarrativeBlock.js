import React from "react";
import CtaList from "./Global/CtaList";
import ImageWrapper from "./Global/ImageWrapper";

function NarrativeBlock({
  title = null,
  preTitle = null,
  content = null,
  alignment = null,
  bgColor = null,
  images = null,
  ctas = null,
}) {
  const hasImages = images?.length > 0;
  const hasImageAndCentered = hasImages && alignment === "center";

  return (
    <div className={`component-narrative-block ${bgColor}`}>
      <div className="container pt-4 pb-4">
        <div
          className={`row ${alignment === "left" ? "flex-row-reverse" : ""}`}
        >
          <div
            className={`nb-first-col ${
              hasImageAndCentered || !hasImages
                ? "col-lg-12 text-center"
                : "col-lg-6 mb-5 mb-lg-0"
            } ${alignment === "left" ? "offset-lg-1" : ""}`}
          >
            {preTitle && <h3>{preTitle}</h3>}
            {title && <h2>{title}</h2>}

            {content && <p dangerouslySetInnerHTML={{ __html: content }} />}
            {ctas && ctas.length > 0 && <CtaList ctas={ctas} />}
          </div>

          {images && (
            <div
              className={`nb-second-col ${
                alignment === "center" ? "col-lg-12" : "col-lg-5"
              } ${alignment === "right" ? "offset-lg-1" : ""}`}
            >
              <ImageWrapper image={images} objectFit="contain" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NarrativeBlock;
