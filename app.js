// Estado do Sistema
let stickerCounts = {}; // id_figurinha -> quantidade (0, 1, 2, ...)
let filteredStickers = [];
let currentIndex = 0;
const renderChunkSize = 80;
let activeFilters = {
  search: "",
  group: "all",
  country: "all",
  status: "all" // all, owned, missing, repeated
};
let currentSort = "num-asc";

// Seletores DOM
const albumGrid = document.getElementById("album-grid");
const searchInput = document.getElementById("search-input");
const statusFilter = document.getElementById("status-filter");
const sortOrder = document.getElementById("sort-order");
const groupFilterContainer = document.getElementById("group-filter-buttons");
const countryFilterContainer = document.getElementById("country-filter-buttons");
const scrollToTopBtn = document.getElementById("scroll-to-top");

// Seletores do Modal
const stickerModal = document.getElementById("sticker-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalStickerCode = document.getElementById("modal-sticker-code");
const modalStickerName = document.getElementById("modal-sticker-name");
const modalStickerFlag = document.getElementById("modal-sticker-flag");
const modalStickerCountry = document.getElementById("modal-sticker-country");
const modalPosVal = document.getElementById("modal-pos-val");
const modalGroupVal = document.getElementById("modal-group-val");
const btnCountMinus = document.getElementById("btn-count-minus");
const btnCountPlus = document.getElementById("btn-count-plus");
const stickerCountValue = document.getElementById("sticker-count-value");
const counterStatusLbl = document.getElementById("counter-status-lbl");

// Variável para armazenar qual figurinha está ativa no modal
let activeModalStickerId = null;

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  // Carregar dados do localStorage
  const saved = localStorage.getItem("panini_wc2026_sticker_counts");
  if (saved) {
    try {
      stickerCounts = JSON.parse(saved);
    } catch (e) {
      console.error("Erro ao ler localStorage:", e);
      stickerCounts = {};
    }
  }

  // Gerar botões de seleção (países)
  generateCountryFilterButtons();

  // Inicializar Dashboard
  updateDashboard();

  // Filtrar e Renderizar Figurinhas
  applyFiltersAndSort();

  // Configurar Event Listeners
  setupEventListeners();

  // Criar ícones
  lucide.createIcons();
});

// Gerar botões de seleção de país com suas respectivas bandeiras
function generateCountryFilterButtons() {
  const fragment = document.createDocumentFragment();
  
  // Agrupar times por ordem de grupo
  Object.keys(albumGroups).forEach(groupName => {
    const teams = albumGroups[groupName];
    teams.forEach(team => {
      const btn = document.createElement("button");
      btn.className = "filter-btn";
      btn.dataset.country = team.code;
      
      const flagUrl = `https://flagcdn.com/16x12/${team.flag}.png`;
      btn.innerHTML = `
        <img class="flag-img" src="${flagUrl}" alt="${team.name}">
        <span>${team.name}</span>
      `;
      fragment.appendChild(btn);
    });
  });
  
  countryFilterContainer.appendChild(fragment);
}

// Configurar todos os Event Listeners da página
function setupEventListeners() {
  // Busca por texto
  searchInput.addEventListener("input", (e) => {
    activeFilters.search = e.target.value.toLowerCase().trim();
    applyFiltersAndSort();
  });

  // Filtro de Status
  statusFilter.addEventListener("change", (e) => {
    activeFilters.status = e.target.value;
    applyFiltersAndSort();
  });

  // Ordenação
  sortOrder.addEventListener("change", (e) => {
    currentSort = e.target.value;
    applyFiltersAndSort();
  });

  // Filtro por Grupo
  groupFilterContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    
    document.querySelectorAll("#group-filter-buttons .filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    activeFilters.group = btn.dataset.group;
    
    // Se escolheu um grupo específico, resetar o filtro de país para evitar conflitos
    activeFilters.country = "all";
    document.querySelectorAll("#country-filter-buttons .filter-btn").forEach(b => {
      b.classList.remove("active");
      if (b.dataset.country === "all") b.classList.add("active");
    });

    applyFiltersAndSort();
  });

  // Filtro por País/Seleção
  countryFilterContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    
    document.querySelectorAll("#country-filter-buttons .filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    activeFilters.country = btn.dataset.country;

    // Se filtrou por país, resetar o filtro de grupo para "Todos" para não conflitar
    activeFilters.group = "all";
    document.querySelectorAll("#group-filter-buttons .filter-btn").forEach(b => {
      b.classList.remove("active");
      if (b.dataset.group === "all") b.classList.add("active");
    });

    applyFiltersAndSort();
  });

  // Eventos do Modal
  modalCloseBtn.addEventListener("click", closeModal);
  stickerModal.addEventListener("click", (e) => {
    if (e.target === stickerModal) closeModal();
  });

  // Botões de incremento/decremento no Modal
  btnCountMinus.addEventListener("click", () => adjustStickerCount(-1));
  btnCountPlus.addEventListener("click", () => adjustStickerCount(1));

  // Scroll Infinito & Botão de Voltar ao Topo
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }

    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 300) {
      renderMoreStickers();
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Fechar modal com o ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && stickerModal.classList.contains("active")) {
      closeModal();
    }
  });
}

