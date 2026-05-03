document.addEventListener("DOMContentLoaded", () => {

  const carousel = document.querySelector(".carousel");
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const dots = document.querySelectorAll(".dot");

  let index = 0;
  let auto;

  if (!track || slides.length === 0) return;

  // =====================
  // ACTUALIZAR CARRUSEL
  // =====================
function updateCarousel() {

  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });

  dots.forEach(d => d.classList.remove("active"));

  if (dots[index]) {
    dots[index].classList.add("active");
  }
}

  // =====================
  // NEXT / PREV
  // =====================
  function nextSlide() {
    index = (index + 1) % slides.length;
    updateCarousel();
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  // =====================
  // AUTOPLAY (CONTROLADO)
  // =====================
  function startAuto() {
    stopAuto();
    auto = setInterval(nextSlide, 4000);
  }

  function stopAuto() {
    clearInterval(auto);
  }

  // =====================
  // EVENTOS BOTONES
  // =====================
  nextBtn?.addEventListener("click", () => {
    nextSlide();
    startAuto();
  });

  prevBtn?.addEventListener("click", () => {
    prevSlide();
    startAuto();
  });

  // =====================
  // DOTS
  // =====================
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      updateCarousel();
      startAuto();
    });
  });

  // =====================
  // PAUSA HOVER
  // =====================
  carousel?.addEventListener("mouseenter", stopAuto);
  carousel?.addEventListener("mouseleave", startAuto);

  // =====================
  // TOUCH SWIPE (MÓVIL PRO)
  // =====================
  let startX = 0;

  carousel?.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  carousel?.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) nextSlide();
    if (endX - startX > 50) prevSlide();

    startAuto();
  });

  // INIT
  updateCarousel();
  startAuto();

});