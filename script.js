// Dados dos produtos
const products = [
    {
        id: 1,
        name: "100x SHINY POTION",
        emoji: "✨",
        price: 3.00,
        category: "anime_fighters",
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
        category: "anime_fighters",
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
    }
];

// Promoções ativas
const activePromotions = {
    categories: {
        'free_fire': 10, // 10% em Free Fire
        'anime_fighters': 15 // 15% em Anime Fighters
    },
    timeEvents: [
        {
            name: "HAPPY HOUR",
            schedule: "18:00-20:00",
            discount: 15,
            description: "15% OFF em todos os produtos"
        }
    ]
};

// Estado do carrinho
let cart = [];
let currentCategory = 'todos';
let searchTerm = '';
let currentCoupon = null;
let currentPaymentMethod = 'pix';

// Cupons de desconto
const coupons = {
    'BEMVINDO': 10, // 10% de desconto
    'ANGELS': 15,   // 15% de desconto
    'VIP': 20,      // 20% de desconto
    'NOVO': 25      // 25% de desconto
};

// Sistema de Autenticação
const authSystem = {
    users: JSON.parse(localStorage.getItem('users')) || [],
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
    
    // Registro de novo usuário
    register: function(name, email, whatsapp, password) {
        // Validações
        if (!name || !email || !whatsapp || !password) {
            showNotification('Preencha todos os campos', 'error');
            return false;
        }
        
        if (password.length < 6) {
            showNotification('A senha deve ter no mínimo 6 caracteres', 'error');
            return false;
        }
        
        if (this.users.some(u => u.email === email)) {
            showNotification('Este email já está cadastrado', 'error');
            return false;
        }
        
        // Criar novo usuário
        const user = {
            id: Date.now(),
            name,
            email,
            whatsapp,
            password, // Em produção, usar hash
            orders: [],
            createdAt: new Date().toISOString(),
            points: 0,
            firstPurchaseUsed: false
        };
        
        this.users.push(user);
        localStorage.setItem('users', JSON.stringify(this.users));
        
        // Login automático
        this.login(email, password);
        return true;
    },
    
    // Login
    login: function(email, password) {
        const user = this.users.find(u => u.email === email && u.password === password);
        
        if (!user) {
            showNotification('Email ou senha incorretos', 'error');
            return false;
        }
        
        this.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        showNotification(`Bem-vindo(a) de volta, ${user.name}!`);
        updateAuthUI();
        closeAuthModal();
        return true;
    },
    
    // Logout
    logout: function() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        updateAuthUI();
        showNotification('Logout realizado com sucesso');
    },
    
    // Adicionar pedido ao histórico
    addOrder: function(order) {
        if (!this.currentUser) return;
        
        this.currentUser.orders.push(order);
        this.currentUser.points += Math.floor(order.total); // 1 ponto por real gasto
        
        // Atualizar no array de usuários
        const userIndex = this.users.findIndex(u => u.id === this.currentUser.id);
        this.users[userIndex] = this.currentUser;
        
        // Salvar alterações
        localStorage.setItem('users', JSON.stringify(this.users));
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    }
};

// Elementos do DOM
const productsContainer = document.getElementById('products-container');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.querySelector('.cart-count');
const cartToggle = document.getElementById('cart-toggle');
const cartClose = document.getElementById('cart-close');
const checkoutBtn = document.getElementById('checkout-btn');
const categoryBtns = document.querySelectorAll('.category-btn');
const previewModal = document.getElementById('preview-modal');
const previewClose = document.getElementById('preview-close');
const previewDetails = document.getElementById('preview-details');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const sortSelect = document.getElementById('sort-select');
const notification = document.getElementById('notification');
const couponInput = document.getElementById('coupon-input');
const applyCouponBtn = document.getElementById('apply-coupon');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartDiscount = document.getElementById('cart-discount');
const supportBtn = document.getElementById('support-btn');
const supportModal = document.getElementById('support-modal');
const supportClose = document.getElementById('support-close');
const paymentOptions = document.querySelectorAll('input[name="payment"]');

// Elementos do DOM para autenticação
const authModal = document.getElementById('auth-modal');
const authClose = document.getElementById('auth-close');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const authTabs = document.querySelectorAll('.auth-tab');

// Funções
function showNotification(message, type = 'success') {
    notification.textContent = message;
    notification.className = `notification ${type} show`;
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function filterProducts() {
    let filtered = products;
    
    // Filtrar por categoria
    if (currentCategory !== 'todos') {
        filtered = filtered.filter(product => product.category === currentCategory);
    }
    
    // Filtrar por busca
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(term) ||
            product.description.toLowerCase().includes(term)
        );
    }
    
    // Ordenar
    const sortValue = sortSelect.value;
    switch (sortValue) {
        case 'price-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    return filtered;
}

