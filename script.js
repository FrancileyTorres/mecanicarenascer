const carouselSlide = document.querySelector('.imagem.home .carousel-slide');
const carouselDotsContainer = document.querySelector('.imagem.home .carousel-dots');

let counter = 0;
const slides = carouselSlide.querySelectorAll('img');
const totalSlides = slides.length;
const slideWidth = carouselSlide.clientWidth;

// Função para mover para o próximo slide
function nextSlide() {
    counter = (counter + 1) % totalSlides;
    updateSlidePosition();
}

// Função para atualizar a posição do slide
function updateSlidePosition() {
    carouselSlide.style.transform = `translateX(-${counter * slideWidth}px)`;
    updateDots();
}

// Função para criar e atualizar os pontos de navegação
function updateDots() {
    const dots = document.querySelectorAll('.imagem.home .dot');
    dots.forEach((dot, index) => {
        if (index === counter) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Adicionando os pontos de navegação
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        counter = i;
        updateSlidePosition();
    });
    carouselDotsContainer.appendChild(dot);
}

updateSlidePosition(); // Garantir que o slide inicial seja exibido corretamente

// Automação do carrossel
let interval = setInterval(nextSlide, 4000); // Troca a cada 7 segundos

// Parar e reiniciar a automação quando o mouse entrar e sair do carrossel
carouselSlide.addEventListener('mouseenter', () => {
    clearInterval(interval);
});

carouselSlide.addEventListener('mouseleave', () => {
    interval = setInterval(nextSlide, 4000);
});
