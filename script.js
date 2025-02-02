// Dados dos produtos
const products = [
    // Assinaturas
    {
        id: 'netflix-4k-privada',
        name: 'NETFLIX 4K - TELA PRIVADA EXCLUSIVA POR 30 DIAS + BRINDE!',
        price: 12.00,
        category: 'assinaturas',
        description: ' TELA EXCLUSIVA SÓ PARA VOCÊ ATIVAÇÃO IMEDIATA CONTEÚDO EM 4K HD, SEM ANÚNCIOS PAGAMENTO ÚNICO SUPORTE COMPLETO POR 30 DIAS',
        stock: 999,
        badge: 'TELA PRIVADA'
    },
    {
        id: 'netflix-4k-30dias',
        name: 'NETFLIX 4K ULTRA HD 30 DIAS',
        price: 5.50,
        category: 'assinaturas',
        description: '• Conta compartilhada Garantia e Suporte 30 Dias Assista sem Quedas e interrupções',
        stock: 999,
        badge: 'ULTRA HD'
    },
    {
        id: 'netflix-4k-7dias',
        name: 'NETFLIX 4K ULTRA HD 7 DIAS',
        price: 5.50,
        category: 'assinaturas',
        description: '• 7 Dias de duração Conta compartilhada Garantia e suporte 7 Dias',
        stock: 999,
        badge: '7 DIAS'
    },
    {
        id: 'mega-combo-streaming',
        name: ' MEGA COMBO - NETFLIX + PRIME VIDEO + PARAMOUNT + HBO MAX ',
        price: 27.00,
        category: 'assinaturas',
        description: ' PLANO PREMIUM 4K ULTRA HD SUPORTE 30 DIAS DURAÇÃO DE 30 DIAS FUNCIONA EM TODOS OS DISPOSITIVOS',
        stock: 999,
        badge: 'MELHOR OFERTA'
    },
    {
        id: 'netflix-1-tela',
        name: 'NETFLIX 30 DIAS 1 TELA COM PIN ',
        price: 27.00,
        category: 'assinaturas',
        description: ' PIN APENAS NA NETFLIX PLANO PREMIUM 4K ULTRA HD SUPORTE 30 DIAS DURAÇÃO DE 30 DIAS FUNCIONA EM TODOS OS DISPOSITIVOS',
        stock: 999,
        badge: 'PREMIUM'
    },
    {
        id: 'max-paramount-combo',
        name: ' MAX / HBO MAX (30 DIAS) + Paramount (7 Dias) ',
        price: 10.00,
        category: 'assinaturas',
        description: ' Melhor preço da GGMAX Conta compartilhada 30 dias de Garantia e Suporte Receba LOGIN + SENHA',
        stock: 999,
        badge: 'GARANTIA'
    },
    // Free Fire
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
        name: ' LEVEL 15 +300 DIMAS +20K OURO COM SKIN REI CAVEIRA',
        price: 17.00,
        category: 'free_fire',
        description: 'Acompanha personagens aleatórios + TROCA NICK',
        stock: 999,
        badge: 'PACOTE COMPLETO'
    },
    // Anime Fighter
    {
        id: 'full-booster-comum-1',
        name: ' FULL QUALQUER BOSSTER COMUM',
        price: 1.00,
        category: 'anime_fighter',
        description: 'Full booster comum para seu personagem',
        stock: 999,
        badge: 'PROMOÇÃO'
    },
    {
        id: 'full-super-booster',
        name: ' FULL QUALQUER SUPER BOOSTER',
        price: 1.50,
        category: 'anime_fighter',
        description: 'Full super booster para seu personagem',
        stock: 999,
        badge: 'EXCLUSIVO'
    },
    {
        id: 'full-booster-comum-2',
        name: ' FULL QUALQUER BOSSTER COMUM',
        price: 2.00,
        category: 'anime_fighter',
        description: 'Full booster comum para seu personagem',
        stock: 999,
        badge: 'POPULAR'
    },
    {
        id: 'clone-token-200',
        name: ' 200x CLONE TOKEN',
        price: 1.00,
        category: 'anime_fighter',
        description: 'Tokens de clone para seu personagem',
        stock: 999,
        badge: 'PROMOÇÃO'
    },
    {
        id: 'dungeon-token-50',
        name: ' 50x DUNGEON TOKEN',
        price: 1.00,
        category: 'anime_fighter',
        description: 'Tokens de dungeon para seu personagem',
        stock: 999,
        badge: 'OFERTA'
    },
    {
        id: 'defence-token-100',
        name: ' 100x DEFENCE TOKEN',
        price: 1.00,
        category: 'anime_fighter',
        description: 'Tokens de defesa para seu personagem',
        stock: 999,
        badge: 'LIMITADO'
    },
    {
        id: 'avatar-up-300',
        name: ' 300x AVATAR UP',
        price: 2.00,
        category: 'anime_fighter',
        description: 'Avatar UP para seu personagem',
        stock: 999,
        badge: 'EXCLUSIVO'
    },
    {
        id: 'avatar-double-up-250',
        name: ' 250x AVATAR DOUBLE UP',
        price: 2.00,
        category: 'anime_fighter',
        description: 'Avatar Double UP para seu personagem',
        stock: 999,
        badge: 'POPULAR'
    },
    {
        id: 'avatar-token-100',
        name: ' 100x AVATAR TOKEN',
        price: 2.00,
        category: 'anime_fighter',
        description: 'Tokens de avatar para seu personagem',
        stock: 999,
        badge: 'PROMOÇÃO'
    },
    {
        id: 'trial-shard-1k',
        name: ' 1k TRIAL SHARD',
        price: 0.50,
        category: 'anime_fighter',
        description: 'Trial Shards para seu personagem',
        stock: 999,
        badge: 'OFERTA'
    },
    {
        id: 'trial-shard-10k',
        name: ' 10k TRIAL SHARD',
        price: 1.00,
        category: 'anime_fighter',
        description: 'Trial Shards para seu personagem',
        stock: 999,
        badge: 'PROMOÇÃO'
    },
    {
        id: 'trial-shard-25k',
        name: ' 25k TRIAL SHARD',
        price: 2.00,
        category: 'anime_fighter',
        description: 'Trial Shards para seu personagem',
        stock: 999,
        badge: 'POPULAR'
    },
    {
        id: 'trial-shard-30k',
        name: ' 30k TRIAL SHARD',
        price: 2.50,
        category: 'anime_fighter',
        description: 'Trial Shards para seu personagem',
        stock: 999,
        badge: 'EXCLUSIVO'
    },
    {
        id: 'shard-mundo-35k',
        name: ' 35K SHARD MUNDO (PASSIVA)',
        price: 3.00,
        category: 'anime_fighter',
        description: 'Shards de mundo (passiva) para seu personagem',
        stock: 999,
        badge: 'LIMITADO'
    },
    {
        id: 'fruta-divina-1k',
        name: ' 1k FUTA DIVINA',
        price: 0.50,
        category: 'anime_fighter',
        description: 'Frutas divinas para seu personagem',
        stock: 999,
        badge: 'PROMOÇÃO'
    },
    {
        id: 'fruta-secreta-1k',
        name: ' 1K FRUTA SECRETA',
        price: 0.20,
        category: 'anime_fighter',
        description: 'Frutas secretas para seu personagem',
        stock: 999,
        badge: 'OFERTA ESPECIAL'
    }
];

