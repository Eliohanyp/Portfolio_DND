// ===== TYPEWRITER EFFECT =====
function runTypewriter() {
    const textElement = document.getElementById('typing-text');
    if (!textElement) return;
    
    const phrases = [
        "Inteligência Artificial para Florestas.",
        "Visão Computacional Avançada.",
        "Análise Geoespacial em Tempo Real.",
        "Soluções de Machine Learning.",
        "Tecnologia Florestal 4.0."
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; 
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

// ===== RENDER PRODUCTS =====
function renderProducts() {
    const productsContainer = document.querySelector('.products-container');
    if (!productsContainer) {
        console.error('Products container not found');
        return;
    }
    
    // Try to get productsData from different sources
    let data;
    if (typeof productsData !== 'undefined') {
        data = productsData;
    } else if (typeof window.productsData !== 'undefined') {
        data = window.productsData;
    } else {
        console.error('productsData not found. Make sure productsData.js is loaded.');
        productsContainer.innerHTML = '<p style="color: #999; text-align: center; padding: 4rem;">Carregando produtos...</p>';
        return;
    }
    
    if (!data || data.length === 0) {
        console.error('productsData is empty');
        return;
    }
    
    console.log(`Rendering ${data.length} products`);
    
    productsContainer.innerHTML = '';
    
    data.forEach((product, index) => {
        const showcase = document.createElement('div');
        showcase.classList.add('product-showcase', 'hidden');
        showcase.style.animationDelay = `${index * 0.15}s`;
        
        // Get first 5 features
        const featuresList = product.features.slice(0, 5).map(feature => 
            `<li>${feature}</li>`
        ).join('');
        
        // Use high-resolution image
        const imageUrl = product.image || 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80';
        
        showcase.innerHTML = `
            <div class="product-showcase-image">
                <img src="${imageUrl}" alt="${product.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80'">
            </div>
            <div class="product-showcase-content">
                <div class="product-showcase-number">0${index + 1}</div>
                <h2 class="product-showcase-title">${product.title}</h2>
                <p class="product-showcase-tagline">${product.tagline}</p>
                <ul class="product-showcase-features">
                    ${featuresList}
                </ul>
                <a href="produto.html?id=${product.id}" class="product-showcase-cta">
                    Ver Detalhes
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        
        productsContainer.appendChild(showcase);
    });
    
    // Initialize scroll animations
    initScrollAnimation();
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('hidden');
                // Stop observing once shown
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe all hidden elements
    setTimeout(() => {
        document.querySelectorAll('.hidden').forEach((el) => {
            observer.observe(el);
        });
    }, 100);
}

// ===== NAVBAR SCROLL EFFECT =====
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// ===== SMOOTH SCROLLING =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            // Only process if href is a valid selector (starts with # and is not empty)
            if (href && href.startsWith('#') && href.length > 1) {
                try {
                    const target = document.querySelector(href);
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                } catch (error) {
                    console.log('Invalid selector:', href);
                }
            }
        });
    });
}

// ===== MODAL HANDLING =====
function initModal() {
    const modal = document.getElementById('demo-modal');
    const closeBtn = document.querySelector('.modal-close');
    const demoForm = document.getElementById('demo-form');
    const contactForm = document.getElementById('contact-form');
    
    if (!modal) return;
    
    // Open modal from buttons
    document.querySelectorAll('[href="#contato"], .btn-secondary').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.getAttribute('href') === '#contato' || btn.classList.contains('btn-secondary')) {
                e.preventDefault();
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Form submissions
    if (demoForm) {
        demoForm.addEventListener('submit', handleFormSubmit);
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Here you would normally send to a server
    console.log('Form submitted:', data);
    
    // Show success message (you can customize this)
    alert('Obrigado! Sua solicitação foi enviada. Entraremos em contato em breve.');
    
    // Reset form
    e.target.reset();
    
    // Close modal if open
    const modal = document.getElementById('demo-modal');
    if (modal && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===== PARALLAX EFFECT =====
function initParallax() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        if (heroSection) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!toggle || !navLinks) return;
    
    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        toggle.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            toggle.classList.remove('active');
        });
    });
}

// ===== INITIALIZE VIDEO BACKGROUND =====
function initVideoBackground() {
    const video1 = document.getElementById('video-01');
    const video2 = document.getElementById('video-02');
    const video3 = document.getElementById('video-03');
    
    if (!video1 || !video2 || !video3) {
        console.log('Not all videos found, falling back to single video');
        const video = document.querySelector('.hero-video-bg');
        if (video) {
            video.play().catch(err => console.log('Video play failed:', err));
        }
        return;
    }
    
    const videos = [video1, video2, video3];
    let currentVideoIndex = 0;
    let currentVideo = videos[currentVideoIndex];
    
    // Função para trocar os vídeos
    function switchVideos() {
        // Remove a classe active do vídeo atual e pausa
        currentVideo.classList.remove('hero-video-active');
        currentVideo.pause();
        currentVideo.currentTime = 0;
        
        // Avança para o próximo vídeo (loop)
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        currentVideo = videos[currentVideoIndex];
        
        // Ativa e reproduz o próximo vídeo
        currentVideo.classList.add('hero-video-active');
        // Garante que o próximo vídeo tenha frame carregado antes de exibir
        const tryPlay = () => currentVideo.play().catch(err => {
            console.log('Video play failed:', err);
        });

        if (currentVideo.readyState >= 2) {
            tryPlay();
        } else {
            // Força o carregamento para evitar tela preta ao trocar
            currentVideo.load();
            currentVideo.addEventListener('canplay', tryPlay, { once: true });
        }
    }
    
    // Quando cada vídeo terminar, troca para o próximo
    videos.forEach((video, index) => {
        video.addEventListener('ended', () => {
            switchVideos();
        });
        
        // Precarrega os vídeos
        video.addEventListener('loadeddata', () => {
            if (index === 0) {
                // Inicia o primeiro vídeo quando carregar
                video.play().catch(err => {
                    console.log('Autoplay prevented, trying to play on user interaction');
                });
            }
        });
        
        // Fallback: se algum vídeo falhar ao carregar
        video.addEventListener('error', () => {
            console.log(`Video ${index + 1} failed to load`);
            // Se o vídeo atual falhar, tenta o próximo
            if (video === currentVideo) {
                switchVideos();
            }
        });
    });
    
    // Tentar reproduzir quando o usuário interagir com a página
    document.addEventListener('click', () => {
        if (currentVideo.paused) {
            currentVideo.play().catch(err => console.log('Video play failed:', err));
        }
    }, { once: true });
}

// ===== INITIALIZE ON DOM LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the homepage
    const isHomepage = document.getElementById('home') !== null;
    
    // Initialize common functions
    initNavbarScroll();
    initSmoothScroll();
    initModal();
    initMobileMenu();
    
    if (isHomepage) {
        initVideoBackground();
        runTypewriter();
        initParallax();
        
        // Wait for productsData to be available
        const checkAndRender = () => {
            if (typeof productsData !== 'undefined' || typeof window.productsData !== 'undefined') {
                console.log('Products data found, rendering...');
                renderProducts();
                initScrollAnimation();
            } else {
                console.log('Waiting for productsData...');
                setTimeout(checkAndRender, 100);
            }
        };
        
        // Start checking after a short delay
        setTimeout(checkAndRender, 100);
    } else {
        initScrollAnimation();
    }
});

// ===== LOAD PRODUCT DETAILS (for produto.html) =====
function loadProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    
    if (!productId || !window.productsData) return;
    
    const product = productsData.find(p => p.id === productId);
    
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }
    
    // This will be used in produto.html
    window.currentProduct = product;
}

// Export for use in produto.html
if (typeof window !== 'undefined') {
    window.loadProductDetails = loadProductDetails;
}
