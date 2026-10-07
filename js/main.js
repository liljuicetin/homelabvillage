const header = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

menu?.setAttribute("aria-expanded", "false");
menu?.addEventListener("click", () => {
  const open = header.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav nav a").forEach(link => {
  link.addEventListener("click", () => {
    header.classList.remove("open");
    menu?.setAttribute("aria-expanded", "false");
  });
});

const ambient = document.createElement("div");
ambient.className = "ambient-orbs";
ambient.setAttribute("aria-hidden", "true");
ambient.innerHTML = "<span></span><span></span><span></span>";
document.body.prepend(ambient);

if (!reduceMotion) {
  let pointerFrame;
  window.addEventListener("pointermove", event => {
    cancelAnimationFrame(pointerFrame);
    pointerFrame = requestAnimationFrame(() => {
      document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
      document.documentElement.style.setProperty("--my", `${event.clientY}px`);
    });
  }, { passive: true });

  const revealTargets = document.querySelectorAll(
    ".flow article, .cards > *, .lower > *, .resources-page-hero > *, .resources-page-library > *, .about-page-content > *"
  );
  revealTargets.forEach((element, index) => {
    element.classList.add("reveal-ready");
    element.style.transitionDelay = `${Math.min(index % 5, 4) * 80}ms`;
  });

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -25px" });
  revealTargets.forEach(element => revealObserver.observe(element));

  const tiltTargets = document.querySelectorAll(".card, .resource-card, .resource-index-card, .about-page-content");
  tiltTargets.forEach(card => {
    card.addEventListener("pointermove", event => {
      if (event.pointerType === "touch") return;
      const bounds = card.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const rotateY = ((x / bounds.width) - 0.5) * 3;
      const rotateX = (0.5 - (y / bounds.height)) * 3;
      card.style.setProperty("--card-x", `${x}px`);
      card.style.setProperty("--card-y", `${y}px`);
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("pointerdown", event => {
    const bounds = button.getBoundingClientRect();
    const diameter = Math.max(bounds.width, bounds.height) * 1.8;
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = `${diameter}px`;
    ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - bounds.left - diameter / 2}px`;
    ripple.style.top = `${event.clientY - bounds.top - diameter / 2}px`;
    button.append(ripple);
    ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
  });
});

const progress = document.createElement("div");
progress.className = "scroll-progress";
progress.setAttribute("aria-hidden", "true");
document.body.prepend(progress);

const particles = document.createElement("div");
particles.className = "particles";
particles.setAttribute("aria-hidden", "true");
particles.innerHTML = Array.from({ length: 18 }, (_, index) => {
  const left = (index * 37) % 100;
  const delay = -((index * 1.7) % 12);
  return `<i style="left:${left}%;animation-delay:${delay}s"></i>`;
}).join("");
document.body.prepend(particles);

const updateScrollEffects = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
};

updateScrollEffects();
window.addEventListener("scroll", updateScrollEffects, { passive: true });