function displayProducts() {
    productsContainer.innerHTML = '';
    const filteredProducts = filterProducts();

    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = '<p class="no-results">Nenhum produto encontrado</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const isOutOfStock = product.stock === 0;
        const card = document.createElement('div');
        card.className = `product-card slideUp ${isOutOfStock ? 'out-of-stock' : ''}`;
        
        let badgeHtml = product.badge ? `<div class="product-badge">${product.badge}</div>` : '';
        let stockHtml = `<div class="product-stock">${isOutOfStock ? 'Fora de estoque' : `${product.stock} em estoque`}</div>`;
        
        // Verifica se há desconto na categoria
        let priceHtml = `<div class="product-price">R$ ${product.price.toFixed(2)}</div>`;
        if (activePromotions.categories[product.category]) {
            const discount = activePromotions.categories[product.category];
            const discountedPrice = product.price * (1 - discount / 100);
            priceHtml = `
                <div class="product-price">
                    <span class="original-price">R$ ${product.price.toFixed(2)}</span>
                    <span class="discounted-price">R$ ${discountedPrice.toFixed(2)}</span>
                    <span class="discount-tag">-${discount}%</span>
                </div>
            `;
        }
        
        card.innerHTML = `
            ${badgeHtml}
            <div class="product-emoji">${product.emoji}</div>
            <h3 class="product-name">${product.name}</h3>
            ${priceHtml}
            ${stockHtml}
            <button class="add-to-cart" onclick="addToCart(${product.id})" ${isOutOfStock ? 'disabled' : ''}>
                ${isOutOfStock ? 'Indisponível' : 'Adicionar ao Carrinho'}
            </button>
        `;
        
        card.onclick = (e) => {
            if (!e.target.classList.contains('add-to-cart')) {
                showPreview(product);
            }
        };
        
        productsContainer.appendChild(card);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || product.stock === 0) {
        showNotification('Produto fora de estoque', 'error');
        return;
    }

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        if (cartItem.quantity >= product.stock) {
            showNotification('Quantidade máxima atingida', 'error');
            return;
        }
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    showNotification(`${product.name} adicionado ao carrinho!`);
    updateCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateQuantity(productId, change) {
    const cartItem = cart.find(item => item.id === productId);
    const product = products.find(p => p.id === productId);

    if (cartItem) {
        const newQuantity = cartItem.quantity + change;
        if (newQuantity > 0 && newQuantity <= product.stock) {
            cartItem.quantity = newQuantity;
            updateCart();
        } else if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            showNotification('Quantidade máxima atingida', 'error');
        }
    }
}

function calculateCartTotal() {
    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discount = 0;

    // Desconto do cupom
    if (currentCoupon) {
        discount += subtotal * (coupons[currentCoupon] / 100);
    }

    // Desconto do PIX
    if (currentPaymentMethod === 'pix') {
        discount += subtotal * 0.05; // 5% de desconto no PIX
    }

    // Desconto de categoria
    cart.forEach(item => {
        if (activePromotions.categories[item.category]) {
            discount += (item.price * item.quantity) * (activePromotions.categories[item.category] / 100);
        }
    });

    // Verifica se é HAPPY HOUR
    const now = new Date();
    const hour = now.getHours();
    if (hour >= 18 && hour < 20) {
        discount += subtotal * 0.15; // 15% de desconto no Happy Hour
    }

    const total = subtotal - discount;
    return { subtotal, discount, total };
}

function updateCart() {
    cartItems.innerHTML = '';
    const { subtotal, discount, total } = calculateCartTotal();

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-emoji">${item.emoji}</div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">R$ ${item.price.toFixed(2)} x ${item.quantity}</div>
            </div>
            <div class="cart-item-actions">
                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)">+</button>
                <button onclick="removeFromCart(${item.id})">🗑️</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    cartSubtotal.textContent = `R$ ${subtotal.toFixed(2)}`;
    cartDiscount.textContent = `- R$ ${discount.toFixed(2)}`;
    cartTotal.textContent = `R$ ${total.toFixed(2)}`;
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function showPreview(product) {
    previewDetails.innerHTML = `
        <div class="preview-emoji">${product.emoji}</div>
        <h2>${product.name}</h2>
        <p class="preview-description">${product.description}</p>
        <div class="preview-price">R$ ${product.price.toFixed(2)}</div>
        <div class="preview-stock">
            ${product.stock > 0 ? `${product.stock} em estoque` : 'Fora de estoque'}
        </div>
        <button class="add-to-cart" onclick="addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
            ${product.stock === 0 ? 'Indisponível' : 'Adicionar ao Carrinho'}
        </button>
    `;
    previewModal.style.display = 'block';
}

