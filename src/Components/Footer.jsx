import React from "react";

export const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-content">
        <div>
          <h4>SIGN ME UP</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" />
          <span className="input-group-text">
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </div>
      <div className="copyrights">Made By Bhavesh sadhu</div>
    </section>
  );
};
