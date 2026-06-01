// =============================================
// ELYSIUM — CYBERPUNK MINECRAFT REALM
// Interactive JavaScript
// =============================================

const districts = [
  {
    id: 0,
    sector: "SECTOR-01",
    name: "AURELIAN",
    color: "#c026ff",
    tag: "POLITICAL HEART",
    description: "The political heart of Elysium. Home to the Council chambers, policy halls, and the most influential figures in the realm. Decisions made here shape the entire city.",
    lore: "Aurelian is where power is negotiated in back rooms and public forums alike. Known for its strict security, surveillance networks, and layers of bureaucracy. Many say the real deals happen in the marble sub-levels.",
    population: "2,180",
    value: "6.9M",
    crime: "LOW",
    coords: "X: 412 Z: -89"
  },
  {
    id: 1,
    sector: "SECTOR-02",
    name: "BRASSFORGE",
    color: "#ffaa00",
    tag: "INDUSTRY & MANUFACTURING",
    description: "The industrial powerhouse of Elysium. Massive factories, redstone forges, automated assembly lines, and heavy machinery dominate this district.",
    lore: "The air here is thick with the smell of smelting and machine oil. BrassForge supplies building materials, redstone components, and weapons to the rest of the realm. Many of the city's most impressive builds started here.",
    population: "3,410",
    value: "2.8M",
    crime: "MEDIUM",
    coords: "X: -184 Z: 621"
  },
  {
    id: 2,
    sector: "SECTOR-03",
    name: "TIDEWARD",
    color: "#00f3ff",
    tag: "HARBOR & TRADE",
    description: "Elysium's booming port district. Ships, barges, and trade routes converge here. A dense, lively waterfront city full of merchants, smugglers, and opportunity.",
    lore: "Tideward is the gateway to the rest of the realm and beyond. Massive harbors, floating markets, and warehouse districts stretch along the water. The economy here never stops moving.",
    population: "4,920",
    value: "3.4M",
    crime: "MEDIUM",
    coords: "X: 892 Z: 340"
  },
  {
    id: 3,
    sector: "SECTOR-04",
    name: "VERDANCE",
    color: "#39ff14",
    tag: "AGRICULTURE",
    description: "The agricultural backbone of Elysium. Vast hydroponic farms, vertical crop towers, and carefully managed biomes keep the city fed.",
    lore: "Verdance uses advanced redstone automation and magical light sources to grow food year-round. The district is surprisingly beautiful — glowing fields under glass domes are a common sight.",
    population: "1,670",
    value: "1.9M",
    crime: "VERY LOW",
    coords: "X: -721 Z: -455"
  },
  {
    id: 4,
    sector: "SECTOR-05",
    name: "GREYHAVEN",
    color: "#708090",
    tag: "WORKING CLASS & COMMERCE",
    description: "The dense working-class heart of Elysium. Filled with apartments, small businesses, markets, and the everyday life of most citizens.",
    lore: "Greyhaven is where the real people live and work. Narrow streets packed with shops, street food, repair workshops, and family-run businesses. It's loud, chaotic, and full of character.",
    population: "8,340",
    value: "1.2M",
    crime: "MEDIUM",
    coords: "X: 156 Z: 218"
  },
  {
    id: 5,
    sector: "SECTOR-06",
    name: "HIGH SPIRE",
    color: "#ff00aa",
    tag: "CORPORATE & FINANCE",
    description: "The gleaming financial district. Towering skyscrapers house banks, megacorporations, investment firms, and the wealthiest residents in the realm.",
    lore: "Highspire is all glass, neon, and power. The tallest buildings in Elysium pierce the clouds here. Deals worth millions of diamonds happen daily in the boardrooms of these towers.",
    population: "1,890",
    value: "11.4M",
    crime: "LOW",
    coords: "X: 298 Z: -612"
  },
  {
    id: 6,
    sector: "SECTOR-07",
    name: "BLACKREACH",
    color: "#aa00ff",
    tag: "OLD UNDERCITY",
    description: "The decaying underbelly of Elysium. An old, underground city with aging infrastructure, crumbling buildings, and the poorest residents of the realm.",
    lore: "Blackreach is what remains of the original settlement before the megacity grew above it. Many areas are unsafe or abandoned. It's a place of desperation, resilience, and hidden secrets.",
    population: "5,780",
    value: "480K",
    crime: "HIGH",
    coords: "X: -312 Z: 847"
  }
];

