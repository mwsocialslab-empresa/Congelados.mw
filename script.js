// Datos del catálogo con imágenes de alta calidad
const products = [
    { id: 1, name: 'Bife de Chorizo Madurado', category: 'Carnes', price: 4500, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', featured: true },
    { id: 2, name: 'Lomo Fino Marinado', category: 'Carnes', price: 5200, image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80', featured: false },
    { id: 3, name: 'Pechuga de Pollo a las Hierbas', category: 'Aves', price: 2800, image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=600&q=80', featured: true },
    { id: 4, name: 'Salmón Noruego Sellado', category: 'Pescados', price: 6800, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80', featured: true },
    { id: 5, name: 'Mix de Vegetales Grillados', category: 'Vegetales', price: 1900, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80', featured: false },
    { id: 6, name: 'Bondiola de Cerdo a la Miel', category: 'Carnes', price: 3900, image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80', featured: false },
    { id: 7, name: 'Espárragos y Zanahorias Baby', category: 'Vegetales', price: 2100, image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=600&q=80', featured: false },
    { id: 8, name: 'Costillitas BBQ Sous-Vide', category: 'Platos Listos', price: 4800, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', featured: true }
];

// Datos de recetas
const recipes = [
    {
        title: 'Regeneración Perfecta de Carnes',
        desc: 'Aprende a calentar tus cortes al vacío sin perder término ni jugosidad.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
        detail: 'Sumerge la bolsa sellada en agua tibia a 60°C durante 15 minutos. Luego retira, seca la superficie del corte con papel absorbente y sella a fuego alto en sartén por 1 minuto por lado para una costra crujiente.'
    },
    {
        title: 'Cocción Sous-Vide en Casa',
        desc: 'Consigue la textura exacta de restaurante usando agua a temperatura controlada.',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
        detail: 'Al cocinar al vacío, las proteínas no pierden humedad ni volumen. Mantén agua constante entre 55°C y 65°C según el término deseado. Es la forma más segura y sabrosa de cocinar.'
    },
    {
        title: 'Conservación y Congelado Correcto',
        desc: 'Optimiza el tiempo en tu refrigerador extendiendo la vida útil de tus alimentos.',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
        detail: 'El envasado al vacío retira el oxígeno evitando la oxidación y quemaduras por congelación. Tus vegetales y carnes pueden durar hasta 3 veces más tiempo en óptimo estado.'
    }
];

let cart = [];
let currentSlide = 0;
let selectedCategory = 'Todos';
let carouselInterval = null;

// Inicialización de la app
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    renderCategories();
    renderProducts();
    renderFeatured();
    renderRecipes();
});

// Menú móvil
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
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
        btn.className = `w-3 h-3 rounded-full transition-all ${i === 0 ? 'bg-white w-6' : 'bg-white/50'}`;
        btn.onclick = () => goToSlide(i);
        indicatorsContainer.appendChild(btn);
    }

    if (carouselInterval) clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
        nextSlide();
    }, 6000);
}

function updateCarousel() {
    const wrapper = document.getElementById('slides-wrapper');
    const indicators = document.getElementById('carousel-indicators')?.children;
    if (!wrapper) return;

    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;

    if (indicators) {
        Array.from(indicators).forEach((ind, index) => {
            if (index === currentSlide) {
                ind.className = 'w-6 h-3 bg-white rounded-full transition-all';
            } else {
                ind.className = 'w-3 h-3 bg-white/50 rounded-full transition-all';
            }
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

// Renderizado de Categorías
function renderCategories() {
    const container = document.getElementById('category-buttons');
    if (!container) return;

    const categories = ['Todos', ...new Set(products.map(p => p.category))];
    
    container.innerHTML = categories.map(cat => `
        <button onclick="filterCategory('${cat}')" class="px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${selectedCategory === cat ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}">
            ${cat}
        </button>
    `).join('');
}

function filterCategory(cat) {
    selectedCategory = cat;
    renderCategories();
    renderProducts();
}

// Renderizado de Productos del Catálogo con Imágenes
function renderProducts() {
    const container = document.getElementById('product-grid');
    if (!container) return;

    const filtered = selectedCategory === 'Todos' 
        ? products 
        : products.filter(p => p.category === selectedCategory);

    container.innerHTML = filtered.map(product => `
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col justify-between group">
            <div class="relative overflow-hidden h-48 bg-gray-100">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                <span class="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-xs font-bold px-2.5 py-1 rounded-full text-gray-700 shadow-sm">${product.category}</span>
            </div>
            <div class="p-5 flex flex-col flex-grow justify-between">
                <div>
                    <h3 class="font-bold text-gray-900 text-lg group-hover:text-emerald-600 transition-colors">${product.name}</h3>
                    <p class="text-xs text-gray-500 mt-1">Envasado al vacío en origen</p>
                </div>
                <div class="mt-4 flex items-center justify-between">
                    <span class="text-xl font-extrabold text-gray-900">$${product.price.toLocaleString()}</span>
                    <button onclick="addToCart(${product.id})" class="bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white p-2.5 rounded-xl transition-all shadow-sm">
                        <i class="fa-solid fa-cart-plus text-base"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Renderizado de Destacados
function renderFeatured() {
    const container = document.getElementById('featured-grid');
    if (!container) return;

    const featured = products.filter(p => p.featured);

    container.innerHTML = featured.map(product => `
        <div class="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row">
            <img src="${product.image}" alt="${product.name}" class="w-full sm:w-2/5 h-40 sm:h-auto object-cover">
            <div class="p-5 flex flex-col justify-between flex-grow">
                <div>
                    <span class="inline-block text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md mb-2">Popular</span>
                    <h3 class="font-bold text-gray-900 text-base">${product.name}</h3>
                    <p class="text-xs text-gray-500 mt-1">Frescura garantizada de 15 a 30 días.</p>
                </div>
                <div class="mt-4 flex items-center justify-between">
                    <span class="text-lg font-extrabold text-gray-900">$${product.price.toLocaleString()}</span>
                    <button onclick="addToCart(${product.id})" class="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md transition-all">
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Renderizado de Recetas
function renderRecipes() {
    const container = document.getElementById('recipe-grid');
    if (!container) return;

    container.innerHTML = recipes.map((recipe, index) => `
        <div class="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-all flex flex-col">
            <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-48 object-cover">
            <div class="p-6 flex flex-col flex-grow justify-between">
                <div>
                    <h3 class="font-bold text-gray-900 text-lg">${recipe.title}</h3>
                    <p class="text-gray-600 text-sm mt-2">${recipe.desc}</p>
                </div>
                <button onclick="openRecipeModal(${index})" class="mt-4 text-emerald-600 font-semibold text-sm hover:text-emerald-700 inline-flex items-center space-x-1">
                    <span>Leer consejos</span>
                    <i class="fa-solid fa-chevron-right text-xs"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Modales y Carrito
function openRecipeModal(index) {
    const recipe = recipes[index];
    const modal = document.getElementById('recipe-modal');
    const content = document.getElementById('recipe-modal-content');
    if (!modal || !content || !recipe) return;

    content.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-40 object-cover rounded-xl mb-4">
        <h3 class="text-xl font-bold text-gray-900 mb-2">${recipe.title}</h3>
        <p class="text-gray-600 text-sm leading-relaxed">${recipe.detail}</p>
    `;
    modal.classList.remove('hidden');
}

function closeRecipeModal() {
    const modal = document.getElementById('recipe-modal');
    if (modal) modal.classList.add('hidden');
}

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

function updateCartUI() {
    const badge = document.getElementById('cart-badge');
    const cartContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    if (!badge || !cartContainer || !totalElement) return;

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (totalItems > 0) {
        badge.innerText = totalItems;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="text-gray-400 text-center py-8 text-sm">Tu carrito está vacío.</p>';
    } else {
        cartContainer.innerHTML = cart.map(item => `
            <div class="flex items-center justify-between border-b pb-3">
                <div class="flex items-center space-x-3">
                    <img src="${item.image}" class="w-12 h-12 object-cover rounded-lg">
                    <div>
                        <h4 class="font-bold text-sm text-gray-800">${item.name}</h4>
                        <span class="text-xs text-gray-500">$${item.price.toLocaleString()} c/u</span>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <button onclick="updateCartQuantity(${item.id}, -1)" class="w-6 h-6 bg-gray-100 rounded hover:bg-gray-200 flex items-center justify-center font-bold text-xs text-gray-600">-</button>
                    <span class="text-sm font-semibold">${item.quantity}</span>
                    <button onclick="updateCartQuantity(${item.id}, 1)" class="w-6 h-6 bg-gray-100 rounded hover:bg-gray-200 flex items-center justify-center font-bold text-xs text-gray-600">+</button>
                </div>
            </div>
        `).join('');
    }

    totalElement.innerText = `$${totalPrice.toLocaleString()}`;
}

function sendWhatsAppOrder() {
    if (cart.length === 0) {
        alert('El carrito está vacío');
        return;
    }

    let message = "Hola GourmetVac! Quisiera realizar el siguiente pedido:\n\n";
    cart.forEach(item => {
        message += `• ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toLocaleString()}\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\n*Total Estimado:* $${total.toLocaleString()}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5491127461954?text=${encodedMessage}`, '_blank');
}