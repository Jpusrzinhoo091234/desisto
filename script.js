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

// Sistema de contador de acessos
const visitCounter = {
    INCREMENT_VALUE: 4.5678, // Valor para incrementar a cada visita

    initialize: function() {
        // Verifica se é a primeira visita do dia
        const today = new Date().toDateString();
        const lastVisit = localStorage.getItem('lastVisit');
        let totalVisits = parseFloat(localStorage.getItem('totalVisits'));
        
        // Se não existir contagem, inicializa com 0
        if (isNaN(totalVisits)) {
            totalVisits = 0;
            localStorage.setItem('totalVisits', totalVisits);
        }
        
        if (lastVisit !== today) {
            // Nova visita do dia
            localStorage.setItem('lastVisit', today);
            totalVisits += this.INCREMENT_VALUE;
            localStorage.setItem('totalVisits', totalVisits);
            
            // Atualiza o contador na interface
            this.updateVisitDisplay();
            
            // Registra a visita (você pode implementar uma chamada de API aqui)
            this.logVisit();
        } else {
            // Atualiza o display mesmo se não for uma nova visita
            this.updateVisitDisplay();
        }
    },
    
    updateVisitDisplay: function() {
        const totalVisits = parseFloat(localStorage.getItem('totalVisits')) || 0;
        // Cria ou atualiza o elemento de exibição do contador
        let counterDisplay = document.getElementById('visit-counter');
        if (!counterDisplay) {
            counterDisplay = document.createElement('div');
            counterDisplay.id = 'visit-counter';
            counterDisplay.style.cssText = 'position: fixed; bottom: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 5px 10px; border-radius: 5px; font-size: 12px;';
            document.body.appendChild(counterDisplay);
        }
        // Converte para inteiro usando Math.floor para mostrar apenas a parte inteira
        counterDisplay.textContent = `Visitas: ${Math.floor(totalVisits)}`;
    },
    
    logVisit: function() {
        // Aqui você pode implementar uma chamada para seu backend
        console.log('Nova visita registrada:', new Date().toISOString());
    }
};

// Função para exibir produtos
function displayProducts(productsToShow) {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) return;
    
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

        const buyButton = product.stock === 0 
            ? `<button class="buy-btn" disabled>Esgotado</button>`
            : `<button class="buy-btn" onclick="addToCart('${product.id}')">Adicionar ao Carrinho</button>`;

        productCard.innerHTML = `
            ${badgeHTML}
            <h3>${product.name}</h3>
            <p class="description">${product.description || ''}</p>
            <p class="price">R$ ${product.price.toFixed(2)}</p>
            ${stockStatus}
            ${buyButton}
        `;

        productsContainer.appendChild(productCard);
    });
}

// Função para adicionar ao carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.id === productId);

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
    notification.innerHTML = '✅ Produto adicionado ao carrinho!';
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

// Função para mostrar carrinho
function showCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (!cartContainer || !cartItems || !cartTotal) return;

    // Limpa o conteúdo anterior
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <p>Seu carrinho está vazio 😢</p>
            </div>
        `;
        cartTotal.textContent = 'R$ 0,00';
    } else {
        let total = 0;
        cart.forEach(item => {
            const itemTotal = item.price * (item.quantity || 1);
            total += itemTotal;

            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">R$ ${item.price.toFixed(2)}</div>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button onclick="updateItemQuantity('${item.id}', ${(item.quantity || 1) - 1})">-</button>
                        <span>${item.quantity || 1}</span>
                        <button onclick="updateItemQuantity('${item.id}', ${(item.quantity || 1) + 1})">+</button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart('${item.id}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            cartItems.appendChild(itemElement);
        });

        cartTotal.textContent = `R$ ${total.toFixed(2)}`;
    }

    // Mostra o carrinho
    cartContainer.style.display = 'block';
}

// Função para fechar o carrinho
function hideCart() {
    const cartContainer = document.getElementById('cart-container');
    if (cartContainer) {
        cartContainer.style.display = 'none';
    }
}

// Função para remover item do carrinho
function removeFromCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCartCount();
    showCart(); // Atualiza a visualização do carrinho
}

// Função para atualizar quantidade do item
function updateItemQuantity(productId, quantity) {
    if (quantity < 1) {
        removeFromCart(productId);
        return;
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showCart(); // Atualiza a visualização do carrinho
    }
}

// Função para gerar mensagem do WhatsApp
function generateWhatsAppMessage() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartItems.length === 0) return '';

    let message = "🛒 *Novo Pedido*\n\n";
    let total = 0;

    cartItems.forEach(item => {
        const subtotal = item.price * item.quantity;
        message += `*${item.name}*\n`;
        message += `Quantidade: ${item.quantity}\n`;
        message += `Preço: R$ ${item.price.toFixed(2)}\n`;
        message += `Subtotal: R$ ${subtotal.toFixed(2)}\n\n`;
        total += subtotal;
    });

    message += `*Total do Pedido: R$ ${total.toFixed(2)}*\n\n`;
    message += "💬 Preciso de suporte ou tenho dúvidas? Entre em contato:\n";
    message += "📱 WhatsApp: (24) 98112-8510";

    return encodeURIComponent(message);
}

function sendToWhatsApp() {
    const message = generateWhatsAppMessage();
    if (message) {
        window.open(`https://wa.me/24981128510?text=${message}`, '_blank');
    } else {
        alert('Adicione itens ao carrinho primeiro!');
    }
}

function sendSupportMessage() {
    const messageModal = document.getElementById('message-modal');
    messageModal.classList.add('active');
}

function closeMessageModal() {
    const messageModal = document.getElementById('message-modal');
    messageModal.classList.remove('active');
}

function sendCustomMessage() {
    const messageText = document.getElementById('support-message').value.trim();
    if (!messageText) {
        alert('Por favor, digite sua mensagem antes de enviar.');
        return;
    }

    const whatsappNumber = "24981128510";
    const message = `👋 Olá! ${messageText}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    closeMessageModal();
    document.getElementById('support-message').value = '';
}

// Fechar modal ao clicar fora
document.addEventListener('click', function(event) {
    const messageModal = document.getElementById('message-modal');
    const messageContent = document.querySelector('.message-content');
    
    if (event.target === messageModal) {
        closeMessageModal();
    }
});

// Função para filtrar produtos
function filterProducts(category) {
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');

    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    displayProducts(filteredProducts);
}

// Inicializar quando o documento carregar
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    updateCartCount();
    visitCounter.initialize();

    // Adicionar evento para fechar carrinho quando clicar fora
    const cartContainer = document.getElementById('cart-container');
    if (cartContainer) {
        cartContainer.addEventListener('click', function(e) {
            if (e.target === cartContainer) {
                hideCart();
            }
        });
    }

    // Adicionar evento para o botão de fechar do carrinho
    const closeCartBtn = document.querySelector('.cart-close-btn');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', hideCart);
    }
});

// Event listeners for buttons
document.querySelector('.clear-cart-btn').addEventListener('click', clearCart);

// Assuming you have a way to render cart items with remove buttons and quantity inputs
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <input type='number' value='${item.quantity}' min='1' onchange='updateItemQuantity("${item.id}", this.value)'>
            <button onclick='removeFromCart("${item.id}")'>Remover</button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
}