// Função para adicionar ao carrinho
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
        cart.push({...product, quantity: 1});
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showCartNotification();
}

// Função para atualizar contagem do carrinho
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'block' : 'none';
    }
}

// Função para mostrar notificação do carrinho
function showCartNotification() {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = ' Produto adicionado ao carrinho!';
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 2000);
    }, 100);
}

// Função para gerar mensagem do WhatsApp
function generateWhatsAppMessage() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    let message = ' *NOVO PEDIDO*\n\n';
    let total = 0;

    message += ' *PRODUTOS SELECIONADOS:*\n';
    cart.forEach((item, index) => {
        const subtotal = item.price * (item.quantity || 1);
        total += subtotal;
        message += `\n${index + 1}. ${item.name}\n`;
        message += `   • Quantidade: ${item.quantity || 1}x\n`;
        message += `   • Preço unitário: R$ ${item.price.toFixed(2)}\n`;
        message += `   • Subtotal: R$ ${subtotal.toFixed(2)}\n`;
    });

    message += `\n*TOTAL DO PEDIDO: R$ ${total.toFixed(2)}*\n\n`;
    message += ' *INFORMAÇÕES PARA ENTREGA:*\n';
    message += 'Por favor, forneça:\n';
    message += '- Seu nome/nick\n';
    message += '- Email ou ID do jogo (se aplicável)\n';
    message += '- Forma de pagamento preferida\n\n';
    message += ' Agradecemos sua preferência!';

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '5511999999999'; // Substitua pelo seu número
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

// Função para mostrar carrinho
function showCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');
    const cartContent = document.getElementById('cart-content');

    if (!cartContainer || !cartContent) return;

    if (cart.length === 0) {
        cartContent.innerHTML = '<p class="empty-cart">Seu carrinho está vazio </p>';
    } else {
        let total = 0;
        let cartHTML = '<div class="cart-items">';
        
        cart.forEach(item => {
            const subtotal = item.price * (item.quantity || 1);
            total += subtotal;
            cartHTML += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h3>${item.name}</h3>
                        <p>R$ ${item.price.toFixed(2)} × ${item.quantity || 1}</p>
                    </div>
                    <div class="cart-item-total">
                        R$ ${subtotal.toFixed(2)}
                        <button onclick="removeFromCart('${item.id}')" class="remove-btn">️</button>
                    </div>
                </div>
            `;
        });

        cartHTML += `</div>
            <div class="cart-total">
                <h3>Total: R$ ${total.toFixed(2)}</h3>
                <button onclick="generateWhatsAppMessage()" class="checkout-btn">
                    Finalizar Pedido via WhatsApp
                </button>
                <button onclick="clearCart()" class="clear-cart-btn">
                    Limpar Carrinho
                </button>
            </div>`;

        cartContent.innerHTML = cartHTML;
    }

    cartContainer.style.display = 'flex';
}

// Função para remover item do carrinho
function removeFromCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCartCount();
    showCart();
}

// Função para limpar carrinho
function clearCart() {
    localStorage.removeItem('cart');
    updateCartCount();
    showCart();
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();

    // Event listener para fechar carrinho
    const cartContainer = document.getElementById('cart-container');
    if (cartContainer) {
        cartContainer.addEventListener('click', function(e) {
            if (e.target === cartContainer) {
                cartContainer.style.display = 'none';
            }
        });
    }

    // Atualizar os botões de compra
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productId = productCard.getAttribute('data-product-id');
            const product = products.find(p => p.id === productId);
            if (product) {
                addToCart(product);
            }
        });
    });

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
        productCard.setAttribute('data-product-id', product.id);
        
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
                Adicionar ao Carrinho
            </button>
        `;

        productsContainer.appendChild(productCard);
    });
}