// Calcular e atualizar os dados do Dashboard
function updateDashboard() {
  const totalStickersCount = albumStickers.length; // 940
  let coladas = 0;
  let totalRepetidas = 0;

  albumStickers.forEach(s => {
    const count = stickerCounts[s.id] || 0;
    if (count >= 1) {
      coladas++;
      if (count > 1) {
        totalRepetidas += (count - 1);
      }
    }
  });

  const faltando = totalStickersCount - coladas;
  const progressPercent = totalStickersCount > 0 ? Math.round((coladas / totalStickersCount) * 100) : 0;

  // 1. Atualizar textos
  document.getElementById("lbl-coladas").textContent = `${coladas} / ${totalStickersCount}`;
  document.getElementById("lbl-faltando").textContent = faltando;
  document.getElementById("lbl-repetidas").textContent = totalRepetidas;

  document.getElementById("stat-total-acquired").textContent = coladas;
  document.getElementById("stat-total-repeated").textContent = totalRepetidas;

  // 2. Círculo de progresso
  const circle = document.getElementById("album-progress-circle");
  document.getElementById("album-progress-text").textContent = `${progressPercent}%`;
  const offset = 314.16 - (314.16 * progressPercent) / 100;
  circle.style.strokeDashoffset = offset;

  // 3. Progresso por Grupo
  const groupsContainer = document.getElementById("groups-progress-list");
  groupsContainer.innerHTML = "";

  // Agrupar dados
  const groupTotal = {};
  const groupOwned = {};

  albumStickers.forEach(s => {
    const grp = s.group;
    if (!groupTotal[grp]) {
      groupTotal[grp] = 0;
      groupOwned[grp] = 0;
    }
    groupTotal[grp]++;
    if ((stickerCounts[s.id] || 0) >= 1) {
      groupOwned[grp]++;
    }
  });

  // Renderizar cada linha de grupo ordenadamente
  const orderOfGroups = [
    "Especiais", "Grupo A", "Grupo B", "Grupo C", "Grupo D", "Grupo E", 
    "Grupo F", "Grupo G", "Grupo H", "Grupo I", "Grupo J", "Grupo K", 
    "Grupo L", "Lendas"
  ];

  orderOfGroups.forEach(grpName => {
    if (!groupTotal[grpName]) return;
    
    const total = groupTotal[grpName];
    const owned = groupOwned[grpName];
    const percent = Math.round((owned / total) * 100);

    const row = document.createElement("div");
    row.className = "group-row";
    row.innerHTML = `
      <div class="group-header">
        <span>${grpName === "Especiais" ? "FIFA / Estádios" : grpName}</span>
        <span>${owned}/${total} (${percent}%)</span>
      </div>
      <div class="group-bar-bg">
        <div class="group-bar-fill" style="width: ${percent}%"></div>
      </div>
    `;
    groupsContainer.appendChild(row);
  });
}

