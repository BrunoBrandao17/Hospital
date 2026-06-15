import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="app-container">
      <Header />
      <main className="content">
        <Outlet /> {/* Aqui renderizam as páginas (Home, Consultas, etc.) */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;