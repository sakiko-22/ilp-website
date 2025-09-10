// スクロールアニメーション
window.addEventListener("scroll", function () {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  const scrollY = window.scrollY;
  hero.style.backgroundPositionY = `${scrollY * 0.5}px`;
});
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll(".service-card").forEach(card => {
  observer.observe(card);
});
