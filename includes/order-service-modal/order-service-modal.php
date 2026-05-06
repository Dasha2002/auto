<div class="order-modal" id="orderModal">
    <div class="order-modal__overlay"></div>
    <div class="order-modal__container">
        <div class="order-modal__content">

            <div class="order-modal__header">
                <h2 class="order-modal__title">Ваш заказ:</h2>
                <button class="order-modal__close" aria-label="Закрыть">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>

            <div class="order-modal__body">

                <!-- Список товаров -->
                <div class="order-modal__items" id="orderItems">
                    <!-- JS заполнит -->
                </div>

                <!-- Сумма -->
                <div class="order-modal__subtotal">
                    Сумма: <span id="orderSubtotal">0 ₽</span>
                </div>

                <hr class="order-modal__divider">

                <!-- Телефон -->
                <div class="order-modal__form-group">
                    <label class="order-modal__label" for="orderPhone">Ввш телефон</label>
                    <p class="order-modal__hint">Напишите ваш номер телефона</p>
                    <div class="order-modal__phone-wrapper">
                        <div class="order-modal__country-code">
                            <span class="order-modal__flag">🇷🇺</span>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style="margin-left:2px;">
                                <path d="M1 1L5 5L9 1" stroke="#6b7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="order-modal__code">+7</span>
                        </div>
                        <input
                            type="tel"
                            class="order-modal__phone-input"
                            id="orderPhone"
                            placeholder="(000) 000-00-00"
                            maxlength="15">
                    </div>
                </div>

                <!-- Итог -->
                <div class="order-modal__total">
                    Итоговая сумма: <span id="orderTotal">0 ₽</span>
                </div>

                <!-- Кнопка -->
                <button class="order-modal__submit" id="orderSubmit" type="button">
                    ОТПРАВИТЬ
                </button>

                <p class="order-modal__note">С вами свяжется менеджер Анастасия, чтобы уточнить все нюансы и расскажет про все этапы автоподбора</p>

                <p class="order-modal__privacy">
                    Нажимая на кнопку "Отправить", Вы принимаете <a href="#">условия</a>
                </p>

            </div>
        </div>
    </div>
</div>