// Ruta base hacia tu carpeta local de imágenes
const LOCAL_IMG_PATH = './imagen/';

// ==========================================
// CENTRALIZACIÓN DE IMÁGENES
// ==========================================
const IMAGES = {
    costillitasB: `${LOCAL_IMG_PATH}ima1.jpeg`,
    bifeChorizo: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    lomoFino: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
    pechugaPollo: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=80',
    salmonNoruego: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    mixVegetales: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    bondiolaCerdo: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80',
    esparragos: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=800&q=80',
    costillitasBBQ: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
};

// ==========================================
// 1. CONFIGURACIÓN DE VOUCHERS / CUPONES
// ==========================================
const VOUCHERS = {
    'BIENVENIDA10': { type: 'percent', value: 10, label: '10% OFF Bienvenida' },
    'GOURMET15': { type: 'percent', value: 15, label: '15% OFF Especial' },
    'DESCUENTO2000': { type: 'fixed', value: 2000, label: '$2.000 OFF en tu compra' }
};

// ==========================================
// 2. CONFIGURACIÓN DE DESCUENTOS POR TIEMPO LIMITADO
// ==========================================
const TIMED_DISCOUNTS = [
    {
        id: 'PROMO-CARNES',
        title: 'Semana de Carnes Premium',
        discountPercent: 15,                  
        startDate: '2026-10-01T00:00:00',
        endDate: '2026-10-31T23:59:59',
        productIds: [1, 2, 6],                
        description: '15% de descuento en cortes seleccionados de carne.'
    },
    {
        id: 'PROMO-VEGE',
        title: 'Ofertón Vegetal',
        discountPercent: 20,                    
        startDate: '2026-10-05T00:00:00',
        endDate: '2026-10-20T23:59:59',
        productIds: [5, 7],                   
        description: '20% OFF en vegetales congelados y grillados.'
    }
];

// Datos del catálogo
// Datos del catálogo ampliados con descripciones
const products = [
    { 
        id: 1, name: 'Bife de Chorizo Madurado', category: 'Carnes', price: 4500, image: IMAGES.bifeChorizo, featured: true,
        weight: '500g', prep: 'Sartén / Parrilla',
        description: 'Corte premium de novillo madurado por 21 días. Envasado al vacío en su punto máximo de terneza para garantizar que los jugos naturales y el sabor se mantengan intactos hasta tu mesa.'
    },
    { 
        id: 2, name: 'Lomo Fino Marinado', category: 'Carnes', price: 5200, image: IMAGES.lomoFino, featured: false,
        weight: '450g', prep: 'Sartén / Horno',
        description: 'El corte más tierno de todos. Limpio de grasas y membranas, ligeramente marinado con aceite de oliva extra virgen y pimienta negra. Listo para sellar.'
    },
    { 
        id: 3, name: 'Pechuga de Pollo a las Hierbas', category: 'Aves', price: 2800, image: IMAGES.pechugaPollo, featured: true,
        weight: '400g', prep: 'Agua Caliente / Plancha',
        description: 'Pechugas de pollo de campo sin piel, marinadas al vacío con tomillo, romero y ajo. Ideales para cocción Sous-Vide o para sellar directamente a la plancha sin que queden secas.'
    },
    { 
        id: 4, name: 'Salmón Noruego Sellado', category: 'Pescados', price: 6800, image: IMAGES.salmonNoruego, featured: true,
        weight: '250g', prep: 'Agua Caliente (Sous-Vide)',
        description: 'Penca de salmón rosado de primera calidad, despinado y envasado al vacío. Perfecto para una regeneración rápida y segura manteniendo su textura mantecosa.'
    },
    { 
        id: 5, name: 'Mix de Vegetales Grillados', category: 'Vegetales', price: 1900, image: IMAGES.mixVegetales, featured: false,
        weight: '400g', prep: 'Microondas / Sartén',
        description: 'Zucchini, berenjenas, pimientos y cebollas asadas a la plancha y selladas rápidamente para conservar su color y vitaminas. Sin conservantes artificiales.'
    },
    { 
        id: 6, name: 'Bondiola de Cerdo a la Miel', category: 'Carnes', price: 3900, image: IMAGES.bondiolaCerdo, featured: false,
        weight: '500g', prep: 'Horno / Agua Caliente',
        description: 'Bondiola deshuesada sometida a una cocción lenta de 6 horas y luego envasada con una reducción de miel y mostaza. Solo calienta y disfruta de una carne que se deshace sola.'
    },
    { 
        id: 7, name: 'Espárragos y Zanahorias Baby', category: 'Vegetales', price: 2100, image: IMAGES.esparragos, featured: false,
        weight: '300g', prep: 'Microondas / Sartén',
        description: 'Vegetales crujientes y frescos de huertas locales. Lavados, blanqueados y envasados al vacío para garantizar que no pierdan su textura original.'
    },
    { 
        id: 8, name: 'Costillitas BBQ Sous-Vide', category: 'Platos Listos', price: 4800, image: IMAGES.costillitasBBQ, featured: true,
        weight: '600g', prep: 'Horno 10 min',
        description: 'Costillitas de cerdo ahumadas y cocinadas al vacío por 12 horas con salsa barbacoa artesanal. Solo necesitas 10 minutos de horno fuerte para caramelizar la salsa.'
    },
    { 
        id: 9, name: 'Costillitas Bordo', category: 'Platos Listos', price: 4800, image: IMAGES.costillitasB, featured: true,
        weight: '600g', prep: 'Horno 10 min',
        description: 'Nuestra especialidad de la casa. Tiernas costillitas bañadas en una salsa especial al vino tinto y especias. Envasadas al vacío para retener todo el aroma.'
    }
];

