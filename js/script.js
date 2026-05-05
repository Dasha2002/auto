document.addEventListener("DOMContentLoaded", function () {
  // ===== ПЕРЕМЕННЫЕ (объявляем ПЕРВЫМИ!) =====
  const mobileToggle = document.querySelector(".header-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeButtons = document.querySelectorAll("[data-close-menu]");
  const overlay = mobileMenu?.querySelector(".mobile-menu__overlay");

  // Проверка наличия элементов
  if (!mobileToggle || !mobileMenu) {
    console.warn("⚠️ Элементы мобильного меню не найдены");
    return;
  }

  // ===== ФУНКЦИИ =====
  function openMenu() {
    mobileMenu.classList.add("is-open");
    mobileMenu.setAttribute("aria-hidden", "false");
    mobileToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    console.log("✅ Меню открыто");
  }

  function closeMenu() {
    mobileMenu.classList.remove("is-open");
    mobileMenu.setAttribute("aria-hidden", "true");
    mobileToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    console.log("❌ Меню закрыто");
  }

  // ===== ОБРАБОТЧИКИ =====

  // Клик по гамбургеру
  mobileToggle.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("🔘 Клик по гамбургеру");
    const isOpen = mobileMenu.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  });

  // Клик по кнопкам закрытия
  closeButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeMenu();
    });
  });

  // Клик по оверлею
  document.addEventListener('click', function(e) {
    if (
      mobileMenu.classList.contains('is-open') &&
      !e.target.closest('.mobile-menu__content') &&
      !e.target.closest('.header-toggle')
    ) {
      closeMenu();
    }
  });

  // Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileMenu.classList.contains("is-open")) {
      closeMenu();
    }
  });

  // ===== АККОРДЕОН "УСЛУГИ" =====
  document.querySelectorAll(".mobile-menu__link--parent").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const item = btn.closest(".mobile-menu__item");
      const submenu = item.querySelector(".mobile-submenu");
      const isExpanded = item.getAttribute("aria-expanded") === "true";

      // Закрыть другие
      document.querySelectorAll('.mobile-menu__item[aria-expanded="true"]').forEach(function (other) {
        if (other !== item) {
          other.setAttribute("aria-expanded", "false");
          const otherSubmenu = other.querySelector(".mobile-submenu");
          if (otherSubmenu) otherSubmenu.setAttribute("hidden", "");
        }
      });

      // Переключить текущий
      item.setAttribute("aria-expanded", !isExpanded);
      if (submenu) {
        isExpanded ? submenu.setAttribute("hidden", "") : submenu.removeAttribute("hidden");
      }
    });
  });
});

// калькулятор
/* ==================== QUIZ LOGIC ==================== */