function applyCoupon() {
    const code = couponInput.value.toUpperCase();
    if (coupons[code]) {
        currentCoupon = code;
        showNotification(`Cupom ${code} aplicado com sucesso! ${coupons[code]}% de desconto`);
        updateCart();
    } else {
        showNotification('Cupom inválido', 'error');
    }
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Seu carrinho está vazio', 'error');
        return;
    }

    const { subtotal, discount, total } = calculateCartTotal();
    let message = "🛒 *Novo Pedido - Angels Store*\n\n";
    
    // Produtos
    message += "*Produtos:*\n";
    cart.forEach(item => {
        message += `${item.emoji} *${item.name}*\n`;
        message += `Quantidade: ${item.quantity}\n`;
        message += `Preço: R$ ${(item.price * item.quantity).toFixed(2)}\n\n`;
    });
    
    // Resumo financeiro
    message += "\n💰 *Resumo do Pedido*\n";
    message += `Subtotal: R$ ${subtotal.toFixed(2)}\n`;
    if (discount > 0) {
        message += `Desconto: R$ ${discount.toFixed(2)}\n`;
    }
    message += `Total: R$ ${total.toFixed(2)}\n\n`;
    
    // Informações de pagamento
    message += `💳 *Forma de pagamento:* ${currentPaymentMethod === 'pix' ? 'PIX (5% OFF)' : 'Cartão'}\n`;
    if (currentCoupon) {
        message += `🎟️ *Cupom aplicado:* ${currentCoupon}\n`;
    }

    // Informações adicionais
    message += "\n📦 *Informações da Entrega*\n";
    message += "✅ Entrega instantânea após confirmação\n";
    message += "✅ Suporte 24h via WhatsApp\n";
    message += "✅ Garantia de satisfação\n\n";

    message += "*Angels Store - A melhor loja de itens para games!*";

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5524981128510?text=${encodedMessage}`);
}

// Event Listeners
cartToggle.onclick = () => cartModal.style.display = 'block';
cartClose.onclick = () => cartModal.style.display = 'none';
previewClose.onclick = () => previewModal.style.display = 'none';
checkoutBtn.onclick = checkout;

searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    displayProducts();
});

searchBtn.addEventListener('click', () => {
    displayProducts();
});

sortSelect.addEventListener('change', () => {
    displayProducts();
});

categoryBtns.forEach(btn => {
    btn.onclick = () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        displayProducts();
    };
});

applyCouponBtn.onclick = applyCoupon;

paymentOptions.forEach(option => {
    option.addEventListener('change', (e) => {
        currentPaymentMethod = e.target.value;
        updateCart();
    });
});

window.onclick = (e) => {
    if (e.target === cartModal) cartModal.style.display = 'none';
    if (e.target === previewModal) previewModal.style.display = 'none';
    if (e.target === supportModal) supportModal.style.display = 'none';
};

// Event Listeners para autenticação
authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const formId = tab.dataset.tab;
        authTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        if (formId === 'login') {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
        } else {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        }
    });
});

// Login
document.getElementById('login-btn').addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    authSystem.login(email, password);
});

// Registro
document.getElementById('register-btn').addEventListener('click', () => {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const whatsapp = document.getElementById('register-whatsapp').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    if (password !== confirmPassword) {
        showNotification('As senhas não coincidem', 'error');
        return;
    }
    
    authSystem.register(name, email, whatsapp, password);
});

// Funções auxiliares
function updateAuthUI() {
    const user = authSystem.currentUser;
    const headerActions = document.querySelector('.header-actions');
    
    if (user) {
        headerActions.innerHTML = `
            <div class="user-menu">
                <span class="user-name">👤 ${user.name}</span>
                <div class="user-dropdown">
                    <a href="#" onclick="showOrders()">📦 Meus Pedidos</a>
                    <a href="#" onclick="showProfile()">⚙️ Minha Conta</a>
                    <a href="#" onclick="authSystem.logout()">🚪 Sair</a>
                </div>
            </div>
            <div class="cart-btn" id="cart-toggle">
                <span class="emoji">🛒</span>
                <span class="cart-count">0</span>
            </div>
        `;
    } else {
        headerActions.innerHTML = `
            <button class="login-btn" onclick="showAuthModal()">👤 Entrar</button>
            <div class="cart-btn" id="cart-toggle">
                <span class="emoji">🛒</span>
                <span class="cart-count">0</span>
            </div>
        `;
    }
}

function showAuthModal() {
    authModal.style.display = 'block';
}

function closeAuthModal() {
    authModal.style.display = 'none';
}

function showOrders() {
    if (!authSystem.currentUser) return;
    
    const orders = authSystem.currentUser.orders;
    // Implementar visualização de pedidos
}

function showProfile() {
    if (!authSystem.currentUser) return;
    // Implementar edição de perfil
}

// Fechar modal ao clicar fora
authModal.onclick = (e) => {
    if (e.target === authModal) closeAuthModal();
};

// Fechar com o botão X
authClose.onclick = closeAuthModal;

// Inicializar UI de autenticação
updateAuthUI();

// Inicialização
displayProducts();
