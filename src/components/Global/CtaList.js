import React from "react";
import Cta from "./Cta";

export default function CtaList({ ctas }) {
  return (
    <div className="ctas">
      {ctas.map((cta) => (
        <Cta
          url={cta.link?.content ? cta.link?.content?.slug : cta.link?.url}
          label={cta.title ? cta.title : cta.link?.content?.label}
          isButton={cta.isButton}
        />
      ))}
    </div>
  );
}