document.addEventListener("DOMContentLoaded", () => {
  // ===== VARIABLES =====
  const form = document.getElementById("car-quiz-form");
  const steps = form.querySelectorAll(".quiz-step");
  const progressBar = document.querySelector(".quiz-progress-bar__fill");
  const progressCounter = document.querySelector(".quiz-progress-info__counter");
  const prevBtn = document.querySelector(".quiz-btn--prev");
  const nextBtn = document.querySelector(".quiz-btn--next");
  const submitBtn = document.querySelector(".quiz-btn--submit");
  const quizSuccess = document.querySelector(".quiz-success");

  let currentStep = 1;
  const totalSteps = steps.length;

  // ===== FUNCTIONS =====

  // Show step by number
  function showStep(stepNumber, isInit) {
    steps.forEach((step) => {
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
    if (!isInit) {
        const firstInput = steps[stepNumber - 1]?.querySelector('input:not([type="hidden"]), textarea');
        firstInput?.focus();
    }
  }

  // Validate current step
  function validateStep(stepNumber) {
    const step = document.querySelector(`.quiz-step[data-step="${stepNumber}"]`);
    const errorEl = step.querySelector(".quiz-step__error");
    const requiredInputs = step.querySelectorAll("[required]");
    let isValid = true;

    // Clear previous errors
    errorEl.textContent = "";
    step.querySelectorAll(".form-input").forEach((input) => {
      input.style.borderColor = "";
    });

    // Check required fields
    requiredInputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = "var(--color-primary)";
        errorEl.textContent = "Это поле обязательно для заполнения";
      }
    });

    // Check custom radio inputs
    const customRadios = step.querySelectorAll(".radio-option__input--custom:checked");
    customRadios.forEach((radio) => {
      const customInput = radio.closest(".radio-option--custom")?.querySelector(".radio-option__custom-input");
      if (customInput && !customInput.value.trim()) {
        isValid = false;
        customInput.style.borderColor = "var(--color-primary)";
        errorEl.textContent = "Пожалуйста, укажите значение";
      }
    });

    // Check phone format
    const phoneInput = step.querySelector(".form-input--phone");
    if (phoneInput && phoneInput.value.trim()) {
      const phonePattern = /^\+7\s?\(?\d{3}\)?\s?\d{3}-\d{2}-\d{2}$/;
      if (!phonePattern.test(phoneInput.value)) {
        isValid = false;
        phoneInput.style.borderColor = "var(--color-primary)";
        errorEl.textContent = "Введите корректный номер телефона";
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
    document.querySelectorAll(".radio-option__input--custom").forEach((radio) => {
      const customInput = radio.closest(".radio-option--custom")?.querySelector(".radio-option__custom-input");

      radio.addEventListener("change", () => {
        if (radio.checked && customInput) {
          customInput.required = true;
          customInput.focus();
        }
      });

      // Toggle required on other radios in same group
      const groupName = radio.name;
      document.querySelectorAll(`[name="${groupName}"]:not(.radio-option__input--custom)`).forEach((otherRadio) => {
        otherRadio.addEventListener("change", () => {
          if (otherRadio.checked && customInput) {
            customInput.required = false;
          }
        });
      });
    });
  }

  // Phone mask
  function initPhoneMask() {
    const phoneInput = document.querySelector(".form-input--phone");
    if (!phoneInput) return;

    phoneInput.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "");

      // Remove leading 7 or 8
      if (value.startsWith("7") || value.startsWith("8")) {
        value = value.slice(1);
      }

      // Format: (000) 000-00-00
      if (value.length > 0) value = "(" + value;
      if (value.length > 4) value = value.slice(0, 4) + ") " + value.slice(4);
      if (value.length > 9) value = value.slice(0, 9) + "-" + value.slice(9);
      if (value.length > 12) value = value.slice(0, 12) + "-" + value.slice(12);

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
      document.querySelectorAll(".radio-option__input--custom:checked").forEach((radio) => {
        const customInput = radio.closest(".radio-option--custom")?.querySelector(".radio-option__custom-input");
        if (customInput?.value) {
          data[radio.name] = customInput.value;
        }
      });

      // Format phone
      if (data.phone) {
        data.phone = "+7 " + data.phone.replace(/[^\d]/g, "").slice(1);
      }

      // Demo: show success
      form.hidden = true;
      quizSuccess.hidden = false;

      // In production: send to server
      // fetch('/api/quiz-submit', { method: 'POST', body: JSON.stringify(data) });

      console.log("Form submitted:", data);
    }
  }

  // ===== EVENT LISTENERS =====

  // Navigation buttons
  nextBtn?.addEventListener("click", nextStep);
  prevBtn?.addEventListener("click", prevStep);

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.target.closest("textarea")) {
      e.preventDefault();
      if (!nextBtn.hidden) nextStep();
    }
    if (e.key === "Escape" && currentStep > 1) {
      prevStep();
    }
  });

  // Form submit
  form?.addEventListener("submit", handleSubmit);

  // Initialize
  initCustomRadios();
  initPhoneMask();
  showStep(1, true);
});

// свайпер hero

