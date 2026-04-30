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

// свайпер hero

document.addEventListener('DOMContentLoaded', function() {
    const swiperContainer = document.querySelector('.swiper-container');
    if (!swiperContainer) return;
    
    const wrapper = swiperContainer.querySelector('.swiper-wrapper');
    const slides = swiperContainer.querySelectorAll('.swiper-slide');
    const prevBtn = swiperContainer.querySelector('.swiper-button-prev');
    const nextBtn = swiperContainer.querySelector('.swiper-button-next');
    const pagination = swiperContainer.querySelector('.swiper-pagination');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    // Create pagination bullets
    slides.forEach((_, index) => {
        const bullet = document.createElement('button');
        bullet.className = 'swiper-pagination-bullet' + (index === 0 ? ' swiper-pagination-bullet-active' : '');
        bullet.setAttribute('aria-label', 'Перейти к слайду ' + (index + 1));
        bullet.addEventListener('click', () => goToSlide(index));
        pagination.appendChild(bullet);
    });
    
    const bullets = pagination.querySelectorAll('.swiper-pagination-bullet');
    
    // Update slides position
    function updateSlides() {
        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update bullets
        bullets.forEach((bullet, index) => {
            bullet.classList.toggle('swiper-pagination-bullet-active', index === currentIndex);
        });
    }
    
    // Go to specific slide
    function goToSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        currentIndex = index;
        updateSlides();
    }
    
    // Next slide
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    // Previous slide
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Keyboard navigation
    swiperContainer.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
    
    // Touch/Swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    swiperContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    swiperContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchStartX - touchEndX > swipeThreshold) {
            nextSlide();
        }
        if (touchEndX - touchStartX > swipeThreshold) {
            prevSlide();
        }
    }

    updateSlides();
});

// ===== КАРУСЕЛЬ ОТЗЫВОВ =====

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.reviews-carousel');
    if (!carousel) return;

    const track = carousel.querySelector('.carousel-track');
    const slides = track.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    const totalSlides = slides.length;
    let currentIndex = 0;

    // Берём ширину трека ДО того как делаем display:flex — пока слайды ещё не распёрли его
    var slideWidth = track.offsetWidth;

    // Настраиваем track как flex-контейнер для плавного слайда
    track.style.display = 'flex';
    track.style.transition = 'transform 0.4s ease';

    // Каждый слайд — фиксированная ширина в px, чтобы трек не растягивался
    slides.forEach(function(slide) {
        slide.style.minWidth = slideWidth + 'px';
        slide.style.width = slideWidth + 'px';
        slide.style.flexShrink = '0';
        slide.style.display = 'flex';
    });

    // Пересчитываем ширину при ресайзе окна
    window.addEventListener('resize', function() {
        slideWidth = track.offsetWidth;
        slides.forEach(function(slide) {
            slide.style.minWidth = slideWidth + 'px';
            slide.style.width = slideWidth + 'px';
        });
        track.style.transition = 'none';
        track.style.transform = 'translateX(-' + (currentIndex * slideWidth) + 'px)';
        setTimeout(function() { track.style.transition = 'transform 0.4s ease'; }, 50);
    });

    // Создаём контейнер для точек сразу после карусели
    var dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots';
    carousel.insertAdjacentElement('afterend', dotsContainer);

    // Генерируем точки
    slides.forEach(function(_, i) {
        var dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' is-active' : '');
        dot.setAttribute('aria-label', 'Слайд ' + (i + 1));
        dot.addEventListener('click', function() { goTo(i); });
        dotsContainer.appendChild(dot);
    });

    var dots = dotsContainer.querySelectorAll('.carousel-dot');

    function updateDots() {
        dots.forEach(function(dot, i) {
            dot.classList.toggle('is-active', i === currentIndex);
        });
    }

    function goTo(index) {
        currentIndex = (index + totalSlides) % totalSlides;
        track.style.transform = 'translateX(-' + (currentIndex * slideWidth) + 'px)';
        updateDots();
    }

    // Показываем первый слайд
    goTo(0);

    if (prevBtn) prevBtn.addEventListener('click', function() { goTo(currentIndex - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function() { goTo(currentIndex + 1); });

    // Touch / swipe поддержка
    var touchStartX = 0;

    track.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', function(e) {
        var diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
            goTo(diff > 0 ? currentIndex + 1 : currentIndex - 1);
        }
    }, { passive: true });
});

