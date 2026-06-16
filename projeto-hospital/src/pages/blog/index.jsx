import React from 'react';
function Blog() {
  const posts = [
    { id: 1, titulo: "A Importância do Check-up Anual", autor: "Dr. Bruno", data: "15 Jun, 2026", resumo: "Entenda quais exames preventivos não podem ficar de fora da sua rotina de saúde este ano." },
    { id: 2, titulo: "Inovações na Medicina Universitária", autor: "Dr. Kauá", data: "10 Jun, 2026", resumo: "Como o Hospital BK está utilizando inteligência artificial para agilizar diagnósticos clínicos." }
  ];

  return (
    <div className="blog-container">
      <h2>Blog Hospital BK</h2>
      <div className="blog-grid">
        {posts.map(post => (
          <div key={post.id} className="blog-post-card">
            <span className="blog-meta">Por {post.autor} | {post.data}</span>
            <h3>{post.titulo}</h3>
            <p>{post.resumo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog; // Se esquecer essa linha, o App.jsx quebra na hora!