import React from "react";

export default function Cta({ url, label, isButton = false }) {
  return (
    <div className="cta-component">
      <a className={`btn ${isButton ? "btn-primary" : ""}`} href={url}>
        {label && label}
      </a>
    </div>
  );
}
