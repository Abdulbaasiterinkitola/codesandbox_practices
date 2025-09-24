import React from "react";

function Footer() {
  const a = 34;
  const today = new Date();
  const currentYear = today.getFullYear();
  return (
    <footer>
      <p>Copyright © {currentYear}</p>
    </footer>
  );
}

export default Footer;
