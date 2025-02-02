// Dados dos produtos
const products = [
    {
        id: 'shiny-potion-100',
        name: '100x SHINY POTION',
        emoji: '✨',
        price: 3.00,
        category: 'anime_fighter',
        description: 'Poção para aumentar suas chances de Shiny',
        stock: 50,
        badge: 'POPULAR'
    },
    {
        id: 'diamantes-10k',
        name: '10.000 DIAMANTES',
        emoji: '💎',
        price: 5.00,
        category: 'free_fire',
        description: 'Diamantes para Free Fire',
        stock: 100,
        badge: 'PROMOÇÃO'
    },
    {
        id: 'diamantes-50k',
        name: '50.000 DIAMANTES',
        emoji: '💎',
        price: 20.00,
        category: 'free_fire',
        description: 'Diamantes para Free Fire',
        stock: 30
    },
    {
        id: 'diamantes-100k',
        name: '100.000 DIAMANTES',
        emoji: '💎',
        price: 35.00,
        category: 'free_fire',
        description: 'Diamantes para Free Fire',
        stock: 0,
        badge: 'ESGOTADO'
    },
    {
        id: 'shiny-potion-500',
        name: '500x SHINY POTION',
        emoji: '✨',
        price: 12.00,
        category: 'anime_fighter',
        description: 'Poção para aumentar suas chances de Shiny',
        stock: 25,
        badge: 'ÚLTIMO LOTE'
    },
    {
        id: 1,
        name: "100x SHINY POTION",
        emoji: "✨",
        price: 3.00,
        category: "anime_fighter",
        description: "Poção para aumentar suas chances de Shiny",
        stock: 50,
        badge: "POPULAR"
    },
    {
        id: 2,
        name: "10.000 DIAMANTES",
        emoji: "💎",
        price: 5.00,
        category: "free_fire",
        description: "Diamantes para Free Fire",
        stock: 100,
        badge: "PROMOÇÃO"
    },
    {
        id: 3,
        name: "50.000 DIAMANTES",
        emoji: "💎",
        price: 20.00,
        category: "free_fire",
        description: "Diamantes para Free Fire",
        stock: 30
    },
    {
        id: 4,
        name: "100.000 DIAMANTES",
        emoji: "💎",
        price: 35.00,
        category: "free_fire",
        description: "Diamantes para Free Fire",
        stock: 0,
        badge: "ESGOTADO"
    },
    {
        id: 5,
        name: "500x SHINY POTION",
        emoji: "✨",
        price: 12.00,
        category: "anime_fighter",
        description: "Poção para aumentar suas chances de Shiny",
        stock: 25,
        badge: "ÚLTIMO LOTE"
    },
    {
        id: 6,
        name: "PACOTE INICIANTE",
        emoji: "🎮",
        price: 10.00,
        category: "pacotes",
        description: "Kit perfeito para começar: 5.000 Diamantes + 50x Shiny Potion",
        stock: 50,
        badge: "INICIANTE"
    },
    {
        id: 7,
        name: "PACOTE VIP",
        emoji: "👑",
        price: 50.00,
        category: "pacotes",
        description: "Pacote Premium: 100.000 Diamantes + 1000x Shiny Potion",
        stock: 10,
        badge: "EXCLUSIVO"
    },
    // BUSTS
    {
        id: 'shiny-potion-100',
        name: '100x SHINY POTION',
        price: 3.00,
        emoji: '✨',
        category: 'busts',
        description: 'Poção brilhante para melhorar seus personagens'
    },
    {
        id: 'super-time-250',
        name: '250x SUPER TIME',
        price: 7.50,
        emoji: '⏳',
        category: 'busts',
        description: 'Aumente o tempo de suas missões'
    },
    {
        id: 'super-time-100',
        name: '100x SUPER TIME',
        price: 3.00,
        emoji: '⏳',
        category: 'busts',
        description: 'Aumente o tempo de suas missões'
    },
    {
        id: 'super-luck-100',
        name: '100x SUPER LUCK',
        price: 2.00,
        emoji: '🍀',
        category: 'busts',
        description: 'Aumente sua sorte nas drops'
    },
    {
        id: 'super-luck-250',
        name: '250x SUPER LUCK',
        price: 2.70,
        emoji: '🍀',
        category: 'busts',
        description: 'Aumente sua sorte nas drops'
    },
    {
        id: 'super-drop-100',
        name: '100x SUPER DROP',
        price: 2.10,
        emoji: '👜',
        category: 'busts',
        description: 'Melhore suas chances de drop'
    },
    {
        id: 'super-drop-250',
        name: '250x SUPER DROP',
        price: 5.30,
        emoji: '👜',
        category: 'busts',
        description: 'Melhore suas chances de drop'
    },
    {
        id: 'super-xp-100',
        name: '100x SUPER XP',
        price: 2.12,
        emoji: '⚡',
        category: 'busts',
        description: 'Ganhe mais XP nas batalhas'
    },
    {
        id: 'super-xp-250',
        name: '250x SUPER XP',
        price: 5.30,
        emoji: '⚡',
        category: 'busts',
        description: 'Ganhe mais XP nas batalhas'
    },
    {
        id: 'super-yen-250',
        name: '250x SUPER YEN',
        price: 3.00,
        emoji: '💸',
        category: 'busts',
        description: 'Aumente seus ganhos em Yen'
    },
    {
        id: 'super-dmg-250',
        name: '250x SUPER DMG',
        price: 2.30,
        emoji: '⚔️',
        category: 'busts',
        description: 'Aumente seu dano nas batalhas'
    },

    // ITENS
    {
        id: 'clone-token-500',
        name: '500x CLONE TOKEN',
        price: 2.00,
        emoji: '🟣',
        category: 'itens',
        description: 'Tokens para criar clones'
    },
    {
        id: 'dungeon-token-50',
        name: '50x DUNGEON TOKEN',
        price: 2.00,
        emoji: '🟡',
        category: 'itens',
        description: 'Tokens para dungeons'
    },
    {
        id: 'defence-token-100',
        name: '100x DEFENCE TOKEN',
        price: 3.00,
        emoji: '🔵',
        category: 'itens',
        description: 'Tokens de defesa'
    },
    {
        id: 'avatar-up-300',
        name: '300x AVATAR UP',
        price: 2.00,
        emoji: '📖',
        category: 'itens',
        description: 'Melhore seu avatar'
    },
    {
        id: 'avatar-double-up-250',
        name: '250x AVATAR DOUBLE UP',
        price: 2.00,
        emoji: '📙',
        category: 'itens',
        description: 'Melhoria dupla para seu avatar'
    },
    {
        id: 'avatar-token-100',
        name: '100x AVATAR TOKEN',
        price: 2.00,
        emoji: '🟡',
        category: 'itens',
        description: 'Tokens para avatar'
    },
    {
        id: 'trial-shard-1m',
        name: '1M TRIAL SHARD',
        price: 12.00,
        emoji: '☄️',
        category: 'itens',
        description: 'Fragmentos de trial'
    },
    {
        id: 'trial-shard-5m',
        name: '5M TRIAL SHARD',
        price: 30.00,
        emoji: '☄️',
        category: 'itens',
        description: 'Fragmentos de trial'
    },
    {
        id: 'shard-mundo-35k',
        name: '35K SHARD MUNDO (PASSIVA)',
        price: 3.00,
        emoji: '✨☄️',
        category: 'itens',
        description: 'Fragmentos do mundo'
    },
    {
        id: 'futa-divina-10k',
        name: '10K FUTA DIVINA',
        price: 4.00,
        emoji: '🔵',
        category: 'itens',
        description: 'Fruta divina especial'
    },
    {
        id: 'fruta-secreta-10k',
        name: '10K FRUTA SECRETA',
        price: 2.00,
        emoji: '⚫',
        category: 'itens',
        description: 'Fruta secreta misteriosa'
    },
    {
        id: 'hevelyn-fruits-10',
        name: '10x HEVELYN FRUITS',
        price: 2.50,
        emoji: '🍋',
        category: 'itens',
        description: 'Frutas especiais Hevelyn'
    },
    {
        id: 'sard-aura-20k',
        name: '20k SARD AURA',
        price: 2.50,
        emoji: '☪️',
        category: 'itens',
        description: 'Aura poderosa'
    },

    // ARTEFATOS
    {
        id: 'artefato-luck',
        name: 'ARTEFATO FULL (SORTE)',
        price: 10.00,
        emoji: '🍀',
        category: 'artefatos',
        description: 'Artefato completo de sorte'
    },
    {
        id: 'artefato-drop',
        name: 'ARTEFATO FULL (DROP)',
        price: 8.00,
        emoji: '👜',
        category: 'artefatos',
        description: 'Artefato completo de drop'
    },
    {
        id: 'artefato-yen',
        name: 'ARTEFATO FULL (YEN)',
        price: 2.00,
        emoji: '💸',
        category: 'artefatos',
        description: 'Artefato completo de yen'
    },
    {
        id: 'artefato-dmg',
        name: 'ARTEFATO FULL (DMG)',
        price: 2.00,
        emoji: '⚔️',
        category: 'artefatos',
        description: 'Artefato completo de dano'
    },
    {
        id: 'artefato-tempo',
        name: 'ARTEFATO FULL (TEMPO)',
        price: 6.00,
        emoji: '⏳',
        category: 'artefatos',
        description: 'Artefato completo de tempo'
    },
    {
        id: 'artefato-dungeon',
        name: 'ARTEFATO FULL (DUNGEON)',
        price: 2.00,
        emoji: '⛰️',
        category: 'artefatos',
        description: 'Artefato completo de dungeon'
    },
    {
        id: 'artefato-equipe',
        name: 'ARTEFATO FULL (EQUIPE)',
        price: 6.00,
        emoji: '👪',
        category: 'artefatos',
        description: 'Artefato completo de equipe'
    },
    {
        id: 'artefato-passiva-luck',
        name: 'ARTEFATO FULL (PASSIVA LUCK)',
        price: 5.00,
        emoji: '🍀',
        category: 'artefatos',
        description: 'Artefato completo de sorte passiva'
    },
    {
        id: 'artefato-xp',
        name: 'ARTEFATO FULL (XP)',
        price: 5.00,
        emoji: '🧪',
        category: 'artefatos',
        description: 'Artefato completo de XP'
    },
    {
        id: 'full-artefato',
        name: 'FULL ARTEFATO',
        price: 30.00,
        emoji: '👪🍀',
        category: 'artefatos',
        description: 'Conjunto completo de artefatos'
    },

    // PEDRAS
    {
        id: 'todas-pedras-2k',
        name: '2K TODAS PEDRAS',
        price: 2.50,
        emoji: '🟠🟣🟢🔵🔴🟡',
        category: 'pedras',
        description: 'Conjunto completo de todas as pedras',
        isPromotion: true
    },

    // Free Fire
    {
        id: 'ff-diamantes-100k',
        name: '100.000 Diamantes',
        price: 50.00,
        emoji: '💎',
        category: 'free_fire',
        description: 'Pacote de 100.000 diamantes para Free Fire'
    },
    {
        id: 'ff-diamantes-50k',
        name: '50.000 Diamantes',
        price: 25.00,
        emoji: '💎',
        category: 'free_fire',
        description: 'Pacote de 50.000 diamantes para Free Fire'
    },
    {
        id: 'ff-diamantes-20k',
        name: '20.000 Diamantes',
        price: 10.00,
        emoji: '💎',
        category: 'free_fire',
        description: 'Pacote de 20.000 diamantes para Free Fire'
    },

    // Assinaturas
    {
        id: 'assinatura-mensal',
        name: 'Assinatura Mensal',
        price: 19.99,
        emoji: '🌟',
        category: 'assinaturas',
        description: 'Acesso completo por 30 dias'
    },
    {
        id: 'assinatura-trimestral',
        name: 'Assinatura Trimestral',
        price: 49.99,
        emoji: '🚀',
        category: 'assinaturas',
        description: 'Acesso completo por 90 dias com desconto'
    },
    {
        id: 'assinatura-anual',
        name: 'Assinatura Anual',
        price: 149.99,
        emoji: '🌈',
        category: 'assinaturas',
        description: 'Acesso completo por 365 dias com super desconto'
    },
    {
        id: 'full-booster-comum-1',
        name: '✨FULL QUALQUER BOSSTER COMUM✨',
        price: 1.00,
        category: 'anime_fighter',
        description: 'Full booster comum para seu personagem',
        stock: 999
    },
    {
        id: 'full-super-booster',
        name: '✨FULL QUALQUER SUPER BOOSTER✨',
        price: 1.50,
        category: 'anime_fighter',
        description: 'Full super booster para seu personagem',
        stock: 999
    },
    {
        id: 'full-booster-comum-2',
        name: '✨FULL QUALQUER BOSSTER COMUM✨',
        price: 2.00,
        category: 'anime_fighter',
        description: 'Full booster comum para seu personagem',
        stock: 999
    },
    {
        id: 'clone-token-200',
        name: '🟣200x CLONE TOKEN🟣',
        price: 1.00,
        category: 'anime_fighter',
        description: 'Tokens de clone para seu personagem',
        stock: 999
    },
    {
        id: 'dungeon-token-50',
        name: '🟡50x DUNGEON TOKEN🟡',
        price: 1.00,
        category: 'anime_fighter',
        description: 'Tokens de dungeon para seu personagem',
        stock: 999
    },
    {
        id: 'defence-token-100',
        name: '🔵100x DEFENCE TOKEN🔵',
        price: 1.00,
        category: 'anime_fighter',
        description: 'Tokens de defesa para seu personagem',
        stock: 999
    },
    {
        id: 'avatar-up-300',
        name: '📖300x AVATAR UP📖',
        price: 2.00,
        category: 'anime_fighter',
        description: 'Avatar UP para seu personagem',
        stock: 999
    },
    {
        id: 'avatar-double-up-250',
        name: '📙250x AVATAR DOUBLE UP📙',
        price: 2.00,
        category: 'anime_fighter',
        description: 'Avatar Double UP para seu personagem',
        stock: 999
    },
    {
        id: 'avatar-token-100',
        name: '🟡100x AVATAR TOKEN🟡',
        price: 2.00,
        category: 'anime_fighter',
        description: 'Tokens de avatar para seu personagem',
        stock: 999
    },
    {
        id: 'trial-shard-1k',
        name: '☄️1k TRIAL SHARD☄️',
        price: 0.50,
        category: 'anime_fighter',
        description: 'Trial Shards para seu personagem',
        stock: 999
    },
    {
        id: 'trial-shard-10k',
        name: '☄️10k TRIAL SHARD☄️',
        price: 1.00,
        category: 'anime_fighter',
        description: 'Trial Shards para seu personagem',
        stock: 999
    },
    {
        id: 'trial-shard-25k',
        name: '☄️25k TRIAL SHARD☄️',
        price: 2.00,
        category: 'anime_fighter',
        description: 'Trial Shards para seu personagem',
        stock: 999
    },
    {
        id: 'trial-shard-30k',
        name: '☄️30k TRIAL SHARD☄️',
        price: 2.50,
        category: 'anime_fighter',
        description: 'Trial Shards para seu personagem',
        stock: 999
    },
    {
        id: 'shard-mundo-35k',
        name: '✨☄️35K SHARD MUNDO (PASSIVA)☄️✨',
        price: 3.00,
        category: 'anime_fighter',
        description: 'Shards de mundo (passiva) para seu personagem',
        stock: 999
    },
    {
        id: 'fruta-divina-1k',
        name: '🔵1k FUTA DIVINA🔵',
        price: 0.50,
        category: 'anime_fighter',
        description: 'Frutas divinas para seu personagem',
        stock: 999
    },
    {
        id: 'fruta-secreta-1k',
        name: '⚫1K FRUTA SECRETA⚫',
        price: 0.20,
        category: 'anime_fighter',
        description: 'Frutas secretas para seu personagem',
        stock: 999
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Exibir todos os produtos inicialmente
    displayProducts(products);

    // Adicionar event listeners aos botões de categoria
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover classe 'active' de todos os botões
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Adicionar classe 'active' ao botão clicado
            this.classList.add('active');

            const category = this.getAttribute('data-category');
            if (category === 'todos') {
                displayProducts(products);
            } else {
                const filteredProducts = products.filter(product => 
                    product.category.toLowerCase() === category.toLowerCase()
                );
                displayProducts(filteredProducts);
            }
        });
    });

    // Adicionar event listener para busca
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
        displayProducts(filteredProducts);
    }

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});

// Função para exibir produtos
function displayProducts(productsToShow) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    if (productsToShow.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'empty-message';
        emptyMessage.innerHTML = `
            <div class="empty-icon">😢</div>
            <h3>Nenhum produto encontrado</h3>
            <p>Não encontramos produtos nesta categoria no momento.</p>
        `;
        productsContainer.appendChild(emptyMessage);
        return;
    }

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        let badgeHTML = '';
        if (product.badge) {
            badgeHTML = `<span class="badge">${product.badge}</span>`;
        }

        let stockStatus = '';
        if (product.stock === 0) {
            stockStatus = '<span class="out-of-stock">Esgotado</span>';
        }

        productCard.innerHTML = `
            ${badgeHTML}
            <h3>${product.name}</h3>
            <p class="description">${product.description || ''}</p>
            <p class="price">R$ ${product.price.toFixed(2)}</p>
            ${stockStatus}
            <button class="buy-btn" ${product.stock === 0 ? 'disabled' : ''}>
                Comprar
            </button>
        `;

        productsContainer.appendChild(productCard);
    });
}
