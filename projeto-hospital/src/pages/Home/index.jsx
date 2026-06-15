import './style.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* SEÇÃO HERO / APRESENTAÇÃO */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">Excelência em Saúde</span>
          <h1>Hospital Alpha & Ômega</h1>
          <p>
            Cuidando da sua vida com a máxima dedicação, tecnologia de ponta 
            e o acolhimento que você e sua família merecem.
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

      {/* SEÇÃO SOBRE OS FUNDADORES */}
      <section className="about-owners">
        <div className="about-text">
          <h2>Nossa Liderança</h2>
          <p>
            Fundado e dirigido pelos especialistas **Dr. Bruno** e **Dr. Kauá**, 
            o Hospital nasceu do sonho de unificar a medicina de alta precisão a um 
            atendimento humanizado, ético e ágil.
          </p>
          <div className="owners-signature">
            <div>
              <strong>Dr. Bruno Brandão</strong>
              <span>Diretor Clínico</span>
            </div>
            <div className="separator"></div>
            <div>
              <strong>Dr. Kauá Silva</strong>
              <span>Diretor Técnico</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DESTAQUES (CARDS) */}
      <section className="highlights">
        <div className="section-title">
          <h2>Por que escolher o nosso Hospital?</h2>
          <p>Destaques que nos tornam referência em cuidado e agilidade.</p>
        </div>

        <div className="cards-grid">
          <div className="card">
            <div className="card-icon">⚡</div>
            <h3>Pronto Atendimento 24h</h3>
            <p>Equipe médica de plantão preparada para qualquer emergência, sem filas quilométricas.</p>
          </div>

          <div className="card">
            <div className="card-icon">🔬</div>
            <h3>Tecnologia Avançada</h3>
            <p>Equipamentos de última geração para diagnósticos rápidos e cirurgias minimamente invasivas.</p>
          </div>

          <div className="card">
            <div className="card-icon">❤️</div>
            <h3>Corpo Clínico Especializado</h3>
            <p>Profissionais renomados e em constante atualização para garantir o melhor tratamento.</p>
          </div>
        </div>
      </section>
    </div>
);
}