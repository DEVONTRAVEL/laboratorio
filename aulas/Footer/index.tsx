import React, { useState } from "react";
import { Container } from "./estilo";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false)
    }
  };

  window.addEventListener('scroll', checkScrollTop)
  
  return (
    <Container>
      <div className="footer">
        <div className="float-right">
          <strong>Consulta de débitos</strong>
        </div>
        <div>
          <strong>Copyright</strong> LW tecnologia &copy; 2022
      </div>
      </div>
      <div id="scroll-to-top-up">
        <a className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ display: showScroll ? 'block' : 'none' }}>
          <i className="fa fa-chevron-up"></i>
        </a>
      </div>
    </Container>
  )
};
export default Footer;
