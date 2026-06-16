import React from 'react';
import './style.css'; // Carrega o estilo da mesma pasta

function Footer() {
  return (
    <footer className="huk-footer">
      <div className="footer-container">
        
        {/* Lado Esquerdo: Identidade do Hospital */}
        <div className="footer-section brand-box">
          <h3 className="footer-logo">🏥 HU<span>Kaubru</span></h3>
          <p className="footer-tagline">
            A união perfeita entre a visão inovadora de <strong>Kaua</strong> e a excelência estratégica de <strong>Bruno</strong>.
          </p>
          <div className="academic-seal">
            <span>🛡️ Centro de Pesquisa & Saúde</span>
          </div>
        </div>

        {/* Lado Direito: Links Rápidos com Micro-interações */}
        <div className="footer-section links-box">
          <h4>Navegação Acadêmica</h4>
          <ul className="footer-links">
            <li><a href="#inicio"><span>⚡</span> Início</a></li>
            <li><a href="#consultas"><span>🩺</span> Consultas</a></li>
            <li><a href="#agendamentos"><span>📅</span> Agendamentos</a></li>
          </ul>
        </div>

        {/* Lado Direito: Plantão/Horários */}
        <div className="footer-section status-box">
          <h4>Status do Campus</h4>
          <div className="status-badge animated-pulse">
            <span className="status-dot"></span>
            Pronto-Socorro Online
          </div>
          <p className="status-text">Atendimento Universitário 24 horas</p>
        </div>

      </div>

      {/* Faixa de Direitos Autorais na Base */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} <strong>Hospital Universitário Kaubru</strong>. 
          Desenvolvido com foco em Medicina Acadêmica e Tecnologia Interativa.
        </p>
      </div>
    </footer>
  );
}

export default Footer;