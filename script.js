// Dados dos produtos
const products = [
    // Produtos Free Fire
    {
        id: 'passe-boyaah',
        name: 'Passe Boyaah Free fire',
        price: 9.50,
        category: 'free_fire',
        description: 'Entrega Rápida Via ID',
        stock: 999,
        badge: 'ENTREGA RÁPIDA'
    },
    {
        id: 'level-15-pack',
        name: '🟢LEVEL 15 +300 DIMAS +20K OURO COM SKIN REI CAVEIRA',
        price: 17.00,
        category: 'free_fire',
        description: 'Acompanha personagens aleatórios + TROCA NICK',
        stock: 999,
        badge: 'PACOTE COMPLETO'
    },
    // Produtos Anime Fighter
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
