import React from 'react';
import './style.css';

function Contatos() {
  return (
    <div className="contatos-container" style={{ maxWidth: '600px', margin: '0 auto', padding: '4rem 2rem', fontFamily: 'sans-serif' }}>
      <h2 style={{ color: '#0f172a', fontSize: '2.2rem', textAlign: 'center', marginBottom: '1rem' }}>Fale Conosco</h2>
      <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '2.5rem' }}>Agende sua consulta ou tire dúvidas com nossa equipe de atendimento.</p>
      
      <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Seu Nome Completo" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
        <input type="email" placeholder="Seu Melhor E-mail" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
        <textarea placeholder="Como o Hospital BK pode te ajudar hoje?" rows="5" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', resize: 'none' }}></textarea>
        <button type="submit" style={{ background: '#0d9488', color: 'white', padding: '14px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Enviar Mensagem</button>
      </form>
    </div>
  );
}

export default Contatos;