document.addEventListener("DOMContentLoaded", function () {
  const swiperContainer = document.querySelector(".swiper-container");
  if (!swiperContainer) return;

  const wrapper = swiperContainer.querySelector(".swiper-wrapper");
  const slides = swiperContainer.querySelectorAll(".swiper-slide");
  const prevBtn = swiperContainer.querySelector(".swiper-button-prev");
  const nextBtn = swiperContainer.querySelector(".swiper-button-next");
  const pagination = swiperContainer.querySelector(".swiper-pagination");

  let currentIndex = 0;
  const totalSlides = slides.length;

  // Create pagination bullets
  slides.forEach((_, index) => {
    const bullet = document.createElement("button");
    bullet.className = "swiper-pagination-bullet" + (index === 0 ? " swiper-pagination-bullet-active" : "");
    bullet.setAttribute("aria-label", "Перейти к слайду " + (index + 1));
    bullet.addEventListener("click", () => goToSlide(index));
    pagination.appendChild(bullet);
  });

  const bullets = pagination.querySelectorAll(".swiper-pagination-bullet");

  // Update slides position
  function updateSlides() {
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update bullets
    bullets.forEach((bullet, index) => {
      bullet.classList.toggle("swiper-pagination-bullet-active", index === currentIndex);
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
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  // Keyboard navigation
  swiperContainer.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });

  // Touch/Swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  swiperContainer.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    {passive: true},
  );

  swiperContainer.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    {passive: true},
  );

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

// ===== МОДАЛКА ДЛЯ ВИДЕО В СЕТКЕ =====

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("video-modal");
  var modalBody = document.getElementById("video-modal-body");
  var closeBtn = document.getElementById("video-modal-close");

  if (!modal) return;

  function openVideoModal(src) {
    modalBody.innerHTML =
      '<iframe width="100%" height="100%" src="' +
      src +
      '" style="border:none; position:absolute; inset:0; width:100%; height:100%;" allow="clipboard-write; autoplay; encrypted-media; fullscreen; picture-in-picture;" allowfullscreen></iframe>';
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeVideoModal() {
    modal.style.display = "none";
    modalBody.innerHTML = ""; // останавливаем видео убирая iframe
    document.body.style.overflow = "";
  }

  // Клик по карточке видео
  document.querySelectorAll(".video-card").forEach(function (card) {
    card.addEventListener("click", function () {
      var src = card.getAttribute("data-video-src");
      if (src) openVideoModal(src);
    });
  });

  // Закрытие по кнопке
  closeBtn.addEventListener("click", closeVideoModal);

  // Закрытие по клику на фон
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeVideoModal();
  });

  // Закрытие по Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "flex") {
      closeVideoModal();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".reviews-carousel");
  if (!carousel) return;

  const track = carousel.querySelector(".carousel-track");
  const slides = track.querySelectorAll(".carousel-slide");
  const prevBtn = carousel.querySelector(".carousel-prev");
  const nextBtn = carousel.querySelector(".carousel-next");
  const totalSlides = slides.length;
  let currentIndex = 0;

  // Берём ширину трека ДО того как делаем display:flex — пока слайды ещё не распёрли его
  var slideWidth = track.offsetWidth;

  // Настраиваем track как flex-контейнер для плавного слайда
  track.style.display = "flex";
  track.style.transition = "transform 0.4s ease";

  // Каждый слайд — фиксированная ширина в px, чтобы трек не растягивался
  slides.forEach(function (slide) {
    slide.style.minWidth = slideWidth + "px";
    slide.style.width = slideWidth + "px";
    slide.style.flexShrink = "0";
    slide.style.display = "flex";
  });

  // Пересчитываем ширину при ресайзе окна
  window.addEventListener("resize", function () {
    slideWidth = track.offsetWidth;
    slides.forEach(function (slide) {
      slide.style.minWidth = slideWidth + "px";
      slide.style.width = slideWidth + "px";
    });
    track.style.transition = "none";
    track.style.transform = "translateX(-" + currentIndex * slideWidth + "px)";
    setTimeout(function () {
      track.style.transition = "transform 0.4s ease";
    }, 50);
  });

  // Создаём контейнер для точек сразу после карусели
  var dotsContainer = document.createElement("div");
  dotsContainer.className = "carousel-dots";
  carousel.insertAdjacentElement("afterend", dotsContainer);

  // Генерируем точки
  slides.forEach(function (_, i) {
    var dot = document.createElement("button");
    dot.className = "carousel-dot" + (i === 0 ? " is-active" : "");
    dot.setAttribute("aria-label", "Слайд " + (i + 1));
    dot.addEventListener("click", function () {
      goTo(i);
    });
    dotsContainer.appendChild(dot);
  });

  var dots = dotsContainer.querySelectorAll(".carousel-dot");

  function updateDots() {
    dots.forEach(function (dot, i) {
      dot.classList.toggle("is-active", i === currentIndex);
    });
  }

  function goTo(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    track.style.transform = "translateX(-" + currentIndex * slideWidth + "px)";
    updateDots();
  }

  // Показываем первый слайд
  goTo(0);

  if (prevBtn)
    prevBtn.addEventListener("click", function () {
      goTo(currentIndex - 1);
    });
  if (nextBtn)
    nextBtn.addEventListener("click", function () {
      goTo(currentIndex + 1);
    });

  // Touch / swipe поддержка
  var touchStartX = 0;

  track.addEventListener(
    "touchstart",
    function (e) {
      touchStartX = e.changedTouches[0].screenX;
    },
    {passive: true},
  );

  track.addEventListener(
    "touchend",
    function (e) {
      var diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        goTo(diff > 0 ? currentIndex + 1 : currentIndex - 1);
      }
    },
    {passive: true},
  );
});

