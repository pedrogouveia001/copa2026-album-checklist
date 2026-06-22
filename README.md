# Álbum da Copa do Mundo Panini 2026 - Checklist & Controle

Uma aplicação web interativa (SPA) em Vanilla HTML, CSS e JavaScript feita sob medida para colecionadores do álbum oficial da Copa do Mundo de 2026 da Panini. Ajuda a gerenciar quais figurinhas você já colou, quais estão faltando e controlar suas figurinhas repetidas por seleção nacional ou grupo de seleções.

## 🚀 Recursos Principais

- **📊 Dashboard de Progresso Geral**:
  - Indicador circular de porcentagem de conclusão do álbum físico.
  - Painel numérico de figurinhas coladas, faltando e repetidas totais.
  - Progresso individual grupo a grupo (Grupo A ao L) para facilitar o acompanhamento por seções físicas do álbum.
- **🗺️ Filtros por Seleções e Grupos**:
  - Seleção por botões dinâmicos com as **bandeiras oficiais das 48 seleções** participantes (via FlagCDN).
  - Filtro rápido por grupos da Copa (A ao L).
  - Busca direta por nome do jogador (ex: "Messi", "Neymar") ou código da figurinha (ex: "BRA-10", "FWC-0").
  - Filtro de status (Todas, Apenas Coladas, Faltando, Repetidas).
- **⚡ Sistema de Interação Rápida**:
  - **Clique Simples**: Marca/desmarca a figurinha como colada no álbum físico (com borda verde e badge de verificado).
  - **Duplo Clique**: Abre um modal de controle de repetidas, permitindo aumentar ou diminuir a quantidade exata de cópias adicionais que você tem daquela figurinha.
- **✨ Efeito Holográfico nos Especiais**:
  - Figurinhas especiais e brilhantes (escudos das seleções, estádios, lendas e mascotes) contam com um efeito de gradiente brilhante metalizado para diferenciá-las visualmente no grid.
- **💾 Persistência dos Dados**:
  - Todos os dados da sua coleção são guardados diretamente no `localStorage` do seu navegador. O progresso é mantido mesmo se fechar a página.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da interface do SPA.
- **CSS3 (Vanilla)**: Layout responsivo, grade do grid de figurinhas e animações/efeitos de figurinhas holográficas.
- **JavaScript (ES6+)**: Controle de eventos, manipulação de DOM, localStorage e renderização de scroll infinito (carregamento sob demanda de 80 em 80 itens para excelente performance).
- **FlagCDN**: API gratuita para exibição das bandeiras nacionais em alta resolução.
- **Lucide Icons**: Pacote de ícones minimalistas.

## 📂 Estrutura do Projeto

```
copa2026-album-checklist/
├── index.html          # Interface principal do usuário
├── styles.css          # Design system, animações e responsividade
├── app.js              # Lógica de renderização de scroll, cliques e controle de colecionamento
├── albumData.js        # Banco de dados contendo as 940 figurinhas oficiais e as 48 seleções
└── scripts/
    └── generate_album.py # Script auxiliar em Python utilizado para compilar o banco de dados das figurinhas
```

## 💻 Como Executar

Não há necessidade de compilar ou instalar dependências.

1. Baixe ou clone o repositório.
2. Dê um duplo clique no arquivo `index.html` para abrir diretamente no navegador.
3. Se preferir subir um servidor local com Python:
   ```bash
   python -m http.server 8001
   ```
   Acesse `http://localhost:8001` no navegador.

---
*Organize suas figurinhas repetidas e complete o álbum da Copa do Mundo de 2026 com mais facilidade!*
