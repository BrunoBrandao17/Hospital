import React from 'react';
import "../../../styles/Footer.css"; // Caso a pasta styles esteja totalmente fora de src // Os dois '../' significam: volte duas pastas para trás
function Footer() {
  return (
    <footer className="main-footer">
      <p>&copy; {new Date().getFullYear()} Hospital Universitário Kaubru. Desenvolvido por Kaua & Bruno.</p>
      <p className="footer-sub">Excelência Acadêmica & Cuidado Humano</p>
    </footer>
  );
}

export default Footer;