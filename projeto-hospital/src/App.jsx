import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Importação dos componentes fixos
import Header from './assets/components/Header/index.jsx';
import Footer from './assets/components/Footer/index.jsx';

// Importação das páginas existentes
import Home from './pages/Home/index.jsx';
import QuemSomos from './pages/QuemSomos/index.jsx';
import Servicos from './pages/Servicos/index.jsx'; 
import CorpoClinico from './pages/CorpoClinico/index.jsx';

// 1. NOVOS IMPORTS (Vamos criar essas pastas no Passo 3)
import Contatos from './pages/Contatos/index.jsx';
import Blog from './pages/Blog/index.jsx'; // Importe o Blog aqu
function App() {
  return (
    <Router>
      <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        
        <main className="main-content" style={{ flex: '1 0 auto', width: '100%' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/corpo-clinico" element={<CorpoClinico />} />
            
            {/* 2. ADICIONE ESTAS DUAS NOVAS ROTAS */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/contatos" element={<Contatos />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;