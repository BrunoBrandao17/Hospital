import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <p>&copy; {new Date().getFullYear()} Hospital Universitário Kaubru. Desenvolvido por Kaua & Bruno.</p>
      <p className="footer-sub">Excelência Acadêmica & Cuidado Humano</p>
    </footer>
  );
}

export default Footer;