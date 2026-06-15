import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Consultas from './pages/Consultas';
import Agendamentos from './pages/Agendamentos';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* O Layout engloba todas as páginas e carrega o Header/Footer */}
        <Route path="/" element={<Layout />}>
          {/* Definimos a Home como a rota inicial (index) */}
          <Route index element={<Home />} />
          
          {/* Demais rotas internas do Hospital Kaubru */}
          <Route path="consultas" element={<Consultas />} />
          <Route path="agendamentos" element={<Agendamentos />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;