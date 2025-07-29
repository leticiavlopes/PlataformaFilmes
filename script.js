document.addEventListener("DOMContentLoaded", function () {
  // Destaque no menu ao clicar
  const menuItems = document.querySelectorAll(".main-nav ul li a");

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      menuItems.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Efeitos de hover nos ícones
  const icons = document.querySelectorAll(".header-right > div:not(.profile)");
  icons.forEach((icon) => {
    icon.addEventListener("mouseenter", function () {
      this.style.opacity = "0.7";
    });
    icon.addEventListener("mouseleave", function () {
      this.style.opacity = "1";
    });
  });

  // Efeito parallax para a imagem de fundo
  const background = document.querySelector(".background-image");
  window.addEventListener("scroll", function () {
    const scrollPosition = window.pageYOffset;
    background.style.transform = `translateY(${scrollPosition * -0.2}px)`;
  });

  // Funcionalidade do Carrossel Top 10
  const track = document.querySelector(".carousel-track");
  const items = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");

  let currentIndex = 0;
  // A largura do item é apenas a largura do item em si, o gap é tratado separadamente pelo CSS
  const itemWidth = items[0].offsetWidth + 55; // Largura do item + gap

  function updateCarousel() {
    const offset = -currentIndex * itemWidth;
    track.style.transform = `translateX(${offset}px)`;
  }

  // Navegação pelos botões
  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextButton.addEventListener("click", () => {
    // Calcula quantos itens cabem na viewport do carrossel
    const itemsInView = Math.floor(track.parentElement.offsetWidth / itemWidth);
    if (currentIndex < items.length - itemsInView) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Navegação pelas setas do teclado
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      // Seta para a esquerda
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    } else if (event.key === "ArrowRight") {
      // Seta para a direita
      const itemsInView = Math.floor(
        track.parentElement.offsetWidth / itemWidth
      );
      if (currentIndex < items.length - itemsInView) {
        currentIndex++;
        updateCarousel();
      }
    }
  });

  // Ajustar carrossel em redimensionamento
  window.addEventListener("resize", () => {
    updateCarousel(); // Garante que a posição não fique errada
  });
});
