import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 

function Header() {
  return (
    <header className="huk-header">
      <div className="header-container">
        
        {/* Lado Esquerdo: Logo do Hospital BK */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="logo-section">
            <span className="logo-pulse">🏥</span>
            <div className="logo-titles">
              <h1>Hospital Universitário</h1>
              <h2>BK</h2>
            </div>
          </div>
        </Link>
        <div className="nav-links">
  
  {/* ADICIONE ESTES DOIS NOVOS BOTÕES */}
  <Link to="/blog" className="nav-link-item"><span className="nav-emoji">📰</span> Blog</Link>
  <Link to="/contatos" className="nav-link-item"><span className="nav-emoji">📞</span> Contatos</Link>
</div>

        {/* Lado Direito: O Guia de Botões para navegar pelo site */}
        <nav className="navigation-section">
          <div className="nav-links">
            <Link to="/" className="nav-link-item">
              <span className="nav-emoji">🏠</span> Início
            </Link>
            
            {/* LINK PARA O QUEM SOMOS */}
            <Link to="/quem-somos" className="nav-link-item">
              <span className="nav-emoji">✨</span> Quem Somos
            </Link>

            {/* LINK PARA OS SERVIÇOS */}
            <Link to="/servicos" className="nav-link-item">
              <span className="nav-emoji">🩺</span> Serviços
            </Link>

            {/* LINK PARA O CORPO CLÍNICO */}
            <Link to="/corpo-clinico" className="nav-link-item">
              <span className="nav-emoji">🔬</span> Corpo Clínico
            </Link>
          </div>
        </nav>

      </div>
    </header>
  );
}

export default Header;