// popap

document.addEventListener("DOMContentLoaded", function () {
  const callbackModal = document.getElementById("callbackModal");
  const closeBtn = callbackModal.querySelector(".callback-modal__close");
  const overlay = callbackModal.querySelector(".callback-modal__overlay");
  const form = document.getElementById("callbackForm");
  const phoneInput = document.getElementById("phoneInput");
  const triggerButtons = document.querySelectorAll(".btn-popap, .btn-popup, .open-callback-modal");

  phoneInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 0 && (value[0] === "7" || value[0] === "8")) {
      value = value.substring(1);
    }
    let formattedValue = "";
    if (value.length > 0) formattedValue = "(" + value.substring(0, 3);
    if (value.length >= 3) formattedValue += ") " + value.substring(3, 6);
    if (value.length >= 6) formattedValue += "-" + value.substring(6, 8);
    if (value.length >= 8) formattedValue += "-" + value.substring(8, 10);
    e.target.value = formattedValue;
  });

  function openModal() {
    callbackModal.classList.add("is-active");
    document.body.classList.add("modal-open");
    setTimeout(() => {
      phoneInput.focus();
    }, 300);
  }

  function closeModal() {
    callbackModal.classList.remove("is-active");
    document.body.classList.remove("modal-open");
  }

  triggerButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      openModal();
    });
  });

  closeBtn.addEventListener("click", closeModal);

  // Закрытие по клику на оверлей
  callbackModal.addEventListener("click", function (e) {
    if (!e.target.closest(".callback-modal__content")) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && callbackModal.classList.contains("is-active")) {
      closeModal();
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const phone = phoneInput.value;
    const checkbox = form.querySelector('input[type="checkbox"]');
    if (!checkbox.checked) {
      alert("Пожалуйста, примите условия");
      return;
    }
    if (phone.length < 15) {
      alert("Пожалуйста, введите корректный номер телефона");
      phoneInput.focus();
      return;
    }
    alert("Спасибо! Мы перезвоним вам в ближайшее время.");
    closeModal();
    form.reset();
  });
});

// popap - two
document.addEventListener("DOMContentLoaded", function () {
  const questionModal = document.getElementById("questionModal");
  const closeBtn = questionModal.querySelector(".question-modal__close");
  const overlay = questionModal.querySelector(".question-modal__overlay");
  const form = document.getElementById("questionForm");
  const phoneInput = document.getElementById("questionPhone");
  const triggerButtons = document.querySelectorAll(".btn-popap-two");

  phoneInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 0 && (value[0] === "7" || value[0] === "8")) {
      value = value.substring(1);
    }
    let formattedValue = "";
    if (value.length > 0) formattedValue = "(" + value.substring(0, 3);
    if (value.length >= 3) formattedValue += ") " + value.substring(3, 6);
    if (value.length >= 6) formattedValue += "-" + value.substring(6, 8);
    if (value.length >= 8) formattedValue += "-" + value.substring(8, 10);
    e.target.value = formattedValue;
  });

  function openModal() {
    questionModal.classList.add("is-active");
    document.body.classList.add("question-modal-open");
    setTimeout(() => {
      document.getElementById("questionName").focus();
    }, 300);
  }

  function closeModal() {
    questionModal.classList.remove("is-active");
    document.body.classList.remove("question-modal-open");
  }

  triggerButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      openModal();
    });
  });

  closeBtn.addEventListener("click", closeModal);

  // Закрытие по клику на оверлей
  questionModal.addEventListener("click", function (e) {
    if (!e.target.closest(".question-modal__content")) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && questionModal.classList.contains("is-active")) {
      closeModal();
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("questionName").value;
    const phone = phoneInput.value;
    const question = document.getElementById("questionText").value;
    const checkbox = form.querySelector('input[type="checkbox"]');
    if (!checkbox.checked) {
      alert("Пожалуйста, примите условия");
      return;
    }
    if (phone.length < 15) {
      alert("Пожалуйста, введите корректный номер телефона");
      phoneInput.focus();
      return;
    }
    console.log("Question form submitted:", {name, phone, question});
    alert("Спасибо за ваш вопрос! Мы свяжемся с вами в ближайшее время.");
    closeModal();
    form.reset();
  });
});

// ===== ПОПАП ПОДБОРА АВТО (btn-popap-three) =====