// Datos de recetas
const recipes = [
    {
        title: 'Regeneración Perfecta de Carnes',
        desc: 'Aprende a calentar tus cortes al vacío sin perder término ni jugosidad.',
        image: IMAGES.bifeChorizo,
        detail: 'Sumerge la bolsa sellada en agua tibia a 60°C durante 15 minutos. Luego retira, seca la superficie del corte con papel absorbente y sella a fuego alto en sartén por 1 minuto por lado para una costra crujiente.'
    },
    {
        title: 'Cocción Sous-Vide en Casa',
        desc: 'Consigue la textura exacta de restaurante usando agua a temperatura controlada.',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
        detail: 'Al cocinar al vacío, las proteínas no pierden humedad ni volumen. Mantén agua constante entre 55°C y 65°C según el término deseado. Es la forma más segura y sabrosa de cocinar.'
    },
    {
        title: 'Conservación y Congelado Correcto',
        desc: 'Optimiza el tiempo en tu refrigerador extendiendo la vida útil de tus alimentos.',
        image: IMAGES.mixVegetales,
        detail: 'El envasado al vacío retira el oxígeno evitando la oxidación y quemaduras por congelación. Tus vegetales y carnes pueden durar hasta 3 veces más tiempo en óptimo estado.'
    }
];

let cart = [];
let appliedVoucher = null;
let currentSlide = 0;
let selectedCategory = 'Todos';
let carouselInterval = null;
let toastTimeout;

// Inicialización de la app
document.addEventListener('DOMContentLoaded', () => {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    initCarousel();
    renderCategories();
    renderProducts();
    renderFeatured();
    renderRecipes();
    checkAndShowDiscountsPopup();
});

// Menú móvil
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

// Carrusel
function initCarousel() {
    const wrapper = document.getElementById('slides-wrapper');
    const indicatorsContainer = document.getElementById('carousel-indicators');
    if (!wrapper || !indicatorsContainer) return;

    const totalSlides = wrapper.children.length;

    indicatorsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const btn = document.createElement('button');
        btn.className = `w-3 h-3 rounded-full transition-all ${i === 0 ? 'bg-emerald-500 w-6' : 'bg-white/40'}`;
        btn.onclick = () => goToSlide(i);
        indicatorsContainer.appendChild(btn);
    }

    if (carouselInterval) clearInterval(carouselInterval);
    carouselInterval = setInterval(() => { nextSlide(); }, 6000);
}

function updateCarousel() {
    const wrapper = document.getElementById('slides-wrapper');
    const indicators = document.getElementById('carousel-indicators')?.children;
    if (!wrapper) return;

    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;

    if (indicators) {
        Array.from(indicators).forEach((ind, index) => {
            ind.className = index === currentSlide ? 'w-6 h-3 bg-emerald-500 rounded-full transition-all' : 'w-3 h-3 bg-white/40 rounded-full transition-all';
        });
    }
}

