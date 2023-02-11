class ModalWindowShipping {

    SHIPPING_FORMS = [
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
            <div class="modal-window-shipping__container modal-window-shipping">

                <div class="modal-window-shipping__content shipping">

                    <div class="shipping__header">
                        <h2 class="shipping__title">SHIPPING</h2>
                        <button class="shipping__button-cross button-shipping">
                            <i class="fas fa-times button-shipping__icon"></i>
                        </button>
                    </div>
                    
                    <span class="shipping__nav">Liked / Information / <span class="payment-nav__current">Shipping</span> / Payment</span>

                    <div class="shipping__forms form">
                        ${this.createForms(this.SHIPPING_FORMS)}
                        <div class="form__international-shipping international-shipping">
                            <span class="international-shipping__title">International Shipping</span>
                            <span class="international-shipping__price">€ 9.95</span>
                        </div>
                    </div>

                    <div class="shipping__prices prices">
                        <div class="prices__line"></div>
                        <div class="prices__subtotal subtotal">
                            <span class="subtotal__title">Subtotal</span>
                            <span class="subtotal__price">€ 69.98</span>
                        </div>
                        <div class="prices__shipping price-shipping">
                            <span class="price-shipping__title">Shipping</span>
                            <span class="price-shipping__price">€ 9.95</span>
                        </div>
                        <div class="prices__line"></div>
                    </div>

                    <div class="shipping__total total">
                        <span class="total__title">Total</span>
                        <span class="total__price">€ 79.93</span>
                    </div>
                    <span class="shipping__taxes">Including Taxes</span>
                    <div class="shipping__buttons button">
                        <button class="button__retutn-to-information">Return to information</button>
                        <button class="button__to-payment">Continue to payment</button>
                    </div>
                    
                </div>

                <div class="modal-window-shipping__blur"></div>

            </div>
        `

        ROOT_MODAL_SHIPPING.innerHTML = html
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

    createForms(SHIPPING_FORMS) {
        let html = ''

        SHIPPING_FORMS.forEach(el => {
            html += this.generateForm(el.name, el.title, el.text)
        });

        return html
    }

    showModalWindowPayment() {
        payment.render()
        ROOT_MODAL_SHIPPING.innerHTML = ''
    }

    eventListener() {
        const showWindowPaymentButton = document.querySelector('.button__to-payment')
        showWindowPaymentButton.addEventListener('click', this.showModalWindowPayment)

        const returnBackBtn = document.querySelector('.button__retutn-to-information')
        returnBackBtn.addEventListener('click', this.returnBack)

        const closeShipping = document.querySelector('.button-shipping')
        closeShipping.addEventListener('click', this.returnBack)
    }

    returnBack() {
        ROOT_MODAL_SHIPPING.innerHTML = ''
        information.render()
    }
}

const modalWindowShipping = new ModalWindowShipping()