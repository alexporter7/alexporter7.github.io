// =============================================
// ELYSIUM DOCUMENTS PAGE
// =============================================

let currentFilter = 'all';

function renderAllArticles() {
    if (typeof articles === 'undefined') {
        console.error('Articles data not loaded');
        return;
    }

    // Separate into categories
    const government = articles.filter(a => a.category === 'government');
    const district = articles.filter(a => a.category === 'district');
    const newspaper = articles.filter(a => a.category === 'newspaper');

    // Render each category
    renderCategory('government-articles', government);
    renderCategory('district-articles', district);
    renderCategory('newspaper-articles', newspaper);
}

function renderCategory(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = items.map(article => `
        <div onclick="showArticleModal(${article.id})" 
             class="group cursor-pointer border border-white/10 bg-[#0a0a0f] p-5 hover:border-[#ff00aa] transition-all duration-300 flex flex-col">
            <div class="flex justify-between items-center text-[10px] text-[#606080] mb-2">
                <span>${article.date}</span>
                <span class="px-2 py-0.5 bg-white/5 group-hover:bg-[#ff00aa]/10 transition-colors">${article.district}</span>
            </div>
            <h4 class="font-bold text-lg leading-tight tracking-tight mb-3 group-hover:text-[#ff00aa] transition-colors">${article.title}</h4>
            <p class="text-sm text-[#9090b0] flex-grow">${article.excerpt}</p>
            <div class="text-[#ff00aa] text-xs mt-4 group-hover:underline">READ FULL DOCUMENT →</div>
        </div>
    `).join('');
}

function filterArticles(category) {
    currentFilter = category;

    // Update active tab styles
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active', 'border-[#ff00aa]', 'text-[#ff00aa]');
        btn.classList.add('border-white/20');
        
        if (category === 'all' && btn.dataset.filter === 'all') {
            btn.classList.add('active', 'border-[#ff00aa]', 'text-[#ff00aa]');
        } else if (btn.dataset.filter === category) {
            btn.classList.add('active', 'border-[#ff00aa]', 'text-[#ff00aa]');
        }
    });

    // Show/hide sections based on filter
    const govSection = document.getElementById('government-section');
    const distSection = document.getElementById('district-section');
    const newsSection = document.getElementById('newspaper-section');

    if (category === 'all') {
        govSection.style.display = '';
        distSection.style.display = '';
        newsSection.style.display = '';
    } else if (category === 'government') {
        govSection.style.display = '';
        distSection.style.display = 'none';
        newsSection.style.display = 'none';
    } else if (category === 'district') {
        govSection.style.display = 'none';
        distSection.style.display = '';
        newsSection.style.display = 'none';
    } else if (category === 'newspaper') {
        govSection.style.display = 'none';
        distSection.style.display = 'none';
        newsSection.style.display = '';
    }
}

