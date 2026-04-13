// ============================================
// L-MATH 乐学数学 - 主脚本
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // 导航栏滚动效果
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  }

  // 滚动动画 - Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 观察所有需要动画的元素
  document.querySelectorAll('.grade-card, .feature-card, .section-title').forEach(el => {
    el.classList.add('fade-in-up');
    observer.observe(el);
  });

  // 年级卡片悬浮粒子效果
  document.querySelectorAll('.grade-card').forEach(card => {
    card.addEventListener('mouseenter', (e) => {
      createParticle(e);
    });
  });
});

// 创建小粒子效果
function createParticle(event) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  for (let i = 0; i < 5; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--primary);
      pointer-events: none;
      z-index: 10;
      left: ${x}px;
      top: ${y}px;
      opacity: 1;
      transition: all 0.6s ease-out;
    `;
    card.appendChild(particle);

    const angle = (Math.PI * 2 / 5) * i;
    const distance = 30 + Math.random() * 20;
    particle.style.left = `${x + Math.cos(angle) * distance}px`;
    particle.style.top = `${y + Math.sin(angle) * distance}px`;
    particle.style.opacity = '0';

    setTimeout(() => particle.remove(), 600);
  }
}
