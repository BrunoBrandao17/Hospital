# 🏥 Portal de Saúde - Hospital Universitário BK

Este projeto é um site institucional moderno, rápido e responsivo desenvolvido em **ReactJS** com **Vite** para o **Hospital BK (HU Kaubru)**. A aplicação simula um ambiente hospitalar universitário focado em telemedicina, atendimento humanizado e portal de notícias científicas.

Trabalho prático desenvolvido em dupla para a disciplina de Desenvolvimento Frontend.

---

## 👥 Integrantes da Dupla & Divisão de Commits
Para cumprir a **Regra de Ouro do Git**, o desenvolvimento dos componentes e páginas foi distribuído de forma justa, contendo commits individuais específicos mapeados no histórico do repositório:

* **Integrante 1 (Bruno Machado):** 
* **Integrante 2 (Kauã victor):**

---
## Instalar as dependências obrigatórias ## 
npm i
npm i react-router-dom
npm run dev

## 📂 Estrutura Arquitetural do Projeto (Conforme Exigido)

O projeto segue estritamente a padronização de pastas solicitada no escopo da atividade dentro do diretório `/src`:

```text
src/
├── assets/
│   └── components/       # Armazenamento de estilos globais e imagens
├── components/           # Componentes fixos e reutilizáveis do layout
│   ├── header/           # Menu superior de navegação com links dinâmicos
│   │   └── index.jsx
│   └── footer/           # Rodapé institucional com assinatura acadêmica
│       └── index.jsx
└── pages/                # Escopo completo das 6 páginas obrigatórias
    ├── home/             # Boas-vindas, banner Hero e diferenciais (Dr. Bruno & Dr. Kauá)
    │   └── index.jsx
    ├── quemSomos/        # História, pilares morais, missão, visão e valores
    │   └── index.jsx
    ├── servicos/         # Lista de atendimentos, consultas e exames oferecidos
    │   └── index.jsx
    ├── corpoClinico/     # Grade de médicos com filtros funcionais por especialidade
    │   └── index.jsx
    ├── contatos/         # Canais de atendimento e formulário estruturado de envio
    │   └── index.jsx
    └── blog/             # Portal de notícias e artigos sobre saúde integrativa
        └── index.jsx
