import './style.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* SEÇÃO HERO / APRESENTAÇÃO */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">Excelência em Saúde</span>
          <h1>Hospital BK</h1>
          <p>
            Fundado e dirigido pelos especialistas <strong>Dr. Bruno</strong> e <strong>Dr. Kauá</strong>, 
            o Hospital BK une medicina de alta precisão a um atendimento humanizado, 
            oferecendo a máxima dedicação e tecnologia de ponta que você e sua família merecem.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Agendar Consulta</button>
            <button className="btn-secondary">Conheça Nossos Serviços</button>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-placeholder">
            {/* Aqui você pode colocar uma tag <img src="..." alt="Hospital" /> */}
            <span className="icon-pulse">🏥</span>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DESTAQUES (CARDS) */}
      <section className="highlights">
        <div className="section-title">
          <h2>Por que escolher o Hospital BK?</h2>
          <p>Destaques que nos tornam referência em cuidado, estrutura e agilidade.</p>
        </div>

        <div className="cards-grid">
          <div className="card">
            <div className="card-icon">⚡</div>
            <h3>Pronto Atendimento 24h</h3>
            <p>Equipe médica de plantão preparada para qualquer emergência, com foco em agilidade e sem filas.</p>
          </div>

          <div className="card">
            <div className="card-icon">🔬</div>
            <h3>Tecnologia Avançada</h3>
            <p>Equipamentos modernos para diagnósticos rápidos, exames precisos e tratamentos eficazes.</p>
          </div>

          <div className="card">
            <div className="card-icon">❤️</div>
            <h3>Cuidado Humanizado</h3>
            <p>Profissionais renomados dedicados ao seu bem-estar com um atendimento acolhedor e ético.</p>
          </div>
        </div>
      </section>
    </div>
  );
}