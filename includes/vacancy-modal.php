<div class="question-modal" id="vacancyModal">
    <div class="question-modal__overlay"></div>
    <div class="question-modal__container">
        <div class="question-modal__content">

            <div class="question-modal__header">
                <button class="question-modal__close" aria-label="Закрыть">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
                <img src="../assets/logo-footer.webp" alt="АвтоСтиль"/>
            </div>

            <div class="question-modal__body">
                <h2 class="question-modal__title">Работа в АВТОСтиль</h2>
                <p class="question-modal__subtitle">Заполните контактные данные и мы вам перезвоним</p>

                <form class="question-modal__form" id="vacancyForm">

                    <div class="question-modal__form-group">
                        <label class="question-modal__label" for="vacancyName">Ваше имя</label>
                        <input
                            type="text"
                            class="question-modal__input"
                            id="vacancyName"
                            name="name"
                            placeholder="Имя"
                            required>
                    </div>

                    <div class="question-modal__form-group">
                        <label class="question-modal__label" for="vacancyPhone">Ваш телефон</label>
                        <div class="question-modal__phone-wrapper">
                            <div class="question-modal__country-code">
                                <span class="question-modal__flag">🇷🇺</span>
                                <span class="question-modal__code">+7</span>
                            </div>
                            <input
                                type="tel"
                                class="question-modal__input question-modal__phone-input"
                                id="vacancyPhone"
                                name="phone"
                                placeholder="(000) 000-00-00"
                                required>
                        </div>
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