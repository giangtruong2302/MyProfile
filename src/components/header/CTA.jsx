import React from "react";
import CV from "../../assets/DuongTruongGiang_CV.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn">
        Download My CV
      </a>
      <a href="tel:0337657262" className="btn btn-primary">
        Let't Talk
      </a>
    </div>
  );
};

export default CTA;
