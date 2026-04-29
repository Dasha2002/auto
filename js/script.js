document.addEventListener('DOMContentLoaded', function() {
  
  // ===== ПЕРЕМЕННЫЕ (объявляем ПЕРВЫМИ!) =====
  const mobileToggle = document.querySelector('.header-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeButtons = document.querySelectorAll('[data-close-menu]');
  const overlay = mobileMenu?.querySelector('.mobile-menu__overlay');
  
  // Проверка наличия элементов
  if (!mobileToggle || !mobileMenu) {
    console.warn('⚠️ Элементы мобильного меню не найдены');
    return;
  }
  
  // ===== ФУНКЦИИ =====
  function openMenu() {
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    console.log('✅ Меню открыто');
  }
  
  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    console.log('❌ Меню закрыто');
  }
  
  // ===== ОБРАБОТЧИКИ =====
  
  // Клик по гамбургеру
  mobileToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('🔘 Клик по гамбургеру');
    const isOpen = mobileMenu.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });
  
  // Клик по кнопкам закрытия
  closeButtons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeMenu();
    });
  });
  
  // Клик по оверлею
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closeMenu();
      }
    });
  }
  
  // Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });
  
  // ===== АККОРДЕОН "УСЛУГИ" =====
  document.querySelectorAll('.mobile-menu__link--parent').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const item = btn.closest('.mobile-menu__item');
      const submenu = item.querySelector('.mobile-submenu');
      const isExpanded = item.getAttribute('aria-expanded') === 'true';
      
      // Закрыть другие
      document.querySelectorAll('.mobile-menu__item[aria-expanded="true"]').forEach(function(other) {
        if (other !== item) {
          other.setAttribute('aria-expanded', 'false');
          const otherSubmenu = other.querySelector('.mobile-submenu');
          if (otherSubmenu) otherSubmenu.setAttribute('hidden', '');
        }
      });
      
      // Переключить текущий
      item.setAttribute('aria-expanded', !isExpanded);
      if (submenu) {
        isExpanded ? submenu.setAttribute('hidden', '') : submenu.removeAttribute('hidden');
      }
    });
  });
  
});