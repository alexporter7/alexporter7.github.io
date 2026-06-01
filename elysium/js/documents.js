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