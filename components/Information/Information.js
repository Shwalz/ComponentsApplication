class Information {

    render() {
        const html = `
            <div class="information__container">
                <div class="information__blur"></div>

                <div class="information__popup">
                    <div class="information__logo">
                        <p class="information__title">INFORMATION</p>
                        <button class="information__button">
                            <i class="fas fa-times button__img"></i>
                        </button>
                    </div>

                    <div class="information__snipets">
                        <div class="information__snipets-A">
                            <span class="snipets__color">Liked&#160</span>
                            <span class="snipets__otherColor"><span class="snipets__color">/</span> Information <span class="snipets__color">/</span>&#160</span>
                        </div>
                        <div class="information__snipets-A">
                            <span class="snipets__color">Snipping /</span>
                            <span class="snipets__color">&#160Payment</span>
                        </div>
                    </div>

                    <div class="information__questions-authority">
                        <p>Already Have An Account?</p>
                        <span class="snipets__otherColor">Log in</span>
                    </div>


                    <div class="inputs__Block">
                        <input type="text" class="inputs" placeholder="Email">
                        <input type="text" class="inputs" placeholder="Phone">

                        <div class="inputsLittleChild">
                            <input type="text" class="inputs inputsLittle" placeholder="First name">
                            <input type="text" class="inputs" placeholder="Last name">
                        </div>

                        <div class="inputsLittleChild">
                            <input type="text" class="inputs inputsLittle" placeholder="Country">
                            <input type="text" class="inputs" placeholder="City">
                        </div>

                        <input type="text" class="inputs" placeholder="Street and house number">
                        <input type="text" class="inputs" placeholder="Apartment, suite, etc (optional)">

                    </div>

                        

                    <div class="information__confirm">
                        <button class="information__confirm-span">RETURN TO LIKED</button>
                        <button class="information__btn">Continue to shipping</button>
                    </div>
                
                </div>
                
            </div>
        `
        
        ROOT_INFORMATION.innerHTML = html

        this.eventListener()
    }

    close() {
        ROOT_INFORMATION.innerHTML = ''
    }

    renderShipping() {
        modalWindowShipping.render()
        ROOT_INFORMATION.innerHTML = ''
    }

    eventListener() {
        const closeBtnInformation = document.querySelector('.information__button')
        closeBtnInformation.addEventListener('click', this.close)

        const goToShippingBtn = document.querySelector('.information__btn')
        goToShippingBtn.addEventListener('click', this.renderShipping)

        const returnBackBtn = document.querySelector('.information__confirm-span')
        returnBackBtn.addEventListener('click', this.close)
    }
}

const information = new Information()