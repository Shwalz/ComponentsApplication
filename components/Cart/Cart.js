let CARTPRODUCTS = [
    {   
        "img": "components/Cart/images/Image1.png",
        "title": "WOMAN CRAYOLA T-SHIRT",
        "text": "Cadet Blue Crayola",
        "price": 29.99
    },
    {
        "img": "components/Cart/images/Image2.png",
        "title": "WOMAN CRAYOLA longsleeve",
        "text": "Gold Crayola",
        "price": 39.99 
    },
    {
        "img": "components/Cart/images/Image3.jpg",
        "title": "WOMAN CRAYOLA T-SHIRT",
        "text": "Cadet Red",
        "price": 19.99
    },
    {
        "img": "components/Cart/images/Image4.jfif",
        "title": "MAN T-SHIRT",
        "text": "Cadet White",
        "price": 49.99
    },
    {
        "img": "components/Cart/images/Image1.png",
        "title": "WOMAN CRAYOLA T-SHIRT",
        "text": "Cadet Blue Crayola",
        "price": 29.99
    },
    {
        "img": "components/Cart/images/Image1.png",
        "title": "WOMAN CRAYOLA T-SHIRT",
        "text": "Cadet Blue Crayola",
        "price": 29.99
    }
]

class Cart {

    products = []

    render() {
        const html = `
            <div class="cart__container">
                <div class="cart__blur"></div>
                <div class="cart__modal-window">

                    <div class="cart__header">

                        <div class="header__first">
                            <p class="header-first__title">LIKED</p>
                            <button class="header-first__button-close">
                                <i class="fas fa-times cart-button"></i>
                            </button>
                        </div>

                        <div class="cart__properties">
                            <span class="property">Product</span>
                            <div class="properties__div">
                                <span class="property">Size</span>
                                <span class="property">Quantity</span>
                                <span class="property">Price</span>
                            </div>
                        </div>

                    </div>

                    <div class="cart__products">
                        ${this.createCart(CARTPRODUCTS)}
                    </div>

                    <div class="cart__footer">

                        <div class="cart-footer__text">
                            <p>Add Order Note</p>
                            <div class="cart-footer__untext">
                                <span>Shipping & Taxes</span>
                                <span>Calculated At Checkout</span>    
                            </div>
                        </div>

                        <button class="cart__checkout-btn">checkout | € 69.98</button>
                    </div>

                </div>
            </div>
        `
        
        ROOT_CART.innerHTML = html
        this.eventListenerCart()  
    }

    generateProduct(img, title, text, price) {
        return `
            <div class="cart-products__items">
                            
                <div class="product-item__content">
                    <img src="${img}">
                    
                    <div class="product-item__info">
                        <p class="product-info__title">${title}</p>
                        <span class="product-info__text">${text}</span>
                    </div>
                </div>

                <div class="cart-product__configuration">
                    <span class="product-item__size">M<button class="product-item__size-btn"><i class="icon-arrow-down"></i></button></span>
                    <div class="product-item__numbers">
                        <button class="cart__btn-minus cart-numbers__btn"><i class="icon-minus-solid cart-numbers__icon"></i></button>
                        <span class="cart__current">0</span>
                        <button class="cart__btn-plus cart-numbers__btn"><i class="icon-plus-solid cart-numbers__icon"></i></button>
                    </div>
                    <span class="product-item__price">€<span>${price}</span></span>
                </div>  

            </div>
        `
    }

    createCart(CARTPRODUCTS) {
        let html = ''

        CARTPRODUCTS.forEach(element => {
            html += this.generateProduct(element.img, element.title, element.text, element.price)
        });

        return html
    }

    plusClick() {
            if (parseInt(currentBtn.innerText) < 99) {
                currentBtn.innerText = ++currentBtn.innerText;
            }
    }
    minusClick() {
        if (parseInt(currentBtn.innerText) > 0) {
            currentBtn.innerText = --currentBtn.innerText;
        }
    }

    eventListenerCart() {
        const closeBtn = document.querySelector('.cart-button')
        closeBtn.addEventListener('click', this.hideCart)

        const informationBtn = document.querySelector('.cart__checkout-btn')
        informationBtn.addEventListener('click', this.showInformationWindow)
    }

    showInformationWindow() {
        information.render()
    }

    hideCart() {
        ROOT_CART.innerHTML = ''
        document.body.style.overflow = 'scroll'
    }
}

const cart = new Cart()