document.addEventListener("DOMContentLoaded", function () {
  var carSelectionModal = document.getElementById("carSelectionModal");
  if (!carSelectionModal) return;

  var closeBtn = carSelectionModal.querySelector(".question-modal__close");
  var overlay = carSelectionModal.querySelector(".question-modal__overlay");
  var form = document.getElementById("carSelectionForm");
  var phoneInput = document.getElementById("carSelectionPhone");
  var triggerButtons = document.querySelectorAll(".btn-popap-three");

  // Маска телефона
  if (phoneInput) {
    phoneInput.addEventListener("input", function (e) {
      var value = e.target.value.replace(/\D/g, "");

      if (value.length > 0 && (value[0] === "7" || value[0] === "8")) {
        value = value.substring(1);
      }

      var formattedValue = "";
      if (value.length > 0) formattedValue = "(" + value.substring(0, 3);
      if (value.length >= 3) formattedValue += ") " + value.substring(3, 6);
      if (value.length >= 6) formattedValue += "-" + value.substring(6, 8);
      if (value.length >= 8) formattedValue += "-" + value.substring(8, 10);

      e.target.value = formattedValue;
    });
  }

  function openModal() {
    carSelectionModal.classList.add("is-active");
    document.body.classList.add("question-modal-open");
    setTimeout(function () {
      if (phoneInput) phoneInput.focus();
    }, 300);
  }

  function closeModal() {
    carSelectionModal.classList.remove("is-active");
    document.body.classList.remove("question-modal-open");
  }
  carSelectionModal.addEventListener("click", function (e) {
    if (!e.target.closest(".question-modal__content")) closeModal();
  });

  // Открытие по классу .btn-popap-three
  triggerButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      openModal();
    });
  });

  closeBtn && closeBtn.addEventListener("click", closeModal);
  overlay && overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && carSelectionModal.classList.contains("is-active")) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var phone = phoneInput ? phoneInput.value : "";
      var checkbox = form.querySelector('input[type="checkbox"]');

      if (!checkbox.checked) {
        alert("Пожалуйста, примите условия");
        return;
      }

      if (phone.length < 15) {
        alert("Пожалуйста, введите корректный номер телефона");
        if (phoneInput) phoneInput.focus();
        return;
      }

      alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
      closeModal();
      form.reset();
    });
  }
});

// ===== ПОПАП ЗАКАЗА УСЛУГИ (ЕДИНСТВЕННЫЙ БЛОК — дубль удалён) =====

