<header class="site-header" role="banner">
  
  <!-- Прогресс-бар -->
  <div class="page-progress" aria-hidden="true">
    <div class="page-progress__bar"></div>
  </div>

  <!-- Фиксированная панель -->
  <div class="header-fixed">
    <div class="header-fixed__inner">
      
      <!-- Логотип -->
      <a href="/" class="header-logo" aria-label="На главную">
        <img width="100" src="../assets/logo-footer.webp" alt="Автостиль"/>
      </a>

      <!-- Десктопное меню -->
      <nav class="header-nav" role="navigation" aria-label="Основное меню">
        <ul class="header-nav__list">
          <li class="header-nav__item header-nav__item--dropdown">
            <button class="header-nav__link header-nav__link--dropdown" 
                    aria-expanded="false" 
                    aria-controls="services-submenu">
              Услуги
              <span class="header-nav__arrow" aria-hidden="true"></span>
            </button>
            <ul id="services-submenu" class="header-submenu" role="menu">
              <li class="header-submenu__title">Наши услуги</li>
              <li><a href="/auto-selection-russia" class="header-submenu__link">Автоподбор под ключ</a></li>
              <li><a href="/express-auto-selection" class="header-submenu__link">Автоподбор «Экспресс»</a></li>
              <li><a href="/yaponiya" class="header-submenu__link">Автоподбор «Япония»</a></li>
              <li><a href="/koreya" class="header-submenu__link">Автоподбор «Корея»</a></li>
              <li><a href="/kazakhstan" class="header-submenu__link">Автоподбор «Казахстан»</a></li>
              <li><a href="/kitaj" class="header-submenu__link">Автоподбор «Китай»</a></li>
              <li><a href="/uae" class="header-submenu__link">Автоподбор «ОАЭ»</a></li>
              <li><a href="/delivery" class="header-submenu__link">Доставка по РФ</a></li>
              <li><a href="/basic-diagnostics" class="header-submenu__link">Диагностика</a></li>
              <li><a href="/complex-check" class="header-submenu__link">Комплексная проверка</a></li>
              <li><a href="/remote-check" class="header-submenu__link">Дистанционная проверка</a></li>
              <li><a href="/help-selling-your-car" class="header-submenu__link">Помощь в продаже</a></li>
              <li class="header-submenu__divider"></li>
              <li><a href="/services" class="header-submenu__link header-submenu__link--all">Все услуги →</a></li>
            </ul>
          </li>
          <li><a href="/selected-cars" class="header-nav__link">Подобранные автомобили</a></li>
          <li><a href="/video-reviews" class="header-nav__link">Отзывы</a></li>
          <li><a href="/about" class="header-nav__link">О компании</a></li>
          <li><a href="/contacts" class="header-nav__link">Контакты</a></li>
          <li><a href="/news" class="header-nav__link">Новости</a></li>
          <!-- <li><a href="/work" class="header-nav__link">Вакансии</a></li> -->
        </ul>
      </nav>

      <!-- Правая часть -->
      <div class="header-actions">
        <a href="tel:88005508654" class="header-phone">
          <span class="header-phone__number">8 800 550 86 54</span>
          <span class="header-phone__text">Звонок бесплатный</span>
        </a>
        <button type="button" class="btn btn--primary btn--sm open-modal btn-popap" data-modal-target="callback-modal">
          ОБРАТНЫЙ ЗВОНОК
        </button>
        <!-- Кнопка гамбургера -->
        <button type="button" 
                class="header-toggle" 
                aria-label="Открыть меню"
                aria-expanded="false"
                aria-controls="mobile-menu">
          <span class="header-toggle__icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </div>

  <!-- ========== МОБИЛЬНОЕ МЕНЮ ========== -->
  <div id="mobile-menu" 
       class="mobile-menu" 
       role="dialog" 
       aria-modal="true" 
       aria-label="Мобильное меню"
       aria-hidden="true">
    
    <div class="mobile-menu__overlay"></div>
    
    <div class="mobile-menu__content">
      
      <!-- Шапка -->
      <header class="mobile-menu__header">
        <a href="/" class="mobile-menu__logo">
          <img src="https://optim.tildacdn.com/tild6439-3430-4862-b664-383061666161/-/resize/168x/-/format/webp/logotype.png.webp" 
               alt="АВТОСТИЛЬ" 
               class="mobile-menu__logo-img">
        </a>
        <button type="button" 
                class="mobile-menu__close" 
                aria-label="Закрыть меню"
                data-close-menu>
          <span aria-hidden="true" style="font-size:28px;line-height:1">×</span>
        </button>
      </header>
      
      <!-- Навигация -->
      <nav class="mobile-menu__nav" role="navigation">
        <ul class="mobile-menu__list">
          
          <!-- Аккордеон "Услуги" -->
          <li class="mobile-menu__item mobile-menu__item--accordion" aria-expanded="false">
            <button type="button" 
                    class="mobile-menu__link mobile-menu__link--parent" 
                    aria-expanded="false"
                    aria-controls="mobile-services">
              Услуги
              <span class="mobile-menu__arrow" aria-hidden="true"></span>
            </button>
            <ul id="mobile-services" class="mobile-submenu" hidden>
              <li><a href="/auto-selection-russia" class="mobile-submenu__link">Автоподбор под ключ</a></li>
              <li><a href="/express-auto-selection" class="mobile-submenu__link">Автоподбор «Экспресс»</a></li>
              <li><a href="/yaponiya" class="mobile-submenu__link">Автоподбор «Япония»</a></li>
              <li><a href="/koreya" class="mobile-submenu__link">Автоподбор «Корея»</a></li>
              <li><a href="/kazakhstan" class="mobile-submenu__link">Автоподбор «Казахстан»</a></li>
              <li><a href="/kitaj" class="mobile-submenu__link">Автоподбор «Китай»</a></li>
              <li><a href="/uae" class="mobile-submenu__link">Автоподбор «ОАЭ»</a></li>
              <li><a href="/delivery" class="mobile-submenu__link">Доставка по РФ</a></li>
              <li><a href="/basic-diagnostics" class="mobile-submenu__link">Диагностика</a></li>
              <li><a href="/complex-check" class="mobile-submenu__link">Комплексная проверка</a></li>
              <li><a href="/remote-check" class="mobile-submenu__link">Дистанционная проверка</a></li>
              <li><a href="/help-selling-your-car" class="mobile-submenu__link">Помощь в продаже</a></li>
              <li><a href="/services" class="mobile-submenu__link mobile-submenu__link--all">Все услуги</a></li>
            </ul>
          </li>
          
          <li><a href="/selected-cars" class="mobile-menu__link">Подобранные автомобили</a></li>
          <li><a href="/video-reviews" class="mobile-menu__link">Отзывы</a></li>
          <li><a href="/about" class="mobile-menu__link">О компании</a></li>
          <li><a href="/news" class="mobile-menu__link">Новости</a></li>
          <!-- <li><a href="/work" class="mobile-menu__link">Вакансии</a></li> -->
          <li><a href="/contacts" class="mobile-menu__link">Контакты</a></li>
        </ul>
      </nav>
      
      <!-- Футер -->
      <footer class="mobile-menu__footer">
        <div class="mobile-social">
          <a href="https://vk.com/avtopodbor_159?_gl=1*ii21oi*_ga*MTE3MzQwMjU2NS4xNjA5OTMzODc5*_ga_EEC0H5C8ZZ*MTYxMjM3Nzg0Mi4xNS4xLjE2MTIzODAxNTcuNjA." class="mobile-social__link" aria-label="ВКонтакте" target="_blank"> 
            <svg class="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50ZM25 34c.406 19.488 10.15 31.2 27.233 31.2h.968V54.05c6.278.625 11.024 5.216 12.93 11.15H75c-2.436-8.87-8.838-13.773-12.836-15.647C66.162 47.242 71.783 41.62 73.126 34h-8.058c-1.749 6.184-6.932 11.805-11.867 12.336V34h-8.057v21.611C40.147 54.362 33.838 48.304 33.556 34H25Z" fill="#ffffff"></path> </svg>
          </a>
          <a href="https://www.youtube.com/channel/UClgRMD76pNrMzXp4zT8eltQ?_gl=1*1182u9o*_ga*MTE3MzQwMjU2NS4xNjA5OTMzODc5*_ga_EEC0H5C8ZZ*MTYxMjM3Nzg0Mi4xNS4xLjE2MTIzODAxNTcuNjA." class="mobile-social__link" aria-label="YouTube" target="_blank">
            <svg class="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm17.9-67.374c3.838.346 6 2.695 6.474 6.438.332 2.612.626 6.352.626 10.375 0 7.064-.626 11.148-.626 11.148-.588 3.728-2.39 5.752-6.18 6.18-4.235.48-13.76.7-17.992.7-4.38 0-13.237-.184-17.66-.552-3.8-.317-6.394-2.44-6.916-6.218-.38-2.752-.626-6.022-.626-11.222 0-5.788.209-8.238.7-10.853.699-3.732 2.48-5.54 6.548-5.96C36.516 32.221 40.55 32 49.577 32c4.413 0 13.927.228 18.322.626Zm-23.216 9.761v14.374L58.37 49.5l-13.686-7.114Z" fill="#ffffff"></path> </svg>
          </a>
          <a href="https://t.me/mustaione" class="mobile-social__link" aria-label="Telegram" target="_blank">
            <svg class="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z" fill="#ffffff"></path> </svg>
          </a>
          <a href="https://wa.me/79125811888?text=" class="mobile-social__link" aria-label="WhatsApp" target="_blank">
            <svg class="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM69.7626 28.9928C64.6172 23.841 57.7739 21.0027 50.4832 21C35.4616 21 23.2346 33.2252 23.2292 48.2522C23.2274 53.0557 24.4823 57.7446 26.8668 61.8769L23 76L37.4477 72.2105C41.4282 74.3822 45.9107 75.5262 50.4714 75.528H50.4823C65.5029 75.528 77.7299 63.301 77.7363 48.2749C77.7408 40.9915 74.9089 34.1446 69.7626 28.9928ZM62.9086 53.9588C62.2274 53.6178 58.8799 51.9708 58.2551 51.7435C57.6313 51.5161 57.1766 51.4024 56.7228 52.0845C56.269 52.7666 54.964 54.2998 54.5666 54.7545C54.1692 55.2092 53.7718 55.2656 53.0915 54.9246C52.9802 54.8688 52.8283 54.803 52.6409 54.7217C51.6819 54.3057 49.7905 53.4855 47.6151 51.5443C45.5907 49.7382 44.2239 47.5084 43.8265 46.8272C43.4291 46.1452 43.7837 45.7769 44.1248 45.4376C44.3292 45.2338 44.564 44.9478 44.7987 44.662C44.9157 44.5194 45.0328 44.3768 45.146 44.2445C45.4345 43.9075 45.56 43.6516 45.7302 43.3049C45.7607 43.2427 45.7926 43.1776 45.8272 43.1087C46.0545 42.654 45.9409 42.2565 45.7708 41.9155C45.6572 41.6877 45.0118 40.1167 44.4265 38.6923C44.1355 37.984 43.8594 37.3119 43.671 36.8592C43.1828 35.687 42.6883 35.69 42.2913 35.6924C42.2386 35.6928 42.1876 35.6931 42.1386 35.6906C41.7421 35.6706 41.2874 35.667 40.8336 35.667C40.3798 35.667 39.6423 35.837 39.0175 36.5191C38.9773 36.5631 38.9323 36.6111 38.8834 36.6633C38.1738 37.4209 36.634 39.0648 36.634 42.2002C36.634 45.544 39.062 48.7748 39.4124 49.2411L39.415 49.2444C39.4371 49.274 39.4767 49.3309 39.5333 49.4121C40.3462 50.5782 44.6615 56.7691 51.0481 59.5271C52.6732 60.2291 53.9409 60.6475 54.9303 60.9612C56.5618 61.4796 58.046 61.4068 59.22 61.2313C60.5286 61.0358 63.2487 59.5844 63.8161 57.9938C64.3836 56.4033 64.3836 55.0392 64.2136 54.7554C64.0764 54.5258 63.7545 54.3701 63.2776 54.1395C63.1633 54.0843 63.0401 54.0247 62.9086 53.9588Z" fill="#ffffff"></path> </svg>
          </a>
          <a href="viber://add?number=79125811888/" class="mobile-social__link" aria-label="WhatsApp" target="_blank">
            <svg class="t-sociallinks__svg" role="presentation" width="30px" height="30px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm19.546-71.18c-1.304-1.184-6.932-4.72-18.674-4.772 0 0-13.905-.913-20.655 5.2-3.757 3.71-5.022 9.226-5.161 15.957l-.016.691c-.156 6.885-.433 19.013 11.47 22.32l-.053 10.386c0 .587.093.988.428 1.071.241.059.602-.066.91-.372 1.968-1.978 8.271-9.582 8.271-9.582 8.457.553 15.186-1.117 15.91-1.354.17-.054.415-.111.72-.183 2.752-.641 10.37-2.417 11.776-13.773 1.613-13.003-.594-21.88-4.926-25.589ZM48.664 31.51a.908.908 0 0 1 .914-.901c4.585.032 8.468 1.56 11.584 4.597 3.146 3.067 4.696 7.24 4.736 12.404a.908.908 0 1 1-1.815.013c-.037-4.79-1.461-8.458-4.188-11.117-2.757-2.688-6.18-4.053-10.33-4.082a.908.908 0 0 1-.9-.914Zm2.374 2.932a1.15 1.15 0 1 0-.168 2.294c2.918.213 5.067 1.184 6.597 2.854 1.541 1.684 2.304 3.784 2.248 6.389a1.15 1.15 0 0 0 2.3.05c.067-3.133-.87-5.826-2.851-7.992-2.01-2.193-4.758-3.349-8.126-3.595Zm1.156 4.454a.908.908 0 1 0-.095 1.812c1.335.07 2.223.458 2.8 1.054.58.6.964 1.535 1.033 2.936a.908.908 0 0 0 1.813-.09c-.083-1.677-.558-3.09-1.542-4.108-.987-1.021-2.368-1.519-4.009-1.604Zm1.805 15.633c-.594.732-1.698.64-1.698.64-8.066-2.06-10.224-10.23-10.224-10.23s-.097-1.104.638-1.698l1.458-1.158c.722-.557 1.183-1.908.448-3.228a34.125 34.125 0 0 0-1.839-2.881c-.641-.877-2.136-2.671-2.142-2.677-.72-.85-1.78-1.048-2.898-.466a.045.045 0 0 0-.012.003l-.011.003a12.062 12.062 0 0 0-2.986 2.432c-.69.833-1.085 1.65-1.185 2.45a1.57 1.57 0 0 0-.022.357c-.003.354.05.706.16 1.042l.038.026c.348 1.236 1.22 3.296 3.114 6.731a40.117 40.117 0 0 0 3.735 5.654c.703.89 1.456 1.74 2.256 2.543l.029.03.057.056.085.086.086.085.086.086a29.64 29.64 0 0 0 2.543 2.255 40.072 40.072 0 0 0 5.655 3.736c3.433 1.894 5.495 2.766 6.73 3.114l.026.038c.336.11.688.164 1.041.16.12.006.24-.001.358-.022.802-.095 1.618-.49 2.448-1.184a.032.032 0 0 0 .007-.004.101.101 0 0 0 .003-.004l.012-.008a12.09 12.09 0 0 0 2.41-2.97l.003-.01a.054.054 0 0 0 .002-.013c.583-1.117.385-2.177-.47-2.899l-.189-.154c-.484-.4-1.783-1.47-2.487-1.988a34.12 34.12 0 0 0-2.879-1.838c-1.32-.736-2.669-.275-3.228.448L54 54.528Z" fill="#ffffff"></path> </svg>
          </a>
        </div>
        <a href="tel:+79028020888" class="mobile-phone">+7 (902) 802-08-88</a>
        <p class="mobile-hours">Пн-Вс: 09:00 – 21:00</p>
        <button type="button" class="btn btn--primary btn--full open-modal btn-popap-three" data-modal-target="callback-modal">
          Заказать автоподбор
        </button>
      </footer>
      
    </div>
  </div>
  <!-- ========== /МОБИЛЬНОЕ МЕНЮ ========== -->

</header> 