import './style.css';

export default function QuemSomos() {
  return (
    <div className="about-container">
      {/* CABEÇALHO DA PÁGINA */}
      <header className="about-header">
        <span className="badge-about">Nossa Essência</span>
        <h1>Conheça o Hospital BK</h1>
        <p>Uma instituição nascida para humanizar a medicina e salvar vidas através da excelência.</p>
      </header>

      {/* SEÇÃO HISTÓRIA */}
      <section className="history-section">
        <div className="history-grid">
          <div className="history-text">
            <h2>Nossa História</h2>
            <p>
              O Hospital BK nasceu da união de propósitos dos especialistas <strong>Dr. Bruno</strong> e <strong>Dr. Kauá</strong>. 
              Incomodados com a frieza dos atendimentos hospitalares tradicionais e as longas esperas que comprometiam a saúde dos pacientes, 
              eles decidiram fundar uma instituição que quebrasse esse paradigma.
            </p>
            <p>
              O que começou como um centro clínico especializado rapidamente expandiu-se para um hospital de alta complexidade. 
              Hoje, o Hospital BK é sinônimo de agilidade, diagnóstico preciso e, acima de tudo, respeito incondicional à vida humana.
            </p>
          </div>
          <div className="history-visual">
            <div className="visual-box">
              <span className="visual-year">Fundação</span>
              <span className="visual-icon">🚀</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO MISSÃO, VISÃO E VALORES */}
      <section className="pillars-section">
        <div className="pillar-card">
          <div className="pillar-icon">🎯</div>
          <h3>Missão</h3>
          <p>Prestar assistência médico-hospitalar de excelência com agilidade, unindo tecnologia de ponta ao acolhimento humano e ético.</p>
        </div>

        <div className="pillar-card">
          <div className="pillar-icon">👁️</div>
          <h3>Visão</h3>
          <p>Ser reconhecido regionalmente como o hospital mais eficiente, inovador e seguro, sendo a primeira escolha em saúde e bem-estar.</p>
        </div>
      </section>

      {/* SEÇÃO VALORES (DESTAQUES) */}
      <section className="values-section">
        <div className="values-title">
          <h2>Nossos Valores</h2>
          <p>Os pilares morais que guiam cada decisão dos nossos diretores e de toda a nossa equipe médica.</p>
        </div>

        <div className="values-grid">
          <div className="value-item">
            <span className="value-num">01</span>
            <h4>Humanização</h4>
            <p>Olhar para o paciente antes da doença. Tratar cada indivíduo com a empatia e o carinho que dedicaríamos à nossa própria família.</p>
          </div>

          <div className="value-item">
            <span className="value-num">02</span>
            <h4>Agilidade e Precisão</h4>
            <p>Na saúde, o tempo salva vidas. Combatemos a burocracia para entregar diagnósticos rápidos e condutas médicas certeiras.</p>
          </div>

          <div className="value-item">
            <span className="value-num">03</span>
            <h4>Ética e Transparência</h4>
            <p>Atuar com total retidão e clareza em todos os procedimentos, honrando a confiança depositada no trabalho do Dr. Bruno e Dr. Kauá.</p>
          </div>

          <div className="value-item">
            <span className="value-num">04</span>
            <h4>Inovação Constante</h4>
            <p>Investir incansavelmente na atualização científica do nosso corpo clínico e na aquisição de tecnologias médicas avançadas.</p>
          </div>
        </div>
      </section>
    </div>
  );
}