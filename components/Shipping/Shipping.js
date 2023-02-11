class Shipping {

    render() {

        const html = `
        
            <div class="shipping__container">
            
                <div class="shipping__blur"></div>

                <div class="shipping__popup">

                    <div class="shipping__logo">
                        <p class="shipping__title">SHIPPING</p>
                        <button class="shipping__button">
                            <i class="icon-times shipping__button-button"></i>
                        </button>
                    </div>

                    <div class="shipping__snipets">
                        <span>Liked /</span>
                        <span>Information </span>
                        <span class="shipping-snipets__otherColor">/ Snipping /</span>
                        <span>Payment</span>
                    </div>

                    <input type="text" class="shipping__inputs" placeholder="Contact">
                    <input type="text" class="shipping__inputs" placeholder="Ship to">

                    <input type="text" class="shipping__inputs" placeholder="International Shipping">
                    
                    <div class="shipping__pay">
                        <div class="shipping__pay-space">
                            <p class="shipping__pay-text">Subtotal</p>
                            <span class="shipping__pay-price">€<span>69.98</span></span>
                        </div>
                        <div class="shipping__pay-space">
                            <p class="shipping__pay-text">Shipping</p>
                            <span class="shipping__pay-price">€<span>9.95</span></span>
                        </div>
                    </div>

                    <div class="shipping__confirm">
                        <span class="shipping__confirm-span">Return to information</span>
                        <button class="shipping__btn">Continue to payment</button>
                    </div>
                
                </div>
                
            </div>
        
        `

        ROOT_SHIPPING.innerHTML = html

    }


}

const shipping = new Shipping()