function nextSlide() {
    const wrapper = document.getElementById('slides-wrapper');
    if (!wrapper) return;
    currentSlide = (currentSlide + 1) % wrapper.children.length;
    updateCarousel();
}

function prevSlide() {
    const wrapper = document.getElementById('slides-wrapper');
    if (!wrapper) return;
    currentSlide = (currentSlide - 1 + wrapper.children.length) % wrapper.children.length;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

// Redondeo obligatorio a múltiplo de 10 hacia arriba
function roundUpToTen(amount) {
    return Math.ceil(amount / 10) * 10;
}

// Lógica de cálculo de precios con ofertas
function getProductEffectivePrice(product) {
    const now = new Date();
    let maxDiscount = 0;

    TIMED_DISCOUNTS.forEach(promo => {
        const start = new Date(promo.startDate);
        const end = new Date(promo.endDate);

        if (now >= start && now <= end) {
            if (promo.productIds === 'ALL' || promo.productIds.includes(product.id)) {
                if (promo.discountPercent > maxDiscount) {
                    maxDiscount = promo.discountPercent;
                }
            }
        }
    });

    if (maxDiscount > 0) {
        const rawDiscountedPrice = product.price * (1 - maxDiscount / 100);
        const finalPrice = roundUpToTen(rawDiscountedPrice);

        return {
            originalPrice: product.price,
            finalPrice: finalPrice,
            discountPercent: maxDiscount,
            hasDiscount: true
        };
    }

    return {
        originalPrice: product.price,
        finalPrice: product.price,
        discountPercent: 0,
        hasDiscount: false
    };
}

// Renderizado de Categorías (Adaptado a Modo Noche)
function renderCategories() {
    const container = document.getElementById('category-buttons');
    if (!container) return;

    const categories = ['Todos', ...new Set(products.map(p => p.category))];
    
    container.innerHTML = categories.map(cat => `
        <button onclick="filterCategory('${cat}')" class="px-6 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${selectedCategory === cat ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-900/40' : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 border-slate-700'}">
            ${cat}
        </button>
    `).join('');
}

function filterCategory(cat) {
    selectedCategory = cat;
    renderCategories();
    renderProducts();
}

// Renderizado de Productos 
function renderProducts() {
    const container = document.getElementById('product-grid');
    if (!container) return;

    container.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6";

    const filtered = selectedCategory === 'Todos' 
        ? products 
        : products.filter(p => p.category === selectedCategory);

    container.innerHTML = filtered.map(product => {
        const priceData = getProductEffectivePrice(product);

        return `
            <div class="bg-slate-800 rounded-3xl overflow-hidden shadow-md border border-slate-700 hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                
                <!-- Imagen clickeable -->
                <div class="relative overflow-hidden h-64 sm:h-72 bg-slate-900 cursor-pointer" onclick="openProductModal(${product.id})">
                    <img src="${product.image}" alt="${product.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100">
                    
                    <span class="absolute top-3.5 right-3.5 bg-slate-900/90 backdrop-blur-md text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full text-slate-300 shadow-sm border border-slate-700">
                        ${product.category}
                    </span>

                    ${priceData.hasDiscount ? `
                        <span class="absolute top-3.5 left-3.5 bg-emerald-600 text-white text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-full shadow-md backdrop-blur-sm">
                            -${priceData.discountPercent}% OFF
                        </span>
                    ` : ''}
                    
                    <!-- Capa hover "Ver detalle" -->
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span class="bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-full border border-slate-700"><i class="fa-regular fa-eye mr-2"></i>Ver detalle</span>
                    </div>
                </div>

                <div class="p-5 flex flex-col flex-grow justify-between bg-slate-800">
                    <div>
                        <span class="text-[10px] font-bold text-emerald-500 uppercase tracking-widest block mb-1">100% Empacado al Vacío</span>
                        <!-- Título clickeable -->
                        <h3 class="font-bold text-slate-200 text-base leading-snug hover:text-emerald-400 transition-colors line-clamp-1 cursor-pointer" onclick="openProductModal(${product.id})">${product.name}</h3>
                    </div>

                    <div class="mt-4 flex items-center justify-between pt-3 border-t border-slate-700">
                        <div>
                            ${priceData.hasDiscount ? `
                                <span class="text-xs text-slate-500 line-through block font-medium">$${priceData.originalPrice.toLocaleString()}</span>                                 <span class="text-lg font-extrabold text-emerald-400">$${priceData.finalPrice.toLocaleString()}</span>
                            ` : `
                                <span class="text-lg font-extrabold text-white">$${priceData.finalPrice.toLocaleString()}</span>
                            `}
                        </div>

                        <button onclick="addToCart(${product.id})" class="bg-slate-700 hover:bg-emerald-600 text-emerald-400 hover:text-white p-3 rounded-2xl transition-all shadow-sm active:scale-95 border border-slate-600 hover:border-emerald-500 flex items-center justify-center">
                            <i class="fa-solid fa-cart-plus text-base"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Renderizado de Destacados
function renderFeatured() {
    const container = document.getElementById('featured-grid');
    if (!container) return;

    container.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

    const featured = products.filter(p => p.featured);

    container.innerHTML = featured.map(product => {
        const priceData = getProductEffectivePrice(product);

        return `
            <div class="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-md hover:shadow-lg hover:border-slate-600 transition-all duration-300 flex flex-col sm:flex-row h-full group">
                <!-- Imagen clickeable -->
                <div class="sm:w-1/2 h-56 sm:h-auto relative overflow-hidden bg-slate-900 cursor-pointer" onclick="openProductModal(${product.id})">
                    <img src="${product.image}" alt="${product.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100">
                    ${priceData.hasDiscount ? `
                        <span class="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-sm">
                            -${priceData.discountPercent}% OFF
                        </span>
                    ` : ''}
                    <!-- Capa hover "Ver detalle" -->
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <i class="fa-regular fa-eye text-white text-2xl drop-shadow-lg"></i>
                    </div>
                </div>
                <div class="p-5 flex flex-col justify-between sm:w-1/2">
                    <div>
                        <span class="inline-block text-[10px] uppercase font-bold text-emerald-400 bg-slate-900 border border-slate-700 px-2.5 py-1 rounded-md mb-2">Popular</span>
                        <!-- Título clickeable -->
                        <h3 class="font-bold text-white text-base leading-snug cursor-pointer hover:text-emerald-400 transition-colors" onclick="openProductModal(${product.id})">${product.name}</h3>
                        <p class="text-xs text-slate-400 mt-1">Frescura garantizada de 15 a 30 días.</p>
                    </div>
                    <div class="mt-4 flex items-center justify-between pt-3 border-t border-slate-700">
                        <div>
                            ${priceData.hasDiscount ? `
                                <span class="text-xs text-slate-500 line-through block font-medium">$${priceData.originalPrice.toLocaleString()}</span>                                 <span class="text-lg font-extrabold text-emerald-400">$${priceData.finalPrice.toLocaleString()}</span>
                            ` : `
                                <span class="text-lg font-extrabold text-white">$${priceData.finalPrice.toLocaleString()}</span>
                            `}
                        </div>
                        <button onclick="addToCart(${product.id})" class="bg-slate-700 border border-slate-600 hover:bg-emerald-600 hover:border-emerald-500 text-white px-3.5 py-2 rounded-xl text-xs font-semibold shadow-md transition-all active:scale-95">
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Renderizado de Recetas (Adaptado a Modo Noche)
function renderRecipes() {
    const container = document.getElementById('recipe-grid');
    if (!container) return;

    container.innerHTML = recipes.map((recipe, index) => `
        <div class="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:shadow-lg transition-all flex flex-col group">
            <div class="h-52 overflow-hidden bg-slate-900">
                <img src="${recipe.image}" alt="${recipe.title}" loading="lazy" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity">
            </div>
            <div class="p-6 flex flex-col flex-grow justify-between">
                <div>
                    <h3 class="font-bold text-white text-lg">${recipe.title}</h3>
                    <p class="text-slate-400 text-sm mt-2">${recipe.desc}</p>
                </div>
                <button onclick="openRecipeModal(${index})" class="mt-4 text-emerald-500 font-semibold text-sm hover:text-emerald-400 inline-flex items-center space-x-1">
                    <span>Leer consejos</span>
                    <i class="fa-solid fa-chevron-right text-xs"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Modales de Receta
function openRecipeModal(index) {
    const recipe = recipes[index];
    const modal = document.getElementById('recipe-modal');
    const content = document.getElementById('recipe-modal-content');
    if (!modal || !content || !recipe) return;

    content.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-48 object-cover rounded-xl mb-4 opacity-90">
        <h3 class="text-xl font-bold text-white mb-2">${recipe.title}</h3>
        <p class="text-slate-300 text-sm leading-relaxed">${recipe.detail}</p>
    `;
    modal.classList.remove('hidden');
}

function closeRecipeModal() {
    const modal = document.getElementById('recipe-modal');
    if (modal) modal.classList.add('hidden');
}

// Acordeón FAQ
function toggleFaq(id) {
    const content = document.getElementById(`faq-content-${id}`);
    const icon = document.getElementById(`faq-icon-${id}`);
    if (!content || !icon) return;

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
    } else {
        content.classList.add('hidden');
        icon.classList.remove('rotate-180');
    }
}

// ==========================================
// LÓGICA DEL CARRITO Y VOUCHERS
// ==========================================
function toggleCartModal() {
    const modal = document.getElementById('cart-modal');
    const panel = document.getElementById('cart-panel');
    if (!modal || !panel) return;

    if (modal.classList.contains('pointer-events-none')) {
        modal.classList.remove('pointer-events-none', 'opacity-0');
        panel.classList.remove('translate-x-full');
    } else {
        modal.classList.add('pointer-events-none', 'opacity-0');
        panel.classList.add('translate-x-full');
    }
}

function addToCart(id) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity++;
    } else {
        const product = products.find(p => p.id === id);
        if (product) cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
    showToast('¡Agregado al carrito!');
}

function updateCartQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
    }
    updateCartUI();
}

function applyVoucher() {
    const input = document.getElementById('voucher-input');
    const msg = document.getElementById('voucher-message');
    if (!input || !msg) return;

    const code = input.value.trim().toUpperCase();

    if (VOUCHERS[code]) {
        appliedVoucher = { code, ...VOUCHERS[code] };
        msg.className = "text-xs mt-1 font-semibold text-emerald-500 block";
        msg.innerText = `¡Voucher "${code}" aplicado! (Aplica solo a productos sin oferta)`;
    } else {
        appliedVoucher = null;
        msg.className = "text-xs mt-1 font-semibold text-red-400 block";
        msg.innerText = "Voucher inválido o expirado.";
    }
    updateCartUI();
}

function updateCartUI() {
    const badge = document.getElementById('cart-badge');
    const cartContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    if (!badge || !cartContainer || !totalElement) return;

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    let subtotal = cart.reduce((sum, item) => {
        const priceData = getProductEffectivePrice(item);
        return sum + (priceData.finalPrice * item.quantity);
    }, 0);

    let eligibleSubtotalForVoucher = cart.reduce((sum, item) => {
        const priceData = getProductEffectivePrice(item);
        if (!priceData.hasDiscount) {
            return sum + (priceData.finalPrice * item.quantity);
        }
        return sum;
    }, 0);

    if (totalItems > 0) {
        badge.innerText = totalItems;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="text-slate-500 text-center py-8 text-sm">Tu carrito está vacío.</p>';
        appliedVoucher = null;
        const msg = document.getElementById('voucher-message');
        if (msg) msg.classList.add('hidden');
        const input = document.getElementById('voucher-input');
        if (input) input.value = '';
    } else {
        cartContainer.innerHTML = cart.map(item => {
            const priceData = getProductEffectivePrice(item);

            return `
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div class="flex items-center space-x-3">
                        <img src="${item.image}" class="w-12 h-12 object-cover rounded-lg border border-slate-700">
                        <div>
                            <h4 class="font-bold text-sm text-white">${item.name}</h4>
                            <span class="text-xs text-slate-400">$${priceData.finalPrice.toLocaleString()} c/u</span>
                        </div>
                    </div>
                    <div class="flex items-center space-x-2">
                        <button onclick="updateCartQuantity(${item.id}, -1)" class="w-7 h-7 bg-slate-800 border border-slate-700 rounded-md hover:bg-slate-700 flex items-center justify-center font-bold text-sm text-slate-300 transition-colors">-</button>
                        <span class="text-sm font-semibold text-white w-4 text-center">${item.quantity}</span>
                        <button onclick="updateCartQuantity(${item.id}, 1)" class="w-7 h-7 bg-slate-800 border border-slate-700 rounded-md hover:bg-slate-700 flex items-center justify-center font-bold text-sm text-slate-300 transition-colors">+</button>
                    </div>
                </div>
            `;
        }).join('');
    }

    let rawDiscountAmount = 0;
    if (appliedVoucher && eligibleSubtotalForVoucher > 0) {
        if (appliedVoucher.type === 'percent') {
            rawDiscountAmount = eligibleSubtotalForVoucher * (appliedVoucher.value / 100);
        } else if (appliedVoucher.type === 'fixed') {
            rawDiscountAmount = Math.min(eligibleSubtotalForVoucher, appliedVoucher.value);
        }
    }

    let discountAmount = Math.floor(rawDiscountAmount);
    let finalTotal = roundUpToTen(Math.max(0, subtotal - discountAmount));

    if (discountAmount > 0) {
        totalElement.innerHTML = `
            <div class="text-right">
                <span class="text-xs text-slate-500 line-through block font-normal">Subtotal: $${subtotal.toLocaleString()}</span>
                <span class="text-xs text-emerald-500 block font-semibold">- $${discountAmount.toLocaleString()} (${appliedVoucher.label})</span>
                <span class="text-xl font-extrabold text-white">$${finalTotal.toLocaleString()}</span>
            </div>
        `;
    } else if (appliedVoucher && eligibleSubtotalForVoucher === 0 && cart.length > 0) {
        totalElement.innerHTML = `
            <div class="text-right">
                <span class="text-xs text-amber-500 block font-medium">El voucher no aplica: los productos ya tienen descuento.</span>
                <span class="text-xl font-extrabold text-white">$${subtotal.toLocaleString()}</span>
            </div>
        `;
    } else {
        totalElement.innerText = `$${subtotal.toLocaleString()}`;
    }
}

// Envío a WhatsApp
function sendWhatsAppOrder() {
    if (cart.length === 0) {
        alert('El carrito está vacío');
        return;
    }

    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();

    const timestamp = `${day}${month}${year}`;
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const orderNumber = `GV-${timestamp}-${randomDigits}`;

    let message = `🛒 *NUEVO PEDIDO: ${orderNumber}*\n\n`;
    message += "Hola GourmetVac! Quisiera realizar el siguiente pedido:\n\n";

    let subtotal = 0;
    let eligibleSubtotalForVoucher = 0;

    cart.forEach(item => {
        const priceData = getProductEffectivePrice(item);
        const itemTotal = priceData.finalPrice * item.quantity;
        subtotal += itemTotal;

        if (!priceData.hasDiscount) {
            eligibleSubtotalForVoucher += itemTotal;
        }

        message += `• ${item.name} (x${item.quantity}) - $${itemTotal.toLocaleString()}\n`;
    });
    
    let rawDiscountAmount = 0;
    if (appliedVoucher && eligibleSubtotalForVoucher > 0) {
        if (appliedVoucher.type === 'percent') {
            rawDiscountAmount = eligibleSubtotalForVoucher * (appliedVoucher.value / 100);
        } else if (appliedVoucher.type === 'fixed') {
            rawDiscountAmount = Math.min(eligibleSubtotalForVoucher, appliedVoucher.value);
        }
        const discountAmount = Math.floor(rawDiscountAmount);
        message += `\n🎟️ *Voucher Aplicado (${appliedVoucher.code}):* -$${discountAmount.toLocaleString()} (Solo en productos sin oferta)`;
    }

    let discountAmount = Math.floor(rawDiscountAmount);
    const total = roundUpToTen(Math.max(0, subtotal - discountAmount));
    message += `\n*Total Estimado:* $${total.toLocaleString()}\n\n`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5491127461954?text=${encodedMessage}`, '_blank');
}

// ==========================================
// POPUP DE PROMOCIONES Y DESCUENTOS ACTIVOS
// ==========================================
function checkAndShowDiscountsPopup() {
    const now = new Date();
    const activePromos = TIMED_DISCOUNTS.filter(p => now >= new Date(p.startDate) && now <= new Date(p.endDate));

    if (activePromos.length === 0) return;

    const modal = document.getElementById('discounts-modal');
    const container = document.getElementById('discounts-modal-content');
    if (!modal || !container) return;

    container.innerHTML = activePromos.map(promo => `
        <div class="bg-slate-800 border border-slate-700 p-4 rounded-xl">
            <div class="flex items-center justify-between mb-1">
                <span class="font-bold text-emerald-400 text-sm">${promo.title}</span>
                <span class="bg-emerald-600 text-white font-extrabold text-xs px-2 py-0.5 rounded-md shadow-sm">
                    -${promo.discountPercent}% OFF
                </span>
            </div>
            <p class="text-xs text-slate-300 mb-2">${promo.description}</p>
            <div class="text-[10px] text-slate-500 font-semibold flex items-center space-x-1">
                <i class="fa-regular fa-clock"></i>
                <span>Válido hasta: ${new Date(promo.endDate).toLocaleDateString()}</span>
            </div>
        </div>
    `).join('');

    setTimeout(() => {
        modal.classList.remove('hidden');
    }, 1000);
}

function closeDiscountsModal() {
    const modal = document.getElementById('discounts-modal');
    if (modal) modal.classList.add('hidden');
}

function showToast(message) {
    const toast = document.getElementById('toast-notification');
    const toastMsg = document.getElementById('toast-message');
    if (!toast || !toastMsg) return;

    toastMsg.innerText = message;
    toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
    
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
    }, 2500);
}
// ==========================================
// LÓGICA DEL MODAL DE PRODUCTO
// ==========================================
function openProductModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const modal = document.getElementById('product-modal');
    const content = document.getElementById('product-modal-content');
    const priceData = getProductEffectivePrice(product);

    // Construimos el interior del modal dinámicamente
    content.innerHTML = `
        <div class="relative h-64 sm:h-72 shrink-0">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
            ${priceData.hasDiscount ? `
                <span class="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    -${priceData.discountPercent}% OFF
                </span>
            ` : ''}
        </div>
        
        <div class="p-6 flex flex-col gap-4">
            <div>
                <span class="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">${product.category}</span>
                <h3 class="text-xl font-bold text-white mt-1 leading-tight">${product.name}</h3>
            </div>

            <p class="text-sm text-slate-300 leading-relaxed">${product.description}</p>

            <div class="flex items-center space-x-4 py-3 border-y border-slate-700/50">
                <div class="flex items-center space-x-2 text-slate-400 text-sm">
                    <i class="fa-solid fa-scale-balanced text-emerald-500"></i>
                    <span>${product.weight}</span>
                </div>
                <div class="flex items-center space-x-2 text-slate-400 text-sm">
                    <i class="fa-solid fa-fire-burner text-emerald-500"></i>
                    <span>${product.prep}</span>
                </div>
            </div>

            <div class="flex items-center justify-between mt-2">
                <div>
                    ${priceData.hasDiscount ? `
                        <span class="text-xs text-slate-500 line-through block font-medium">$${priceData.originalPrice.toLocaleString()}</span>                         <span class="text-2xl font-extrabold text-emerald-400">$${priceData.finalPrice.toLocaleString()}</span>
                    ` : `
                        <span class="text-2xl font-extrabold text-white">$${priceData.finalPrice.toLocaleString()}</span>
                    `}
                </div>
                <button onclick="addToCartAndCloseModal(${product.id})" class="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-emerald-900/50 transition-all active:scale-95 flex items-center space-x-2">
                    <i class="fa-solid fa-cart-plus"></i>
                    <span>Agregar</span>
                </button>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
}

function closeProductModal() {
    const modal = document.getElementById('product-modal');
    if (modal) modal.classList.add('hidden');
}

// Agrega al carrito y cierra el modal para seguir comprando
function addToCartAndCloseModal(id) {
    addToCart(id);
    closeProductModal();
}