document.addEventListener('DOMContentLoaded', function () {

  var orderModal = document.getElementById('orderModal');
  if (!orderModal) return;

  var overlay    = orderModal.querySelector('.order-modal__overlay');
  var closeBtn   = orderModal.querySelector('.order-modal__close');
  var itemsEl    = document.getElementById('orderItems');
  var subtotalEl = document.getElementById('orderSubtotal');
  var totalEl    = document.getElementById('orderTotal');
  var phoneInput = document.getElementById('orderPhone');
  var submitBtn  = document.getElementById('orderSubmit');

  var CART_KEY = 'autostyle_cart';

  // In-memory fallback если localStorage недоступен
  var _memCart = [];
  var _useMemory = false;
  try { localStorage.setItem('_test', '1'); localStorage.removeItem('_test'); }
  catch (e) { _useMemory = true; console.warn('localStorage недоступен, используем память'); }

  // ===== КОРЗИНА =====

  function getCart() {
    if (_useMemory) return _memCart;
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch (e) { return []; }
  }

  function saveCart(cart) {
    if (_useMemory) { _memCart = cart; return; }
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }
    catch (e) { console.error('Ошибка сохранения корзины', e); }
  }

  function addToCart(service) {
    var cart = getCart();
    var existing = cart.find(function (i) { return i.id === service.id; });
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id: service.id, name: service.name, price: service.price, image: service.image, qty: 1 });
    }
    saveCart(cart);
  }

  function removeFromCart(id) {
    saveCart(getCart().filter(function (i) { return i.id !== id; }));
  }

  function updateQty(id, delta) {
    var cart = getCart();
    var item = cart.find(function (i) { return i.id === id; });
    if (!item) return;
    var newQty = item.qty + delta;
    if (newQty <= 0) {
      // Удаляем товар если qty опускается до 0
      removeFromCart(id);
    } else {
      item.qty = newQty;
      saveCart(cart);
    }
  }

  function getTotal() {
    return getCart().reduce(function (sum, i) { return sum + i.price * i.qty; }, 0);
  }

  function formatPrice(n) {
    return n.toLocaleString('ru-RU') + ' ₽';
  }

  // ===== РЕНДЕР КОРЗИНЫ =====
  // Обработчики qty и remove вешаются один раз через делегирование на itemsEl — НЕ внутри renderCart

  function renderCart() {
    var cart = getCart();
    itemsEl.innerHTML = '';

    if (cart.length === 0) {
      itemsEl.innerHTML = '<div class="order-modal__empty">Корзина пуста</div>';
      subtotalEl.textContent = formatPrice(0);
      totalEl.textContent    = formatPrice(0);
      return;
    }

    cart.forEach(function (item) {
      var row = document.createElement('div');
      row.className = 'order-modal__item';
      row.innerHTML =
        '<img class="order-modal__item-img" src="' + (item.image || '') + '" alt="' + item.name + '">' +
        '<div class="order-modal__item-info">' +
          '<p class="order-modal__item-name">' + item.name + '</p>' +
          '<div class="order-modal__item-qty">' +
            '<button class="order-modal__qty-btn" data-action="dec" data-id="' + item.id + '">−</button>' +
            '<span class="order-modal__qty-value">' + item.qty + '</span>' +
            '<button class="order-modal__qty-btn" data-action="inc" data-id="' + item.id + '">+</button>' +
          '</div>' +
        '</div>' +
        '<span class="order-modal__item-price">' + formatPrice(item.price * item.qty) + '</span>' +
        '<button class="order-modal__item-remove" data-id="' + item.id + '" title="Удалить">' +
          '<svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' +
        '</button>';
      itemsEl.appendChild(row);
    });

    var total = getTotal();
    subtotalEl.textContent = formatPrice(total);
    totalEl.textContent    = formatPrice(total);
  }

  // Делегирование на itemsEl — вешается ОДИН РАЗ, не при каждом renderCart
  itemsEl.addEventListener('click', function (e) {
    e.stopPropagation(); // не всплываем до orderModal

    var qtyBtn    = e.target.closest('.order-modal__qty-btn');
    var removeBtn = e.target.closest('.order-modal__item-remove');

    if (qtyBtn) {
      var id     = qtyBtn.getAttribute('data-id');
      var action = qtyBtn.getAttribute('data-action');
      updateQty(id, action === 'inc' ? 1 : -1);
      renderCart();
      return;
    }

    if (removeBtn) {
      removeFromCart(removeBtn.getAttribute('data-id'));
      renderCart();
      return;
    }
  });

  // ===== ОТКРЫТИЕ / ЗАКРЫТИЕ =====

  function openOrderModal() {
    renderCart();
    orderModal.classList.add('is-active');
    document.body.classList.add('modal-open');
    setTimeout(function () { if (phoneInput) phoneInput.focus(); }, 300);
  }

  function closeOrderModal() {
    orderModal.classList.remove('is-active');
    document.body.classList.remove('modal-open');
  }

  closeBtn && closeBtn.addEventListener('click', closeOrderModal);
  overlay  && overlay.addEventListener('click', closeOrderModal);

  orderModal.addEventListener('click', function (e) {
    if (!e.target.closest('.order-modal__content')) closeOrderModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && orderModal.classList.contains('is-active')) closeOrderModal();
  });

  // ===== КЛИК ПО КАРТОЧКЕ / КНОПКЕ ЗАКАЗАТЬ =====
  // Обработчики вешаются ОДИН РАЗ — дублирующего блока больше нет

  document.querySelectorAll('.service-card').forEach(function (card) {

    function getServiceData() {
      var img = card.querySelector('.service-card__image img');
      return {
        id:    card.getAttribute('data-service-id') || (img && img.getAttribute('data-id')) || card.querySelector('.service-card__title').textContent.trim(),
        name:  card.querySelector('.service-card__title').textContent.trim(),
        price: parseInt(card.getAttribute('data-service-price') || (img && img.getAttribute('data-price')) || '0', 10),
        image: img ? img.src : ''
      };
    }

    // Кнопка «Заказать» — добавляет и открывает, не всплывает на карточку
    var orderBtn = card.querySelector('.service-card__btn--primary');
    if (orderBtn) {
      orderBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        addToCart(getServiceData());
        openOrderModal();
      });
    }

    // Клик на карточку (кроме «Подробнее» и «Заказать»)
    card.addEventListener('click', function (e) {
      if (e.target.closest('.service-card__btn--outline')) return;
      if (e.target.closest('.service-card__btn--primary')) return;
      addToCart(getServiceData());
      openOrderModal();
    });
  });

  // ===== МАСКА ТЕЛЕФОНА =====

  if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
      var value = e.target.value.replace(/\D/g, '');
      if (value.length > 0 && (value[0] === '7' || value[0] === '8')) {
        value = value.substring(1);
      }
      var fmt = '';
      if (value.length > 0) fmt = '(' + value.substring(0, 3);
      if (value.length >= 3) fmt += ') ' + value.substring(3, 6);
      if (value.length >= 6) fmt += '-' + value.substring(6, 8);
      if (value.length >= 8) fmt += '-' + value.substring(8, 10);
      e.target.value = fmt;
    });
  }

  // ===== ОТПРАВКА =====

  submitBtn && submitBtn.addEventListener('click', function () {
    var phone = phoneInput ? phoneInput.value : '';
    if (phone.replace(/\D/g, '').length < 10) {
      alert('Пожалуйста, введите корректный номер телефона');
      if (phoneInput) phoneInput.focus();
      return;
    }
    var cart = getCart();
    if (cart.length === 0) {
      alert('Корзина пуста');
      return;
    }
    console.log('Order submitted:', { phone: '+7 ' + phone, cart: cart });
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    saveCart([]);
    closeOrderModal();
  });

});

