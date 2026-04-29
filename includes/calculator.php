<!-- ==================== HTML STRUCTURE ==================== -->

<section class="quiz-section" aria-label="Квиз подбора автомобиля">
  <div class="quiz-container container">
    
    <div class="quiz-card">
      
      <!-- Шапка квиза -->
      <header class="quiz-header">
        <div class="quiz-description">
          
          <div style="font-size: 20px;" data-customstyle="yes"><strong>Вы в одном шаге от консультации по подбору авто с индивидуальным подходом + </strong><strong style="color: rgb(255, 3, 18);">скидка 5000 рублей!</strong></div>
        </div>
        <div class="quiz-progress-info">
          <span class="quiz-progress-info__counter" aria-live="polite">1/3</span>
        </div>
        <div class="quiz-progress-bar" role="progressbar" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">
          <div class="quiz-progress-bar__fill"></div>
        </div>
      </header>

      <!-- Тело квиза: форма -->
      <form class="quiz-form" id="car-quiz-form" novalidate>
        
        <!-- Шаг 1: Бюджет -->
        <fieldset class="quiz-step" data-step="1" aria-labelledby="step1-title">
          <legend class="visually-hidden" id="step1-title">Шаг 1: Бюджет</legend>
          
          <div class="quiz-step__content">
            <h3 class="quiz-step__title" id="budget-title">Бюджет на покупку авто?</h3>
            
            <div class="radio-group" role="radiogroup" aria-labelledby="budget-title">
              
              <label class="radio-option">
                <input type="radio" name="budget" value="до 1 000 000 ₽" class="radio-option__input" required>
                <span class="radio-option__indicator" aria-hidden="true"></span>
                <span class="radio-option__label">до 1 000 000 ₽</span>
              </label>
              
              <label class="radio-option">
                <input type="radio" name="budget" value="до 2 000 000 ₽" class="radio-option__input" required>
                <span class="radio-option__indicator" aria-hidden="true"></span>
                <span class="radio-option__label">до 2 000 000 ₽</span>
              </label>
              
              <label class="radio-option">
                <input type="radio" name="budget" value="свыше 2 000 000 ₽" class="radio-option__input" required>
                <span class="radio-option__indicator" aria-hidden="true"></span>
                <span class="radio-option__label">свыше 2 000 000 ₽</span>
              </label>
              
              <!-- Свой вариант -->
              <label class="radio-option radio-option--custom">
                <input type="radio" name="budget" value="custom" class="radio-option__input radio-option__input--custom" data-custom-field="budget-custom">
                <span class="radio-option__indicator" aria-hidden="true"></span>
                <span class="radio-option__label">Свой вариант</span>
                <input type="text" 
                       class="radio-option__custom-input" 
                       name="budget-custom" 
                       placeholder="Укажите сумму"
                       aria-label="Ваш вариант бюджета"
                       data-parent-radio="budget">
              </label>
              
            </div>
          </div>
          
          <div class="quiz-step__error" role="alert" aria-live="polite"></div>
        </fieldset>

        <!-- Шаг 2: Пробег -->
        <fieldset class="quiz-step" data-step="2" aria-labelledby="step2-title" hidden>
          <legend class="visually-hidden" id="step2-title">Шаг 2: Пробег</legend>
          
          <div class="quiz-step__content">
            <h3 class="quiz-step__title" id="mileage-title">Примерный пробег авто?</h3>
            
            <div class="radio-group" role="radiogroup" aria-labelledby="mileage-title">
              
              <label class="radio-option">
                <input type="radio" name="mileage" value="До 50.000 км" class="radio-option__input" required>
                <span class="radio-option__indicator" aria-hidden="true"></span>
                <span class="radio-option__label">До 50.000 км</span>
              </label>
              
              <label class="radio-option">
                <input type="radio" name="mileage" value="До 100.000 км" class="radio-option__input" required>
                <span class="radio-option__indicator" aria-hidden="true"></span>
                <span class="radio-option__label">До 100.000 км</span>
              </label>
              
              <label class="radio-option">
                <input type="radio" name="mileage" value="До 150.000 км" class="radio-option__input" required>
                <span class="radio-option__indicator" aria-hidden="true"></span>
                <span class="radio-option__label">До 150.000 км</span>
              </label>
              
              <!-- Свой вариант -->
              <label class="radio-option radio-option--custom">
                <input type="radio" name="mileage" value="custom" class="radio-option__input radio-option__input--custom" data-custom-field="mileage-custom">
                <span class="radio-option__indicator" aria-hidden="true"></span>
                <span class="radio-option__label">Свой вариант</span>
                <input type="text" 
                       class="radio-option__custom-input" 
                       name="mileage-custom" 
                       placeholder="Укажите пробег"
                       aria-label="Ваш вариант пробега"
                       data-parent-radio="mileage">
              </label>
              
            </div>
          </div>
          
          <div class="quiz-step__error" role="alert" aria-live="polite"></div>
        </fieldset>

        <!-- Шаг 3: Пожелания -->
        <fieldset class="quiz-step" data-step="3" aria-labelledby="step3-title" hidden>
          <legend class="visually-hidden" id="step3-title">Шаг 3: Пожелания</legend>
          
          <div class="quiz-step__content">
            <h3 class="quiz-step__title" id="preferences-title">Какие у вас пожелания к будущему авто?</h3>
            <p class="quiz-step__subtitle">Год, марка, коробка и т.д. Если нет пожеланий: поставьте 0 или -</p>
            
            <div class="form-field">
              <input type="text" 
                     name="preferences" 
                     id="preferences-input"
                     class="form-input" 
                     placeholder="Например: седан, автомат, не старше 2020 года"
                     aria-describedby="preferences-hint">
              <span id="preferences-hint" class="visually-hidden">Введите ваши пожелания к автомобилю</span>
            </div>
          </div>
          
          <div class="quiz-step__error" role="alert" aria-live="polite"></div>
        </fieldset>

        <!-- Шаг 4: Контакты (финальный) -->
        <fieldset class="quiz-step quiz-step--contacts" data-step="4" aria-labelledby="step4-title" hidden>
          <legend class="visually-hidden" id="step4-title">Контактные данные</legend>
          
          <div class="quiz-step__content">
            <h3 class="quiz-step__title">Оставьте контакты для связи</h3>
            <p class="quiz-step__subtitle quiz-step__subtitle--highlight">
              Вы в одном шаге от консультации по подбору авто с индивидуальным подходом + <strong>скидка 5000 рублей!</strong>
            </p>
            
            <!-- Имя -->
            <div class="form-field">
              <label for="contact-name" class="form-label">Как мы можем к вам обращаться?</label>
              <input type="text" 
                     name="name" 
                     id="contact-name"
                     class="form-input" 
                     placeholder="Имя"
                     required
                     pattern="^[а-яА-ЯёЁa-zA-Z\s\-]{2,}$"
                     autocomplete="name">
            </div>
            
            <!-- Телефон -->
            <div class="form-field">
              <label for="contact-phone" class="form-label">Ваш номер телефона для связи</label>
              <div class="phone-input-wrapper">
                
                <input type="tel" 
                       name="phone" 
                       id="contact-phone"
                       class="form-input form-input--phone" 
                       placeholder="+7 (000) 000-00-00"
                       required
                       pattern="^\+7\s?\(?\d{3}\)?\s?\d{3}-\d{2}-\d{2}$"
                       autocomplete="tel"
                       inputmode="tel">
              </div>
            </div>
            
            <!-- Чекбоксы -->
            <div class="checkbox-group">
              <label class="checkbox-option">
                <input type="checkbox" name="discount-confirmed" checked disabled>
                <span class="checkbox-option__indicator" aria-hidden="true"></span>
                <span class="checkbox-option__label">Скидка зафиксирована</span>
              </label>
              
              <label class="checkbox-option checkbox-option--required">
                <input type="checkbox" name="privacy-agree" required checked>
                <span class="checkbox-option__indicator" aria-hidden="true"></span>
                <span class="checkbox-option__label">
                  Я подтверждаю свое согласие с <a href="/privacy" target="_blank" rel="noopener">политикой конфиденциальности</a>
                </span>
              </label>
            </div>
          </div>
          
          <div class="quiz-step__error" role="alert" aria-live="polite"></div>
        </fieldset>

        <!-- Кнопки навигации -->
        <footer class="quiz-footer">
          <button type="button" 
                  class="quiz-btn quiz-btn--prev" 
                  aria-label="Предыдущий шаг"
                  disabled>
            ← Назад
          </button>
          
          <button type="button" 
                  class="quiz-btn quiz-btn--next"
                  aria-label="Следующий шаг">
            Далее →
          </button>
          
          <button type="submit" 
                  class="quiz-btn quiz-btn--submit"
                  hidden>
            Получить консультацию и узнать стоимость
          </button>
        </footer>

      </form>

      <!-- Успешная отправка (скрыто по умолчанию) -->
      <div class="quiz-success" hidden>
        <div class="quiz-success__icon" aria-hidden="true">✓</div>
        <h3 class="quiz-success__title">Спасибо за заявку!</h3>
        <p class="quiz-success__text">Наш менеджер свяжется с вами в ближайшее время для уточнения деталей.</p>
      </div>

    </div>
  </div>
</section>