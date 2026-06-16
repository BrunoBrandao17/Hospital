import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Importação dos componentes fixos (dentro de assets)
import Header from './assets/components/Header/index.jsx';
import Footer from './assets/components/Footer/index.jsx';

// Importação das páginas
import Home from './pages/Home/index.jsx';
import QuemSomos from './pages/QuemSomos/index.jsx';
import Servicos from './pages/Servicos/index.jsx'; // Nova página de Serviços integrada!
import CorpoClinico from './pages/CorpoClinico/index.jsx';

function App() {
  return (
    <Router>
      <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* Topo fixo */}
        <Header />
        
        {/* Área dinâmica que muda de acordo com o link clicado */}
        <main className="main-content" style={{ flex: '1 0 auto', width: '100%' }}>
          <Routes>
            {/* Rota da Página Inicial */}
            <Route path="/" element={<Home />} />
            
            {/* Rota da Página Quem Somos */}
            <Route path="/quem-somos" element={<QuemSomos />} />
            
            {/* Rota da Página de Serviços (Dr. Bruno & Dr. Kauá) */}
            <Route path="/servicos" element={<Servicos />} />

            <Route path='/CorpoClinico' element={<CorpoClinico />} />
          </Routes>
        </main>
        
        {/* Base fixa */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;