// ===== АККОРДЕОН ВАКАНСИЙ =====
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.vacancy-header').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var item = btn.closest('.vacancy-item');
            var isOpen = item.classList.contains('is-open');

            // Закрыть все
            document.querySelectorAll('.vacancy-item').forEach(function (el) {
                el.classList.remove('is-open');
                el.querySelector('.vacancy-header').setAttribute('aria-expanded', 'false');
            });

            // Открыть текущий если был закрыт
            if (!isOpen) {
                item.classList.add('is-open');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });
});

// ===== ПОПАП ОТКЛИКА НА ВАКАНСИЮ (btn-popap-four) =====
// Добавить в конец script.js

document.addEventListener('DOMContentLoaded', function() {
    var vacancyModal = document.getElementById('vacancyModal');
    if (!vacancyModal) return;

    var closeBtn      = vacancyModal.querySelector('.question-modal__close');
    var overlay       = vacancyModal.querySelector('.question-modal__overlay');
    var form          = document.getElementById('vacancyForm');
    var phoneInput    = document.getElementById('vacancyPhone');
    var triggerButtons = document.querySelectorAll('.btn-popap-four');

    // Маска телефона
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            var value = e.target.value.replace(/\D/g, '');
            if (value.length > 0 && (value[0] === '7' || value[0] === '8')) {
                value = value.substring(1);
            }
            var fmt = '';
            if (value.length > 0) fmt = '(' + value.substring(0, 3);
            if (value.length >= 3) fmt += ') ' + value.substring(3, 6);
            if (value.length >= 6) fmt += '-' + value.substring(6, 8);
            if (value.length >= 8) fmt += '-' + value.substring(8, 10);
            e.target.value = fmt;
        });
    }

    function openModal() {
        vacancyModal.classList.add('is-active');
        document.body.classList.add('question-modal-open');
        setTimeout(function() {
            var nameInput = document.getElementById('vacancyName');
            if (nameInput) nameInput.focus();
        }, 300);
    }

    function closeModal() {
        vacancyModal.classList.remove('is-active');
        document.body.classList.remove('question-modal-open');
    }

    // Открытие по классу .btn-popap-four
    triggerButtons.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    });

    closeBtn && closeBtn.addEventListener('click', closeModal);

    // Закрытие по клику вне контента
    vacancyModal.addEventListener('click', function(e) {
        if (!e.target.closest('.question-modal__content')) closeModal();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && vacancyModal.classList.contains('is-active')) closeModal();
    });

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            var name     = document.getElementById('vacancyName').value.trim();
            var phone    = phoneInput ? phoneInput.value : '';
            var checkbox = form.querySelector('input[type="checkbox"]');

            if (!name) {
                alert('Пожалуйста, введите ваше имя');
                document.getElementById('vacancyName').focus();
                return;
            }

            if (!checkbox.checked) {
                alert('Пожалуйста, примите условия');
                return;
            }

            if (phone.replace(/\D/g, '').length < 10) {
                alert('Пожалуйста, введите корректный номер телефона');
                if (phoneInput) phoneInput.focus();
                return;
            }

            console.log('Vacancy form submitted:', { name: name, phone: '+7 ' + phone });
            alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
            closeModal();
            form.reset();
        });
    }
});


// Миниатюра на странице товара

