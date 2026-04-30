<div class="callback-modal" id="callbackModal">
    <div class="callback-modal__overlay"></div>
    <div class="callback-modal__container">
        <div class="callback-modal__content">

            <div class="callback-modal__header">
                <button class="callback-modal__close" aria-label="Закрыть">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>
                <a href="/" class="header-logo" aria-label="На главную">
                    <div class="text-red-500 text-2xl font-black italic tracking-tighter" vid="15">
                        АВТО<span class="text-white" vid="16">СТИЛЬ</span>
                    </div>
                </a>
            </div>

            <div class="callback-modal__body">
                <h2 class="callback-modal__title">Оставьте заявку на обратный звонок</h2>
                <p class="callback-modal__subtitle">С вами свяжется наш менеджер, чтобы уточнить все нюансы и расскажет про все этапы автоподбора</p>

                <form class="callback-modal__form" id="callbackForm">
                    <div class="callback-modal__form-group">
                        <label class="callback-modal__label">Напишите ваш номер телефона</label>
                        <div class="callback-modal__phone-wrapper">
                            <div class="callback-modal__country-code">
                                <span class="callback-modal__flag">🇷</span>
                                <span class="callback-modal__code">+7</span>
                            </div>
                            <input
                                type="tel"
                                class="callback-modal__input"
                                placeholder="(000) 000-00-00"
                                id="phoneInput"
                                required>
                        </div>
                    </div>

                    <button type="submit" class="callback-modal__btn">
                        ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК
                    </button>

                    <label class="callback-modal__checkbox">
                        <input type="checkbox" required checked>
                        <span class="callback-modal__checkbox-mark"></span>
                        <span class="callback-modal__checkbox-text">
                            Нажимая на кнопку "Заказать обратный звонок", Вы принимаете <a href="#">условия</a>
                        </span>
                    </label>
                </form>
            </div>

        </div>
    </div>
</div>
