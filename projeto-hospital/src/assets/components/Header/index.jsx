import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css'; // Adicionado mais um '../' para subir até a pasta src

function Header() {
  return (
    <header className="main-header">
      <div className="logo-area">
        <span className="icon-pulse">🏥</span>
        <h1>Hospital Universitário <span>Kaubru</span></h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Início</Link>
        <Link to="/consultas">Minhas Consultas</Link>
        <Link to="/agendamentos" className="btn-schedule">Agendar Já</Link>
      </nav>
    </header>
  );
}

export default Header;