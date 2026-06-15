import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Adicionado o "/assets" no meio do caminho:
import Footer from './assets/components/Footer/index.jsx';
import Header from './assets/components/Header/index.jsx';
import Home from './pages/Home/index.jsx';
import QuemSomos from './pages/QuemSomos/index.jsx';

function App() {
  return (
    <Router>
      <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main className="main-content" style={{ flex: '1 0 auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <QuemSomos />
        <Footer />
      </div>
    </Router>
  );
}

export default App;