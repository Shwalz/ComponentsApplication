class Payment {

    PAYMENT_FORMS = [
        {
            "name": "contact",
            "title": "Contact",
            "text": "email@gmail.com",
        },
        {
            "name": "ship-to",
            "title": "Ship to",
            "text": "Via Senna, 22 Osmannoro FI, Italy",
        }
    ]

    render() {
        const html = `
            <div class="payment__container">
                <div class="payment__blur"></div>

                <div class="payment__popup">
                    <div class="payment__header">
                        <h1 class="payment__title">Payment</h1>
                        <button class="payment__button-close">
                            <i class="fas fa-times button__img"></i>
                        </button>
                    </div>

                    <span class="payment__nav">Liked / Information / Shipping / <span class="payment-nav__current">Payment</span></span>
                
                    <div class="payment__forms form">
                        ${this.createForms(this.PAYMENT_FORMS)}
                        <div class="form__method method">
                            <span class="method__title">Method</span>
                            <span class="method__text">International Shipping</span>
                            <span class="method__price">€ 9.95</span>
                        </div>
                    </div>

                    <div class="payment__payment-secure">
                        <h2 class="payment-secure__title">Payment</h2>
                        <span class="payment-secure__text">All transactions are secure and encrypted.</span>
                    </div>

                    <div class="payment__credit-card">
                    
                        <div class="credit-card__button-radio">
                            <form class="button-radio">
                                <input id="credit-card" type="radio" name="title-of-list">
                                <label for="credit-card">Credit Card</label>                       
                            </form>

                            <div class="credit-card__cards">
                                <img src="components/Payment/images/Visa.png">
                                <img src="components/Payment/images/MasterCard.png">
                            </div>
                        </div>

                        <div class="credit-card__forms-container">
                            <div class="credit-card__forms">
                            
                                <form class="card-numder">
                                    <input type="text" size="19" placeholder="Card number">
                                    <img src="components/Payment/images/bx_bxs-lock-alt.png">
                                </form>

                                <form class="card-name">
                                    <input type="text" placeholder="Name on card">
                                </form>

                                <div class="card-date-code">
                                    <form class="card-date">
                                        <input type="text" placeholder="Expiration date (MM / YY)">
                                    </form>

                                    <form class="card-security-code">
                                        <input type="text" placeholder="Security code">
                                        <img src="components/Payment/images/bi_question-circle-fill.png">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="credit-card__button-radio">
                        <form class="button-radio">
                            <input id="credit-card" type="radio" name="title-of-list">
                            <label for="credit-card">PayPal</label>                        
                        </form>
                        <img src="components/Payment/images/logos_paypal.png">
                    </div>

                    <div class="payment__buttons">
                        <button class="button__retutn-to-shipping">RETURN TO SHIPPING</button>
                        <button class="button__complete-order">COMPLETE ORDER</button>
                    <div>
                </div>
            </div>
        `

        ROOT_PAYMENT.innerHTML = html
        this.eventListener()
    }

    generateForm(name, title, text) {
        return `
            <div class="form__${name} ${name}">
                <span class="${name}__title">${title}</span>
                <span class="${name}__text">${text}</span>
                <button class="${name}__button">Change</button>
            </div>
        `
    }

    createForms(PAYMENT_FORMS) {
        let html = ''

        PAYMENT_FORMS.forEach(el => {
            html += this.generateForm(el.name, el.title, el.text)
        });

        return html
    }

    eventListener() {
        const completeBtn = document.querySelector('.button__complete-order')
        completeBtn.addEventListener('click', this.showCompleteWindow)

        const returnBackBtn = document.querySelector('.button__retutn-to-shipping')
        returnBackBtn.addEventListener('click', this.returnBack)

        const closePayment = document.querySelector('.payment__button-close')
        closePayment.addEventListener('click', this.returnBack)
    }

    showCompleteWindow() {
        modalWindow.render()
        ROOT_PAYMENT.innerHTML = ''
    }

    returnBack() {
        ROOT_PAYMENT.innerHTML = ''
        modalWindowShipping.render()
    }
}

const payment = new Payment()