// popap

document.addEventListener('DOMContentLoaded', function() {
  const callbackModal = document.getElementById('callbackModal');
  const closeBtn = callbackModal.querySelector('.callback-modal__close');
  const overlay = callbackModal.querySelector('.callback-modal__overlay');
  const form = document.getElementById('callbackForm');
  const phoneInput = document.getElementById('phoneInput');
  const triggerButtons = document.querySelectorAll('.btn-popap, .btn-popup, .open-callback-modal');


  phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 0) {
      if (value[0] === '7' || value[0] === '8') {
        value = value.substring(1);
      }
    }
    
    let formattedValue = '';
    if (value.length > 0) {
      formattedValue = '(' + value.substring(0, 3);
    }
    if (value.length >= 3) {
      formattedValue += ') ' + value.substring(3, 6);
    }
    if (value.length >= 6) {
      formattedValue += '-' + value.substring(6, 8);
    }
    if (value.length >= 8) {
      formattedValue += '-' + value.substring(8, 10);
    }
    
    e.target.value = formattedValue;
  });

  function openModal() {
    callbackModal.classList.add('is-active');
    document.body.classList.add('modal-open');
    
    setTimeout(() => {
      phoneInput.focus();
    }, 300);
  }
  function closeModal() {
    callbackModal.classList.remove('is-active');
    document.body.classList.remove('modal-open');
  }
  triggerButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      openModal();
    });
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && callbackModal.classList.contains('is-active')) {
      closeModal();
    }
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const phone = phoneInput.value;
    const checkbox = form.querySelector('input[type="checkbox"]');
    
    if (!checkbox.checked) {
      alert('Пожалуйста, примите условия');
      return;
    }
    
    if (phone.length < 18) {
      alert('Пожалуйста, введите корректный номер телефона');
      phoneInput.focus();
      return;
    }
    
    alert('Спасибо! Мы перезвоним вам в ближайшее время.');
    closeModal();
    form.reset();
  });
});

// popap - two
document.addEventListener('DOMContentLoaded', function() {
  const questionModal = document.getElementById('questionModal');
  const closeBtn = questionModal.querySelector('.question-modal__close');
  const overlay = questionModal.querySelector('.question-modal__overlay');
  const form = document.getElementById('questionForm');
  const phoneInput = document.getElementById('questionPhone');
  const triggerButtons = document.querySelectorAll('.btn-popap-two');

  phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 0) {
      if (value[0] === '7' || value[0] === '8') {
        value = value.substring(1);
      }
    }
    
    let formattedValue = '';
    if (value.length > 0) {
      formattedValue = '(' + value.substring(0, 3);
    }
    if (value.length >= 3) {
      formattedValue += ') ' + value.substring(3, 6);
    }
    if (value.length >= 6) {
      formattedValue += '-' + value.substring(6, 8);
    }
    if (value.length >= 8) {
      formattedValue += '-' + value.substring(8, 10);
    }
    
    e.target.value = formattedValue;
  });

  function openModal() {
    questionModal.classList.add('is-active');
    document.body.classList.add('question-modal-open');
    
    setTimeout(() => {
      document.getElementById('questionName').focus();
    }, 300);
  }

  function closeModal() {
    questionModal.classList.remove('is-active');
    document.body.classList.remove('question-modal-open');
  }

  triggerButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      openModal();
    });
  });

  closeBtn.addEventListener('click', closeModal);
  
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && questionModal.classList.contains('is-active')) {
      closeModal();
    }
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('questionName').value;
    const phone = phoneInput.value;
    const question = document.getElementById('questionText').value;
    const checkbox = form.querySelector('input[type="checkbox"]');
    
    if (!checkbox.checked) {
      alert('Пожалуйста, примите условия');
      return;
    }
    
    if (phone.length < 18) {
      alert('Пожалуйста, введите корректный номер телефона');
      phoneInput.focus();
      return;
    }
    
    console.log('Question form submitted:', { name, phone, question });

    alert('Спасибо за ваш вопрос! Мы свяжемся с вами в ближайшее время.');
    closeModal();
    form.reset();
  });
}); 