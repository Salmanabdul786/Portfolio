import React from "react";
import "./footer.scss"; // Assuming your styles are in Footer.scss

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="/A.png" alt="Logo" className="logo" />
        <div className="footer-text">
          <h4>Abdul Kareem</h4>
          <p>&copy; 2024 Abdul. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

