import React from 'react';
import './style.css';

function Servicos() {
  const listaServicos = [
    { id: 1, icone: "🩺", titulo: "Consultas Clínicas", desc: "Atendimento humanizado e direcionado com foco na precisão diagnóstica pelos especialistas Bruno e Kauá." },
    { id: 2, icone: "🧪", titulo: "Exames de Laboratório", desc: "Análises laboratoriais rápidas e seguras utilizando tecnologia de ponta no ambiente universitário." },
    { id: 3, icone: "⚡", titulo: "Pronto-Atendimento", desc: "Suporte médico ágil e eficiente estruturado para cuidar de você nos momentos em que você mais precisa." },
    { id: 4, icone: "🔬", titulo: "Pesquisa Científica", desc: "O pilar acadêmico do Hospital BK, desenvolvendo soluções e a medicina do amanhã." }
  ];

  return (
    <div className="servicos-wrapper">
      <div className="servicos-intro">
        <h2>Nossos Serviços Especializados</h2>
        <p>Conheça a excelência e o cuidado humano que movem o Hospital BK.</p>
      </div>

      <div className="servicos-grid">
        {listaServicos.map(item => (
          <div key={item.id} className="servico-card">
            <div className="servico-icone">{item.icone}</div>
            <h3>{item.titulo}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicos;