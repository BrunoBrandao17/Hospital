import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './assets/components/Layout';
import Home from './pages/Home';
im


function App() {
  return (
    <Router>
      <Routes>
        {/* O Layout engloba todas as páginas e carrega o Header/Footer */}
        <Route path="/" element={<Layout />}>
          {/* Definimos a Home como a rota inicial (index) */}
          <Route index element={<Home />} />
          
        
        </Route>
      </Routes>
    </Router>
  );
}

export default App;