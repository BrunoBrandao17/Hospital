import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Adicionado o "/assets" no meio do caminho:
import Header from './assets/components/Header/index.jsx';
import Footer from './assets/components/Footer/index.jsx';
import Home from './pages/Home/index.jsx';

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
        <Footer />
      </div>
    </Router>
  );
}

export default App;