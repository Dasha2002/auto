<div class="question-modal" id="questionModal">
    <div class="question-modal__overlay"></div>
    <div class="question-modal__container">
        <div class="question-modal__content">


            <div class="question-modal__header">
                <button class="question-modal__close" aria-label="Закрыть">
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

            <div class="question-modal__body">
                <h2 class="question-modal__title">Задайте вопрос</h2>
                <p class="question-modal__subtitle">И мы свяжемся с Вами для уточнения деталей</p>

                <form class="question-modal__form" id="questionForm">
                    <div class="question-modal__form-group">
                        <label class="question-modal__label">Ваше имя</label>
                        <input
                            type="text"
                            class="question-modal__input"
                            placeholder="Имя"
                            id="questionName"
                            required>
                    </div>

                    <div class="question-modal__form-group">
                        <label class="question-modal__label">Ваш телефон</label>
                        <div class="question-modal__phone-wrapper">
                            <div class="question-modal__country-code">
                                <span class="question-modal__flag">RU</span>
                                <span class="question-modal__code">+7</span>
                            </div>
                            <input
                                type="tel"
                                class="question-modal__input question-modal__phone-input"
                                placeholder="(000) 000-00-00"
                                id="questionPhone"
                                required>
                        </div>
                    </div>

                    <div class="question-modal__form-group">
                        <label class="question-modal__label">Ваш вопрос</label>
                        <textarea
                            class="question-modal__textarea"
                            placeholder="Опишите ваш вопрос..."
                            id="questionText"
                            rows="4"
                            required></textarea>
                    </div>

                    <button type="submit" class="question-modal__btn">
                        ОТПРАВИТЬ
                    </button>

                    <label class="question-modal__checkbox">
                        <input type="checkbox" required checked>
                        <span class="question-modal__checkbox-mark"></span>
                        <span class="question-modal__checkbox-text">
                            Нажимая на кнопку "Отправить", Вы принимаете <a href="#">условия</a>
                        </span>
                    </label>
                </form>
            </div>

        </div>
    </div>
</div> 