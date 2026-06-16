import React, { useState } from 'react';
import './style.css';

export default function CorpoClinico() {
  // Lista de médicos cadastrados
  const medicos = [
    { id: 1, nome: "Dr. Bruno Brandão", especialidade: "Cardiologia", crm: "CRM/SP 123456", icone: "🫀" },
    { id: 2, nome: "Dr. Kauá Silva", especialidade: "Neurologia", crm: "CRM/SP 654321", icone: "🧠" },
    { id: 3, nome: "Dra. Mariana Costa", especialidade: "Pediatria", crm: "CRM/SP 789101", icone: "🧸" },
    { id: 4, nome: "Dr. André Santos", especialidade: "Ortopedia", crm: "CRM/SP 112131", icone: "🦴" },
    { id: 5, nome: "Dra. Juliana Ribeiro", especialidade: "Cardiologia", crm: "CRM/SP 415161", icone: "🩺" },
    { id: 6, nome: "Dr. Lucas Almeida", especialidade: "Clínica Geral", crm: "CRM/SP 171819", icone: "🏥" },
  ];

  // Estado para controlar o filtro selecionado
  const [filtro, setFiltro] = useState('Todos');

  // Filtragem dos médicos na tela
  const medicosFiltrados = filtro === 'Todos' 
    ? medicos 
    : medicos.filter(medico => medico.especialidade === filtro);

  return (
    <div className="corpo-clinico-container">
      {/* CABEÇALHO */}
      <header className="clinico-header">
        <span className="badge-clinico">Nossos Especialistas</span>
        <h1>Corpo Clínico</h1>
        <p>Conheça a equipe de profissionais renomados do Hospital BK, liderada pelo Dr. Bruno e Dr. Kauá.</p>
      </header>

      {/* BOTÕES DE FILTRO */}
      <div className="filter-container">
        {['Todos', 'Cardiologia', 'Neurologia', 'Pediatria', 'Ortopedia', 'Clínica Geral'].map((esp) => (
          <button 
            key={esp}
            className={`filter-btn ${filtro === esp ? 'active' : ''}`}
            onClick={() => setFiltro(esp)}
          >
            {esp}
          </button>
        ))}
      </div>

      {/* GRID DE MÉDICOS */}
      <section className="medicos-grid">
        {medicosFiltrados.map((medico) => (
          <div key={medico.id} className="medico-card">
            <div className="medico-avatar-placeholder">
              <span className="medico-avatar-icon">{medico.icone}</span>
            </div>
            <div className="medico-info">
              <h3>{medico.nome}</h3>
              <span className="medico-especialidade">{medico.especialidade}</span>
              <span className="medico-crm">{medico.crm}</span>
            </div>
            <button className="btn-agendar-medico">Agendar com Especialista</button>
          </div>
        ))}
      </section>
    </div>
  );
}