document.addEventListener("DOMContentLoaded", function() {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.classList.add('animate-hero');
  }
  const heroImg = document.querySelector('.hero-profile-pic');
  if (heroImg) {
    setTimeout(() => {
      heroImg.classList.add('animate-hero-img');
    }, 200);
  }
});

// Carousel infinite scroll logic
(function() {
  const track = document.querySelector('.carousel-track');
  if (track) {
    // Duplicate the items to allow seamless infinite scroll
    const items = Array.from(track.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });
  }
})();

// Appear on scroll for first project card
(function() {
  const card = document.querySelector('.project-card.appear-on-scroll');
  if (!card) return;
  const observer = new window.IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        card.classList.add('visible');
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );
  observer.observe(card);
})();