// Aplicar filtros e ordenação na base de dados
function applyFiltersAndSort() {
  filteredStickers = albumStickers.filter(s => {
    // 1. Busca por Texto (Nome, código ou ID)
    const matchesSearch = s.name.toLowerCase().includes(activeFilters.search) || 
                          s.id.toLowerCase().includes(activeFilters.search);
    
    // 2. Filtro de Grupo
    const matchesGroup = activeFilters.group === "all" || s.group === activeFilters.group;
    
    // 3. Filtro de Seleção
    const matchesCountry = activeFilters.country === "all" || s.code === activeFilters.country;
    
    // 4. Filtro de Status
    const count = stickerCounts[s.id] || 0;
    let matchesStatus = true;
    if (activeFilters.status === "owned") {
      matchesStatus = count >= 1;
    } else if (activeFilters.status === "missing") {
      matchesStatus = count === 0;
    } else if (activeFilters.status === "repeated") {
      matchesStatus = count > 1;
    }

    return matchesSearch && matchesGroup && matchesCountry && matchesStatus;
  });

  // Ordenação
  if (currentSort === "num-asc") {
    // Ordenar pelo ID na sequência do álbum (FWC primeiro, depois grupos, depois lendas)
    // Como a lista original 'albumStickers' já vem na ordem certa, podemos apenas ordenar pelo índice original
    const originalOrder = {};
    albumStickers.forEach((s, idx) => { originalOrder[s.id] = idx; });
    filteredStickers.sort((a, b) => originalOrder[a.id] - originalOrder[b.id]);
  } else if (currentSort === "num-desc") {
    const originalOrder = {};
    albumStickers.forEach((s, idx) => { originalOrder[s.id] = idx; });
    filteredStickers.sort((a, b) => originalOrder[b.id] - originalOrder[a.id]);
  } else if (currentSort === "name-asc") {
    filteredStickers.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentSort === "name-desc") {
    filteredStickers.sort((a, b) => b.name.localeCompare(a.name));
  }

  // Resetar visualização
  albumGrid.innerHTML = "";
  currentIndex = 0;

  if (filteredStickers.length === 0) {
    albumGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <h3>Nenhuma figurinha encontrada</h3>
        <p>Tente ajustar os filtros ou a busca.</p>
      </div>
    `;
  } else {
    renderMoreStickers();
  }
}

// Renderizar fatias de figurinhas (Scroll Infinito)
function renderMoreStickers() {
  if (currentIndex >= filteredStickers.length) return;

  const fragment = document.createDocumentFragment();
  const nextSlice = filteredStickers.slice(currentIndex, currentIndex + renderChunkSize);

  nextSlice.forEach(s => {
    const count = stickerCounts[s.id] || 0;
    const isOwned = count >= 1;
    const isShiny = s.position === "Escudo" || s.position === "Lenda" || s.id.startsWith("FWC-0") || s.id.startsWith("FWC-1") || s.id.startsWith("FWC-2");

    const card = document.createElement("div");
    card.className = `sticker-card ${isOwned ? 'owned' : ''} ${isShiny ? 'shiny' : ''}`;
    card.dataset.id = s.id;

    // Badge de repetida (se tiver > 1)
    const repeatedBadgeHtml = count > 1 ? `<span class="repeated-badge">x${count}</span>` : "";

    // Bandeira (FIFA ou Seleção)
    let flagHtml = "";
    if (s.flag !== "un") {
      const flagUrl = `https://flagcdn.com/16x12/${s.flag}.png`;
      flagHtml = `<img class="sticker-flag-mini" src="${flagUrl}" alt="${s.country_name}">`;
    } else {
      flagHtml = `<span style="font-size: 0.75rem;">🌐</span>`;
    }

    // Código formatado (ex: BRA 14)
    const codeDisplay = `${s.code} ${s.number}`;

    // Ícone da silhueta ou símbolo especial
    let bodyIcon = "";
    if (s.position === "Escudo") {
      bodyIcon = `<span class="sticker-special-icon">🛡️</span>`;
    } else if (s.position === "Especial") {
      bodyIcon = `<span class="sticker-special-icon">⭐</span>`;
    } else if (s.position === "Lenda") {
      bodyIcon = `<span class="sticker-special-icon">🏆</span>`;
    } else {
      bodyIcon = `<i data-lucide="user" class="sticker-silhouette"></i>`;
    }

    card.innerHTML = `
      ${repeatedBadgeHtml}
      <div class="sticker-header">
        <span class="sticker-code-num">${codeDisplay}</span>
        ${flagHtml}
      </div>
      <div class="sticker-body">
        ${bodyIcon}
      </div>
      <div class="sticker-footer">
        <span class="sticker-name">${s.name}</span>
        <span class="sticker-position">${s.position === "Especial" ? "Fifa" : s.position}</span>
      </div>
    `;

    // Click handler principal: clique rápido alterna entre ter e não ter (0 ou 1 cópia)
    card.addEventListener("click", (e) => {
      // Se clicou no corpo, alternamos de forma rápida
      toggleQuickSticker(s.id);
    });

    // Evento de duplo clique para abrir o painel de gerenciamento completo (repetidas)
    card.addEventListener("dblclick", (e) => {
      e.stopPropagation();
      openModal(s);
    });

    // Suporte a mobile: também adicionamos um pequeno evento se manter pressionado ou dar duplo toque,
    // mas para simplificar, se clicar rápido alterna e se der duplo clique abre o modal.
    // Vamos adicionar um pequeno botão "..." ou simplesmente dizer no rodapé para dar duplo clique.
    // O duplo clique funciona tanto no PC quanto na maioria dos celulares modernos!
    
    fragment.appendChild(card);
  });

  albumGrid.appendChild(fragment);
  
  // Re-injetar ícones Lucide apenas nos novos cards
  lucide.createIcons();
  
  currentIndex += renderChunkSize;
}

