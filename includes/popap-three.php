<div class="question-modal" id="carSelectionModal">
    <div class="question-modal__overlay"></div>
    <div class="question-modal__container">
        <div class="question-modal__content">

            <div class="question-modal__header">
                <button class="question-modal__close" aria-label="Закрыть">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>
                <img src="../assets/logo-footer.webp" alt="АвтоСтиль"/>
            </div>

            <div class="question-modal__body">
                <h2 class="question-modal__title">Подберем по вашим параметрам 5 и более надежных вариантов авто</h2>
                <p class="question-modal__subtitle">+ получите дополнительную скидку 5 000 р. на подбор</p>

                <form class="question-modal__form" id="carSelectionForm">

                    <div class="question-modal__form-group">
                        <label class="question-modal__label" for="carSelectionContact">Где вам удобнее связаться?</label>
                        <div class="question-modal__select-wrapper">
                            <select
                                class="question-modal__select"
                                id="carSelectionContact"
                                name="contact_type"
                                required>
                                <option value="" disabled selected>Выберите способ связи</option>
                                <option value="phone">Позвонить по телефону</option>
                                <option value="telegram">Telegram</option>
                                <option value="whatsapp">WhatsApp</option>
                            </select>
                            <svg class="question-modal__select-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                <path d="M1 1L6 7L11 1" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>

                    <div class="question-modal__form-group">
                        <label class="question-modal__label" for="carSelectionPhone">Напишите ваш номер телефона</label>
                        <div class="question-modal__phone-wrapper">
                            <div class="question-modal__country-code">
                                <span class="question-modal__flag">🇷🇺</span>
                                <span class="question-modal__code">+7</span>
                            </div>
                            <input
                                type="tel"
                                class="question-modal__input question-modal__phone-input"
                                placeholder="(000) 000-00-00"
                                id="carSelectionPhone"
                                name="phone"
                                required>
                        </div>
                    </div>

                    <button type="submit" class="question-modal__btn">
                        ПОЛУЧИТЬ ПОДБОРКУ И БОНУС
                    </button>

                    <label class="question-modal__checkbox">
                        <input type="checkbox" required checked>
                        <span class="question-modal__checkbox-mark"></span>
                        <span class="question-modal__checkbox-text">
                            Нажимая на кнопку "Отправить", Вы принимаете <a href="#">условия</a> Политики конфиденциальности и даете согласие на обработку персональных данных
                        </span>
                    </label>
                </form>
            </div>

        </div>
    </div>
</div>