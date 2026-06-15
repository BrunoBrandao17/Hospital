import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Carrega o estilo da mesma pasta

function Header() {
  return (
    <header className="huk-header">
      <div className="header-container">
        
        {/* Lado Esquerdo: Logo e Identidade */}
        <div className="logo-section">
          <span className="logo-pulse">🏥</span>
          <div className="logo-titles">
            <h1>Hospital Universitário</h1>
            <h2>Kaubru</h2>
          </div>
        </div>

        {/* Lado Direito: Menu de Navegação e Botão de Ação */}
        <nav className="navigation-section">
          <div className="nav-links">
            <Link to="/" className="nav-link-item">
              <span className="nav-emoji">🏠</span> Início
            </Link>
            <Link to="/consultas" className="nav-link-item">
              <span className="nav-emoji">🩺</span> Consultas
            </Link>
          </div>
          
          <Link to="/agendamentos" className="action-button">
            Agendar Já ⚡
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;