// District Modal
function showDistrictModal(index) {
  const district = districts[index];
  const modal = document.getElementById('district-modal');
  const header = document.getElementById('modal-header');
  const body = document.getElementById('modal-body');
  
  header.innerHTML = `
    <div class="flex items-center gap-3">
      <div class="w-4 h-4 rounded" style="background: ${district.color}"></div>
      <div>
        <div class="text-xs tracking-[3px]" style="color: ${district.color}">${district.sector} • ${district.tag}</div>
        <div class="text-4xl font-bold tracking-[-1.5px] text-white">${district.name}</div>
      </div>
    </div>
  `;
  
  body.innerHTML = `
    <p class="text-base">${district.description}</p>
    <p class="text-sm border-l-2 pl-4" style="border-color: ${district.color}33; color: #b0b0d0">
      ${district.lore}
    </p>
    <div class="grid grid-cols-2 gap-4 pt-2 text-xs">
      <div>
        <span class="text-[#606080]">PRIMARY BUILD MATERIAL</span><br>
        <span class="text-white font-medium">${index === 0 ? 'BLACK CONCRETE + GLASS' : 
                                               index === 1 ? 'GLOWSTONE + SEA LANTERNS' : 
                                               index === 2 ? 'DEEPSLATE + REDSTONE' : 
                                               index === 3 ? 'QUARTZ + SCAFFOLDING' : 
                                               index === 4 ? 'PURPUR + AMETHYST' : 'POLISHED BLACKSTONE'}</span>
      </div>
      <div>
        <span class="text-[#606080]">NOTABLE FEATURE</span><br>
        <span class="text-white font-medium">${index === 0 ? 'REDSTONE STOCK EXCHANGE' : 
                                               index === 1 ? 'THE PULSE NIGHTCLUB' : 
                                               index === 2 ? 'SECRET NETHER PORTALS' : 
                                               index === 3 ? 'THE DEATH LOOP' : 
                                               index === 4 ? 'PRIVATE GARDENS' : 'TOURNAMENT COLISEUM'}</span>
      </div>
    </div>
  `;
  
  document.getElementById('modal-pop').textContent = district.population;
  document.getElementById('modal-value').textContent = district.value;
  document.getElementById('modal-crime').innerHTML = `<span style="color: ${district.color}">${district.crime}</span>`;
  
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function hideDistrictModal() {
  const modal = document.getElementById('district-modal');
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}

// Connect Modal
function showConnectModal() {
  const modal = document.getElementById('connect-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function hideConnectModal() {
  const modal = document.getElementById('connect-modal');
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}

function submitConnectForm(e) {
  e.preventDefault();
  
  const username = document.getElementById('mc-username').value;
  const modal = document.getElementById('connect-modal');
  
  modal.innerHTML = `
    <div class="max-w-md w-full border border-[#39ff14]/40 bg-[#050508] p-10 text-center">
      <div class="text-[#39ff14] text-4xl mb-4">✓</div>
      <div class="font-['Orbitron'] text-2xl tracking-tight mb-2">APPLICATION RECEIVED</div>
      <div class="text-sm text-[#39ff14]/70 mb-6">Thank you, ${username.toUpperCase()}.<br>Your request has been logged in the system.</div>
      
      <div class="text-xs text-left bg-black/50 p-4 font-mono border border-white/10 text-[#39ff14]/80">
        REFERENCE ID: ELY-${Math.random().toString(36).substring(2, 10).toUpperCase()}<br>
        STATUS: PENDING COUNCIL REVIEW<br>
        EST. RESPONSE: 6-48 HOURS
      </div>
      
      <button onclick="location.reload()" 
              class="mt-6 text-xs tracking-[2px] px-8 py-3 border border-[#39ff14]/60 text-[#39ff14] hover:bg-[#39ff14] hover:text-black transition-colors">
        RETURN TO THE GRID
      </button>
    </div>
  `;
  
  // In a real scenario this would POST to a backend
  console.log('%c[Elysium] Application submitted for ' + username, 'color:#39ff14');
}

// ========== HOLOGRAPHIC MAP (Canvas) ==========
function initHoloMap() {
  const canvas = document.getElementById('holo-map');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d', { alpha: true });
  let width, height;
  
  function resize() {
    const container = canvas.parentElement;
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    width = canvas.width;
    height = canvas.height;
  }
  
  window.addEventListener('resize', resize);
  resize();
  
  // Node data for the map - 7 districts + central hub
  const nodes = [
    { x: 0.50, y: 0.28, label: "AURELIAN", type: "aurelian", size: 7.5 },   // Political center (top)
    { x: 0.22, y: 0.48, label: "BRASSFORGE", type: "brass", size: 7 },     // Industry (left)
    { x: 0.78, y: 0.52, label: "TIDEWARD", type: "tide", size: 7 },        // Harbor (right)
    { x: 0.18, y: 0.78, label: "VERDANCE", type: "verdance", size: 6 },    // Agriculture (bottom left)
    { x: 0.48, y: 0.72, label: "GREYHAVEN", type: "grey", size: 8 },       // Working class (bottom center)
    { x: 0.75, y: 0.25, label: "HIGH SPIRE", type: "highspire", size: 6.5 }, // Corporate (top right)
    { x: 0.32, y: 0.18, label: "BLACKREACH", type: "blackreach", size: 6 }, // Undercity (top left-ish)
    // Central transport hub
    { x: 0.49, y: 0.51, label: "", type: "hub", size: 4 },
  ];
  
  const connections = [
    [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6],
    [0, 5], [1, 3], [2, 5], [4, 3]
  ];
  
  let time = 0;
  let mouseX = 0.5;
  let mouseY = 0.5;
  
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = (e.clientX - rect.left) / rect.width;
    mouseY = (e.clientY - rect.top) / rect.height;
  });
  
  function draw() {
    ctx.clearRect(0, 0, width, height);
    
    // Background subtle grid
    ctx.strokeStyle = 'rgba(0, 243, 255, 0.06)';
    ctx.lineWidth = 1;
    const gridSize = 28;
    for (let x = gridSize; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = gridSize; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    
    // Draw connections
    ctx.strokeStyle = 'rgba(0, 243, 255, 0.25)';
    ctx.lineWidth = 1.5;
    
    connections.forEach(([a, b]) => {
      const nx1 = nodes[a].x * width;
      const ny1 = nodes[a].y * height;
      const nx2 = nodes[b].x * width;
      const ny2 = nodes[b].y * height;
      
      ctx.beginPath();
      ctx.moveTo(nx1, ny1);
      ctx.lineTo(nx2, ny2);
      ctx.stroke();
      
      // Data pulse along line
      const progress = (Math.sin(time * 1.6) * 0.5 + 0.5);
      const px = nx1 + (nx2 - nx1) * progress;
      const py = ny1 + (ny2 - ny1) * progress;
      
      ctx.fillStyle = '#00f3ff';
      ctx.beginPath();
      ctx.arc(px, py, 2, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Draw nodes
    nodes.forEach((node, i) => {
      const nx = node.x * width;
      const ny = node.y * height;
      
      const isHub = node.type === 'hub';
      const distToMouse = Math.hypot(node.x - mouseX, node.y - mouseY);
      const glow = Math.max(0.4, 1 - distToMouse * 2.5);
      
      // Glow
      if (!isHub) {
        ctx.shadowColor = getNodeColor(node.type);
        ctx.shadowBlur = 14 * glow;
      }
      
      ctx.fillStyle = isHub ? '#334455' : getNodeColor(node.type);
      ctx.beginPath();
      ctx.arc(nx, ny, node.size * (isHub ? 0.8 : 1), 0, Math.PI * 2);
      ctx.fill();
      
      ctx.shadowBlur = 0;
      
      // Label
      if (node.label) {
        ctx.fillStyle = 'rgba(200, 210, 255, 0.85)';
        ctx.font = '500 11px Rajdhani, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, nx, ny + node.size + 15);
      }
      
      // Pulsing ring on main nodes
      if (!isHub) {
        const ringSize = node.size + 6 + Math.sin(time * 2 + i) * 2;
        ctx.strokeStyle = getNodeColor(node.type) + '55';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(nx, ny, ringSize, 0, Math.PI * 2);
        ctx.stroke();
      }
    });
    
    // Occasional scanline sweep across the map
    const sweep = (time * 0.6) % 1.8;
    if (sweep < 1.1) {
      ctx.fillStyle = 'rgba(0, 243, 255, 0.06)';
      ctx.fillRect(0, sweep * height * 0.9, width, 3);
    }
    
    time += 0.016;
    requestAnimationFrame(draw);
  }
  
  function getNodeColor(type) {
    switch(type) {
      case 'aurelian': return '#c026ff';
      case 'brass': return '#ffaa00';
      case 'tide': return '#00f3ff';
      case 'verdance': return '#39ff14';
      case 'grey': return '#708090';
      case 'highspire': return '#ff00aa';
      case 'blackreach': return '#aa00ff';
      default: return '#334455';
    }
  }
  
  // Click interaction on nodes
  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const clickX = (e.clientX - rect.left) / rect.width;
    const clickY = (e.clientY - rect.top) / rect.height;
    
    nodes.forEach((node, index) => {
      const dist = Math.hypot(node.x - clickX, node.y - clickY);
      if (dist < 0.08 && node.label) {
        // Find matching district and open modal
        const districtIndex = districts.findIndex(d => 
          d.name.toLowerCase().includes(node.label.toLowerCase().replace(" ", ""))
        );
        if (districtIndex !== -1) {
          showDistrictModal(districtIndex);
        }
      }
    });
  });
  
  draw();
}

// Article modal functions (shared with homepage teaser)
function showArticleModal(id) {
  if (typeof articles === 'undefined') return;
  const article = articles.find(a => a.id === id);
  if (!article) return;

  let modal = document.getElementById('article-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'article-modal';
    modal.className = 'hidden fixed inset-0 z-[110] bg-black/90 flex items-center justify-center p-4';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div onclick="event.stopImmediatePropagation()" 
         class="max-w-2xl w-full border border-white/20 bg-[#0a0a0f] p-8 text-sm relative">
      <button onclick="hideArticleModal()" class="absolute top-4 right-4 text-[#606080] hover:text-white text-2xl leading-none">&times;</button>
      
      <div class="flex items-center gap-3 mb-2">
        <span class="text-xs tracking-widest px-3 py-0.5 border border-white/20">${article.date}</span>
        <span class="text-xs tracking-widest px-3 py-0.5 bg-white/5">${article.district}</span>
      </div>
      
      <h2 class="font-['Orbitron'] text-3xl font-bold tracking-[-1px] mb-6 pr-8">${article.title}</h2>
      
      <div class="prose prose-invert text-[#b0b0d0] max-w-none leading-relaxed">
        <p>${article.body}</p>
      </div>
      
      <div class="mt-8 pt-6 border-t border-white/10 text-xs text-[#606080]">
        SOURCE: THE ELYSIUM HERALD — CLASSIFIED ARCHIVE
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  modal.onclick = () => hideArticleModal();
}

function hideArticleModal() {
  const modal = document.getElementById('article-modal');
  if (modal) {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
  }
}

// Keyboard shortcuts
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'escape') {
      const districtModal = document.getElementById('district-modal');
      const connectModal = document.getElementById('connect-modal');
      
      if (!districtModal.classList.contains('hidden')) {
        hideDistrictModal();
      } else if (!connectModal.classList.contains('hidden')) {
        hideConnectModal();
      }
    }
    
    if (e.key === '?' && document.activeElement.tagName === 'BODY') {
      e.preventDefault();
      const grid = document.getElementById('the-grid');
      grid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
  
  // Easter egg: press "N" for night mode toggle (already dark, so just flash)
  let flashTimeout;
  document.addEventListener('keypress', (e) => {
    if (e.key.toLowerCase() === 'n') {
      document.body.style.transition = 'filter 120ms';
      document.body.style.filter = 'brightness(0.4) saturate(1.6)';
      clearTimeout(flashTimeout);
      flashTimeout = setTimeout(() => {
        document.body.style.filter = '';
      }, 180);
    }
  });
}

// Boot sequence
function bootElysium() {
  // Initialize holographic map
  initHoloMap();
  
  // Render the Herald press articles
  renderHeraldArticles();
  
  // Keyboard controls
  initKeyboard();
  
  // Random occasional neon flicker on the main title
  setInterval(() => {
    const title = document.querySelector('.glitch');
    if (title && Math.random() > 0.6) {
      title.style.opacity = '0.6';
      setTimeout(() => {
        if (title) title.style.opacity = '1';
      }, 60);
    }
  }, 4200);
  
  // Console welcome message
  console.log('%c[ELYSIUM] Cyberpunk city website initialized. Welcome, citizen.', 'color:#00f3ff; font-family:monospace');
  console.log('%c[ELYSIUM] Press "?" while focused on the page to jump to the Grid.', 'color:#505070; font-family:monospace');
  
  // Optional: subtle random glitch on one of the district cards every 15s
  setInterval(() => {
    const cards = document.querySelectorAll('.district-card');
    if (cards.length > 0) {
      const randomCard = cards[Math.floor(Math.random() * cards.length)];
      randomCard.style.boxShadow = '0 0 0 1px #ff00aa, 0 0 25px -5px #ff00aa';
      setTimeout(() => {
        if (randomCard) randomCard.style.boxShadow = '';
      }, 420);
    }
  }, 15000);
}

// Start everything when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootElysium);
} else {
  bootElysium();
}