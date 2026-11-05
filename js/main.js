document.addEventListener('DOMContentLoaded', () => {
  // 1. 移动端导航菜单切换
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      siteNav.classList.toggle('show');
    });
  }

  // 2. 回到顶部按钮逻辑
  const toTopBtn = document.querySelector('.to-top');
  
  if (toTopBtn) {
    window.addEventListener('scroll', () => {
      // 滚动超过 300px 显示按钮
      if (window.scrollY > 300) {
        toTopBtn.classList.add('show');
      } else {
        toTopBtn.classList.remove('show');
      }
    });

    toTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});