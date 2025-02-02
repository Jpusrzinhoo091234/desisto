// Base de Conhecimento do Chatbot
const chatbotKnowledge = {
    // Informações sobre produtos
    products: {
        "netflix": {
            name: "Netflix",
            description: "Acesso Premium à Netflix",
            details: "Conta Netflix com perfil próprio, acesso a todos os recursos premium",
            prices: "Preços a partir de R$ 15,00",
            category: "assinaturas"
        },
        "disney": {
            name: "Disney+",
            description: "Acesso ao Disney+",
            details: "Conta Disney+ com perfil próprio, acesso a todo catálogo",
            prices: "Preços a partir de R$ 12,00",
            category: "assinaturas"
        },
        "hbo": {
            name: "HBO Max",
            description: "Acesso ao HBO Max",
            details: "Conta HBO Max com perfil próprio, acesso a séries exclusivas",
            prices: "Preços a partir de R$ 12,00",
            category: "assinaturas"
        },
        "prime": {
            name: "Amazon Prime",
            description: "Acesso ao Prime Video",
            details: "Conta Amazon Prime com todos os benefícios",
            prices: "Preços a partir de R$ 10,00",
            category: "assinaturas"
        },
        "anime fighter": {
            name: "Anime Fighter",
            description: "Itens e moedas para Anime Fighter",
            details: "Gems, moedas e itens especiais para Anime Fighter",
            prices: "Preços variam conforme o item",
            category: "anime_fighter"
        },
        "free fire": {
            name: "Free Fire",
            description: "Diamantes e itens para Free Fire",
            details: "Diamantes, passes e itens especiais para Free Fire",
            prices: "Preços variam conforme a quantidade",
            category: "free_fire"
        }
    },

    // Informações sobre categorias
    categories: {
        "assinaturas": {
            description: "Contas premium para serviços de streaming",
            available: ["Netflix", "Disney+", "HBO Max", "Amazon Prime"],
            details: "Todas as contas são entregues instantaneamente após confirmação do pagamento"
        },
        "anime_fighter": {
            description: "Itens e moedas para Anime Fighter",
            available: ["Gems", "Moedas", "Itens Especiais"],
            details: "Entrega imediata após confirmação do pagamento"
        },
        "free_fire": {
            description: "Diamantes e itens para Free Fire",
            available: ["Diamantes", "Passes", "Itens Especiais"],
            details: "Entrega imediata após confirmação do pagamento"
        }
    },

    // Informações sobre pagamentos
    payments: {
        methods: ["PIX", "Transferência Bancária"],
        process: "1. Escolha os produtos\n2. Finalize no WhatsApp\n3. Escolha forma de pagamento\n4. Receba acesso instantâneo",
        security: "Todos os pagamentos são processados com segurança e sua satisfação é garantida"
    },

    // Informações sobre entrega
    delivery: {
        time: "Entrega instantânea após confirmação do pagamento",
        process: "Você receberá as informações de acesso diretamente no WhatsApp",
        support: "Suporte disponível para ajudar com a entrega 24/7"
    },

    // Informações sobre suporte
    support: {
        channels: {
            whatsapp: "(24) 98182-7333",
            hours: "24/7 - Atendimento todos os dias"
        },
        commonIssues: {
            access: "Problemas de acesso são resolvidos instantaneamente",
            payment: "Dúvidas sobre pagamento são esclarecidas na hora",
            delivery: "Suporte imediato para questões de entrega"
        }
    },

    // Promoções e ofertas
    promotions: {
        current: "Confira nossas ofertas atuais diretamente no WhatsApp",
        bulk: "Descontos especiais para compras em quantidade",
        special: "Promoções exclusivas para clientes regulares"
    }
};

// Exportar a base de conhecimento
if (typeof module !== 'undefined' && module.exports) {
    module.exports = chatbotKnowledge;
}
