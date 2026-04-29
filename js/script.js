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

// калькулятор
/* ==================== QUIZ LOGIC ==================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // ===== VARIABLES =====
  const form = document.getElementById('car-quiz-form');
  const steps = form.querySelectorAll('.quiz-step');
  const progressBar = document.querySelector('.quiz-progress-bar__fill');
  const progressCounter = document.querySelector('.quiz-progress-info__counter');
  const prevBtn = document.querySelector('.quiz-btn--prev');
  const nextBtn = document.querySelector('.quiz-btn--next');
  const submitBtn = document.querySelector('.quiz-btn--submit');
  const quizSuccess = document.querySelector('.quiz-success');
  
  let currentStep = 1;
  const totalSteps = steps.length;
  
  // ===== FUNCTIONS =====
  
  // Show step by number
  function showStep(stepNumber) {
    steps.forEach(step => {
      step.hidden = parseInt(step.dataset.step) !== stepNumber;
    });
    
    // Update progress
    const progress = (stepNumber / totalSteps) * 100;
    progressBar.style.width = `${progress}%`;
    progressCounter.textContent = `${stepNumber}/${totalSteps}`;
    
    // Update buttons
    prevBtn.disabled = stepNumber === 1;
    
    if (stepNumber === totalSteps) {
      nextBtn.hidden = true;
      submitBtn.hidden = false;
    } else {
      nextBtn.hidden = false;
      submitBtn.hidden = true;
    }
    
    currentStep = stepNumber;
    
    // Focus first input in step
    const firstInput = steps[stepNumber - 1]?.querySelector('input:not([type="hidden"]), textarea');
    firstInput?.focus();
  }
  
  // Validate current step
  function validateStep(stepNumber) {
    const step = document.querySelector(`.quiz-step[data-step="${stepNumber}"]`);
    const errorEl = step.querySelector('.quiz-step__error');
    const requiredInputs = step.querySelectorAll('[required]');
    let isValid = true;
    
    // Clear previous errors
    errorEl.textContent = '';
    step.querySelectorAll('.form-input').forEach(input => {
      input.style.borderColor = '';
    });
    
    // Check required fields
    requiredInputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = 'var(--color-primary)';
        errorEl.textContent = 'Это поле обязательно для заполнения';
      }
    });
    
    // Check custom radio inputs
    const customRadios = step.querySelectorAll('.radio-option__input--custom:checked');
    customRadios.forEach(radio => {
      const customInput = radio.closest('.radio-option--custom')?.querySelector('.radio-option__custom-input');
      if (customInput && !customInput.value.trim()) {
        isValid = false;
        customInput.style.borderColor = 'var(--color-primary)';
        errorEl.textContent = 'Пожалуйста, укажите значение';
      }
    });
    
    // Check phone format
    const phoneInput = step.querySelector('.form-input--phone');
    if (phoneInput && phoneInput.value.trim()) {
      const phonePattern = /^\+7\s?\(?\d{3}\)?\s?\d{3}-\d{2}-\d{2}$/;
      if (!phonePattern.test(phoneInput.value)) {
        isValid = false;
        phoneInput.style.borderColor = 'var(--color-primary)';
        errorEl.textContent = 'Введите корректный номер телефона';
      }
    }
    
    return isValid;
  }
  
  // Next step
  function nextStep() {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        showStep(currentStep + 1);
      }
    }
  }
  
  // Previous step
  function prevStep() {
    if (currentStep > 1) {
      showStep(currentStep - 1);
    }
  }
  
  // Handle custom radio input toggle
  function initCustomRadios() {
    document.querySelectorAll('.radio-option__input--custom').forEach(radio => {
      const customInput = radio.closest('.radio-option--custom')?.querySelector('.radio-option__custom-input');
      
      radio.addEventListener('change', () => {
        if (radio.checked && customInput) {
          customInput.required = true;
          customInput.focus();
        }
      });
      
      // Toggle required on other radios in same group
      const groupName = radio.name;
      document.querySelectorAll(`[name="${groupName}"]:not(.radio-option__input--custom)`).forEach(otherRadio => {
        otherRadio.addEventListener('change', () => {
          if (otherRadio.checked && customInput) {
            customInput.required = false;
          }
        });
      });
    });
  }
  
  // Phone mask
  function initPhoneMask() {
    const phoneInput = document.querySelector('.form-input--phone');
    if (!phoneInput) return;
    
    phoneInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      
      // Remove leading 7 or 8
      if (value.startsWith('7') || value.startsWith('8')) {
        value = value.slice(1);
      }
      
      // Format: (000) 000-00-00
      if (value.length > 0) value = '(' + value;
      if (value.length > 4) value = value.slice(0, 4) + ') ' + value.slice(4);
      if (value.length > 9) value = value.slice(0, 9) + '-' + value.slice(9);
      if (value.length > 12) value = value.slice(0, 12) + '-' + value.slice(12);
      
      e.target.value = value.slice(0, 18);
    });
  }
  
  // Form submission
  function handleSubmit(e) {
    e.preventDefault();
    
    if (validateStep(currentStep)) {
      // Collect form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Handle custom radio values
      document.querySelectorAll('.radio-option__input--custom:checked').forEach(radio => {
        const customInput = radio.closest('.radio-option--custom')?.querySelector('.radio-option__custom-input');
        if (customInput?.value) {
          data[radio.name] = customInput.value;
        }
      });
      
      // Format phone
      if (data.phone) {
        data.phone = '+7 ' + data.phone.replace(/[^\d]/g, '').slice(1);
      }
      
      // Demo: show success
      form.hidden = true;
      quizSuccess.hidden = false;
      
      // In production: send to server
      // fetch('/api/quiz-submit', { method: 'POST', body: JSON.stringify(data) });
      
      console.log('Form submitted:', data);
    }
  }
  
  // ===== EVENT LISTENERS =====
  
  // Navigation buttons
  nextBtn?.addEventListener('click', nextStep);
  prevBtn?.addEventListener('click', prevStep);
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.target.closest('textarea')) {
      e.preventDefault();
      if (!nextBtn.hidden) nextStep();
    }
    if (e.key === 'Escape' && currentStep > 1) {
      prevStep();
    }
  });
  
  // Form submit
  form?.addEventListener('submit', handleSubmit);
  
  // Initialize
  initCustomRadios();
  initPhoneMask();
  showStep(1);
  
});