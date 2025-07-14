import React from "react";

export default function LogoImage() {
  return (
    <img
      src={`${process.env.REACT_APP_CLOUDFRONT_URL}/images/logo_small.jpeg`}
      alt="Logo - Click to scroll to top"
      title="Back to Top"
      style={{ height: "60px", marginBottom: "15px", cursor: "pointer" }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    />
  );
}
