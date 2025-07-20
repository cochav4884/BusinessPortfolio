// src/components/LogoImage.js
import React from "react";

export default function LogoImage({ style }) {
  return (
    <img
      src="/favicon.ico"
      alt="Logo - Click to scroll to top"
      title="Back to Top"
      style={{
        height: "60px",
        marginBottom: "15px",
        cursor: "pointer",
        ...style,
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    />
  );
}