class ProductGallery {
  constructor() {
    this.mainImage = document.getElementById('mainImage');
    this.thumbsContainer = document.getElementById('galleryThumbs');
    this.thumbs = document.querySelectorAll('.thumb');
    this.prevBtn = document.querySelector('.gallery-nav--prev');
    this.nextBtn = document.querySelector('.gallery-nav--next');
    this.currentSlideEl = document.getElementById('currentSlide');
    this.totalSlidesEl = document.getElementById('totalSlides');
    
    this.currentIndex = 0;
    this.images = [];
    this.isAnimating = false;
    
    this.init();
  }
  
  init() {
    this.thumbs.forEach((thumb, index) => {
      const img = thumb.querySelector('img');
      this.images.push(img.src);
      
      thumb.addEventListener('click', () => {
        if (!this.isAnimating) {
          this.goToSlide(index);
        }
      });
    });

    if (this.totalSlidesEl) {
      this.totalSlidesEl.textContent = this.images.length;
    }
    
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => {
        if (!this.isAnimating) {
          this.prev();
        }
      });
    }
    
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => {
        if (!this.isAnimating) {
          this.next();
        }
      });
    }
    
    document.addEventListener('keydown', (e) => {
      if (!this.isAnimating) {
        if (e.key === 'ArrowLeft') {
          this.prev();
        } else if (e.key === 'ArrowRight') {
          this.next();
        }
      }
    });
    
    this.initSwipe();
    this.updateCounter();
  }
  
  goToSlide(index) {
    if (index < 0 || index >= this.images.length || index === this.currentIndex) return;
    
    this.isAnimating = true;
    this.currentIndex = index;
    this.updateGallery();
    
    setTimeout(() => {
      this.isAnimating = false;
    }, 400);
  }
  
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateGallery();
    }
  }
  
  next() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.updateGallery();
    }
  }
  
  updateGallery() {
    if (this.mainImage) {
      this.mainImage.classList.add('fade-out');
      
      setTimeout(() => {
        this.mainImage.src = this.images[this.currentIndex];
        
        this.mainImage.onload = () => {
          this.mainImage.classList.remove('fade-out');
          this.mainImage.classList.add('fade-in');
          
          setTimeout(() => {
            this.mainImage.classList.remove('fade-in');
          }, 400);
        };
      }, 200);
    }
    
    this.thumbs.forEach((thumb, index) => {
      if (index === this.currentIndex) {
        thumb.classList.add('thumb--active');
      
        if (this.thumbsContainer) {
          const thumbRect = thumb.getBoundingClientRect();
          const containerRect = this.thumbsContainer.getBoundingClientRect();
          const scrollLeft = thumb.offsetLeft - (containerRect.width / 2) + (thumbRect.width / 2);
          
          this.thumbsContainer.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
          });
        }
      } else {
        thumb.classList.remove('thumb--active');
      }
    });
    
    this.updateCounter();
    this.updateButtons();
  }
  
  updateCounter() {
    if (this.currentSlideEl) {
      this.currentSlideEl.textContent = this.currentIndex + 1;
    }
  }
  
  updateButtons() {
    if (this.prevBtn) {
      this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.3' : '1';
      this.prevBtn.style.cursor = this.currentIndex === 0 ? 'not-allowed' : 'pointer';
    }
    
    if (this.nextBtn) {
      this.nextBtn.style.opacity = this.currentIndex === this.images.length - 1 ? '0.3' : '1';
      this.nextBtn.style.cursor = this.currentIndex === this.images.length - 1 ? 'not-allowed' : 'pointer';
    }
  }
  
  initSwipe() {
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartTime = 0;
    const galleryMain = document.querySelector('.product-gallery-main');
    
    if (!galleryMain) return;
    
    galleryMain.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartTime = new Date().getTime();
    }, { passive: true });
    
    galleryMain.addEventListener('touchend', (e) => {
      if (!this.isAnimating) {
        touchEndX = e.changedTouches[0].screenX;
        const touchEndTime = new Date().getTime();
        const timeDiff = touchEndTime - touchStartTime;
        
        this.handleSwipe(touchStartX, touchEndX, timeDiff);
      }
    }, { passive: true });
  }
  
  handleSwipe(startX, endX, timeDiff) {
    const swipeThreshold = 50;
    const timeThreshold = 300; 
    const diff = startX - endX;
    
    if (Math.abs(diff) > swipeThreshold && timeDiff < timeThreshold) {
      if (diff > 0) {
        this.next();
      } else {
        this.prev();
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.getElementById('mainImage');
  if (mainImage) {
    new ProductGallery();
  }
});