// Alternar status de forma rápida (clique simples: 0 <-> 1 cópia)
function toggleQuickSticker(stickerId) {
  const currentCount = stickerCounts[stickerId] || 0;
  
  if (currentCount >= 1) {
    // Desmarcar completamente (vai para 0)
    stickerCounts[stickerId] = 0;
  } else {
    // Adicionar 1 cópia
    stickerCounts[stickerId] = 1;
  }

  // Salvar no localStorage
  localStorage.setItem("panini_wc2026_sticker_counts", JSON.stringify(stickerCounts));

  // Atualizar visual do card e dashboard
  updateCardVisual(stickerId);
  updateDashboard();
}

// Atualizar apenas o visual de um card específico para alta performance
function updateCardVisual(stickerId) {
  const card = albumGrid.querySelector(`.sticker-card[data-id="${stickerId}"]`);
  if (!card) return;

  const count = stickerCounts[stickerId] || 0;
  const isOwned = count >= 1;

  // Atualizar classes
  if (isOwned) {
    card.classList.add("owned");
  } else {
    card.classList.remove("owned");
  }

  // Atualizar badge de repetidas
  let badge = card.querySelector(".repeated-badge");
  if (count > 1) {
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "repeated-badge";
      card.appendChild(badge);
    }
    badge.textContent = `x${count}`;
  } else {
    if (badge) badge.remove();
  }
}

// Abrir Modal de Detalhes (para gerenciar quantidades e repetidas)
function openModal(sticker) {
  activeModalStickerId = sticker.id;
  
  const count = stickerCounts[sticker.id] || 0;
  
  modalStickerCode.textContent = `${sticker.code} ${sticker.number}`;
  modalStickerName.textContent = sticker.name;
  modalStickerCountry.textContent = sticker.country_name;
  modalPosVal.textContent = sticker.position;
  modalGroupVal.textContent = sticker.group === "Especiais" ? "Fifa / Estádios" : sticker.group;

  if (sticker.flag !== "un") {
    modalStickerFlag.src = `https://flagcdn.com/24x18/${sticker.flag}.png`;
    modalStickerFlag.style.display = "";
  } else {
    modalStickerFlag.style.display = "none";
  }

  // Atualizar quantidade na tela
  stickerCountValue.textContent = count;
  updateModalLabel(count);

  // Exibir
  stickerModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Fechar Modal
function closeModal() {
  stickerModal.classList.remove("active");
  document.body.style.overflow = "";
  activeModalStickerId = null;
}

// Ajustar contagem do modal (+1 ou -1)
function adjustStickerCount(amount) {
  if (!activeModalStickerId) return;

  let currentCount = stickerCounts[activeModalStickerId] || 0;
  let newCount = currentCount + amount;

  if (newCount < 0) newCount = 0;
  if (newCount > 99) newCount = 99; // limite de bom senso

  stickerCounts[activeModalStickerId] = newCount;
  stickerCountValue.textContent = newCount;

  updateModalLabel(newCount);

  // Salvar
  localStorage.setItem("panini_wc2026_sticker_counts", JSON.stringify(stickerCounts));

  // Atualizar grid principal e dashboard
  updateCardVisual(activeModalStickerId);
  updateDashboard();
}

// Atualizar o rótulo descritivo no Modal (ex: "Não possui", "Colada", "1 repetida")
function updateModalLabel(count) {
  if (count === 0) {
    counterStatusLbl.textContent = "Não possui esta figurinha";
    counterStatusLbl.style.color = "var(--text-muted)";
  } else if (count === 1) {
    counterStatusLbl.textContent = "Figurinha colada no álbum!";
    counterStatusLbl.style.color = "var(--wc-green)";
  } else {
    const reps = count - 1;
    counterStatusLbl.textContent = `Colada + ${reps} ${reps === 1 ? 'repetida' : 'repetidas'} para trocar!`;
    counterStatusLbl.style.color = "var(--wc-blue)";
  }
}