function showArticleModal(id) {
    const article = articles.find(a => a.id === id);
    if (!article) return;

    const modal = document.getElementById('article-modal');
    
    modal.innerHTML = `
        <div onclick="event.stopImmediatePropagation()" 
             class="max-w-2xl w-full border border-white/20 bg-[#0a0a0f] p-8 text-sm relative">
            
            <button onclick="hideArticleModal()" class="absolute top-4 right-4 text-[#606080] hover:text-white text-2xl leading-none">&times;</button>
            
            <div class="flex items-center gap-3 mb-2">
                <span class="text-xs tracking-widest px-3 py-0.5 border border-white/20">${article.date}</span>
                <span class="text-xs tracking-widest px-3 py-0.5 bg-white/5">${article.district}</span>
                <span class="text-xs tracking-widest px-3 py-0.5" style="color: ${getCategoryColor(article.category)}; border: 1px solid ${getCategoryColor(article.category)}33;">
                    ${article.category.toUpperCase()}
                </span>
            </div>
            
            <h2 class="font-['Orbitron'] text-3xl font-bold tracking-[-1px] mb-6 pr-8">${article.title}</h2>
            
            <div class="prose prose-invert text-[#b0b0d0] max-w-none leading-relaxed text-[15px]">
                <p>${article.body}</p>
            </div>
            
            <div class="mt-8 pt-6 border-t border-white/10 text-xs text-[#606080]">
                SOURCE: ELYSIUM CITY ARCHIVES — ${article.category === 'newspaper' ? 'THE HERALD' : 'OFFICIAL RECORD'}
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function getCategoryColor(category) {
    if (category === 'government') return '#c026ff';
    if (category === 'district') return '#ffaa00';
    if (category === 'newspaper') return '#39ff14';
    return '#ffffff';
}

function hideArticleModal() {
    const modal = document.getElementById('article-modal');
    if (modal) {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
    }
}

// Keyboard support
function initDocumentsKeyboard() {
    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'escape') {
            const modal = document.getElementById('article-modal');
            if (modal && !modal.classList.contains('hidden')) {
                hideArticleModal();
            }
        }
    });
}

// Boot the documents page
function bootDocumentsPage() {
    renderAllArticles();
    initDocumentsKeyboard();

    // Set initial active tab
    const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
    if (allBtn) allBtn.classList.add('active', 'border-[#ff00aa]', 'text-[#ff00aa]');

    console.log('%c[ELYSIUM ARCHIVES] Documents page initialized.', 'color:#00f3ff');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootDocumentsPage);
} else {
    bootDocumentsPage();
}

// =============================================
// Real Lore Document Viewer (from extracted .md files)
// =============================================
async function showRealDocument(filename, title, source) {
  const modal = document.getElementById('article-modal');
  if (!modal) return;

  modal.innerHTML = `
    <div class="max-w-3xl w-full border border-white/20 bg-[#0a0a0f] p-8 relative max-h-[85vh] overflow-auto">
      <button onclick="hideArticleModal()" class="absolute top-4 right-4 text-[#606080] hover:text-white text-2xl leading-none">&times;</button>
      
      <div class="mb-4">
        <div class="text-xs text-[#ff00aa] tracking-widest">${source}</div>
        <h2 class="font-['Orbitron'] text-2xl font-bold tracking-[-0.5px] mt-1">${title}</h2>
      </div>

      <div id="document-content" class="prose prose-invert text-[#c0c0d0] text-sm leading-relaxed">
        Loading document...
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');

  try {
    const response = await fetch(`lore/${filename}`);
    if (!response.ok) throw new Error('File not found');
    
    let text = await response.text();
    
    // Simple markdown → HTML
    text = text
      .replace(/^### (.*$)/gim, '<h3 class="text-[#ffaa00] mt-6 mb-2">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-[#c026ff] mt-6 mb-2">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-xl mt-2 mb-4">$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n\n/g, '</p><p class="mb-3">');

    document.getElementById('document-content').innerHTML = `<p>${text}</p>`;
  } catch (err) {
    const isFileProtocol = window.location.protocol === 'file:';
    
    let errorHTML = `
      <p class="text-red-400 font-semibold">Failed to load document.</p>
      <p class="text-xs mt-2 text-[#808090]">Tried to fetch: <code>lore/${filename}</code></p>
    `;

    if (isFileProtocol) {
      errorHTML += `
        <div class="mt-4 p-4 bg-[#1a1a22] border border-[#ffaa00]/40 rounded text-sm">
          <p class="text-[#ffaa00] font-medium mb-2">This is a known limitation.</p>
          <p class="text-[#c0c0d0] mb-3">
            You're opening the file directly from your computer (<code>file://</code> protocol). 
            Modern browsers block <code>fetch()</code> requests in this mode for security reasons.
          </p>
          <p class="text-[#c0c0d0] font-medium mb-1">Quick fixes:</p>
          <ul class="text-[#a0a0b0] text-xs space-y-1 list-disc pl-4">
            <li><strong>Easiest:</strong> Install the "Live Server" extension in VS Code and right-click → "Open with Live Server"</li>
            <li>Run this command in the Elysium folder: <code class="bg-black px-1">python -m http.server 8000</code> then visit <code>http://localhost:8000/documents.html</code></li>
            <li>Or use <code>npx serve</code> if you have Node.js installed</li>
          </ul>
        </div>
      `;
    } else {
      errorHTML += `
        <p class="text-xs mt-3 text-[#808090]">
          Make sure the <code>lore</code> folder exists and contains the .md files.
        </p>
      `;
    }

    document.getElementById('document-content').innerHTML = errorHTML;
  }
}