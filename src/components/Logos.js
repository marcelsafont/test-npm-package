import React from "react";
import CtaList from "./Global/CtaList";
import GlobalImage from "./Global/GlobalImage";

function Logos({
  bgColor = null,
  title = null,
  intro = null,
  logos = null,
  ctas = null,
}) {
  return (
    <div className={`logos-block ${bgColor}`}>
      <div className="container">
        {title && <h2>{title}</h2>}

        {intro && (
          <div className="intro" dangerouslySetInnerHTML={{ __html: intro }} />
        )}

        {logos && logos.length > 0 && (
          <div className="row logos-list justify-content-center g-5">
            {logos.map((logo) => (
              <div className="logo-block-item col-lg-2 col-md-3 col-6">
                <a href={logo?.url} target="_blank">
                  {logo.icon && <GlobalImage image={logo?.icon} />}
                </a>
              </div>
            ))}
          </div>
        )}

        {ctas && ctas.length > 0 && (
          <div className="logos-ctas">
            <CtaList ctas={ctas} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Logos;
