
// 更新 footer 年份
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

  // scroll reveal
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.14 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // 圖片上傳預覽 (about)
  const imgUpload = document.getElementById('imgUpload');
  if (imgUpload) {
    imgUpload.addEventListener('change', (ev) => {
      const f = ev.target.files[0];
      if (!f) return;
      const img = document.querySelector('.about-media img');
      img.src = URL.createObjectURL(f);
    });
  }

  // 簡單表單送出（前端模擬）
  const form = document.getElementById('contactForm');
  if (form) form.addEventListener('submit', (e) => {
    e.preventDefault();
    // 這裡可以用 fetch 上傳到你自己後端
    alert('感謝！表單已模擬送出（請自行接後端）');
    form.reset();
  });

  // menu 按鈕 (手機)
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.querySelector('.nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
      if (nav.classList.contains('open')) {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.right = '1rem';
        nav.style.top = '56px';
        nav.style.background = 'white';
        nav.style.padding = '0.5rem';
        nav.style.borderRadius = '10px';
        nav.style.boxShadow = '0 8px 30px rgba(10,40,80,0.08)';
      } else {
        nav.removeAttribute('style');
      }
    });
  }

  // touch ripple effect
  document.querySelectorAll('.touch-btn').forEach(btn => {
    btn.classList.add('ripple');
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const d = Math.max(rect.width, rect.height) * 2;
      const x = e.clientX - rect.left - d / 2; const y = e.clientY - rect.top - d / 2;
      const ripple = document.createElement('span');
      ripple.style.position = 'absolute'; ripple.style.left = x + 'px'; ripple.style.top = y + 'px'; ripple.style.width = d + 'px'; ripple.style.height = d + 'px';
      ripple.style.background = 'rgba(3,60,80,0.08)'; ripple.style.borderRadius = '50%'; ripple.style.transform = 'scale(0)'; ripple.style.opacity = '0.9'; ripple.style.pointerEvents = 'none'; ripple.style.transition = 'transform .6s ease,opacity .6s ease';
      this.appendChild(ripple);
      requestAnimationFrame(() => { ripple.style.transform = 'scale(1)'; ripple.style.opacity = '0'; });
      setTimeout(() => ripple.remove(), 700);
    });
  });

  // 可拖曳或排序作品（簡單示範，可擴充）
  // 例如可結合 SortableJS library
});

