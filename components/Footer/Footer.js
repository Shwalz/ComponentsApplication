class Footer {

    createFooter () {
        return `
            <div class="footer">
                <div class="footer__line"></div>
                <div class="footer__container">
                    <div class="footer__offer f-offer">
                        <h1 class="f-offer__title">giallo</h1>

                        <p class="f-offer__text">Our offices are located in the Netherlands, Italy, Germany and France.</p>

                        <div class="f-offer__social f-social">
                            <i class="fa-brands fa-instagram f-social__item"></i>
                            <i class="fa-brands fa-facebook-f f-social__item"></i>
                            <i class="fa-brands fa-twitter f-social__item"></i>
                        </div>

                        <span class="f-offer__giallo">© 2022 giallo</span>
                    </div>

                    <div class="footer__iformation f-information">
                        <span class="f-information__title">Information</span>

                        <div class="f-information__items f-items">
                            <a class="f-items__link" href="#">Membership</a>
                            <a class="f-items__link" href="#">Return Policy</a>
                            <a class="f-items__link" href="#">FAQ</a>
                            <a class="f-items__link" href="#">Feedback</a>
                            <a class="f-items__link" href="#">Gift cards</a>
                            <a class="f-items__link" href="#">Privacy</a>
                        </div>
                    </div>

                    <div class="footer__quick-link f-links">
                        <span class="f-links__title">quick link</span>

                        <div class="f-links__links f-links">
                            <a class="f-links__link" href="#">Home page</a>
                            <a class="f-links__link" href="#">Shop</a>
                            <a class="f-links__link" href="#">Collections</a>
                            <a class="f-links__link" href="#">About Us</a>
                            <a class="f-links__link" href="#">Contact</a>
                            <a class="f-links__link" href="#">Newsletter</a>
                        </div>
                    </div>

                    <div class="footer__newsletter newsletter">
                        <span class="newsletter__title">newsletter</span>

                        <input type="text" class="newsletter__input" placeholder="enter your email">

                        <button class="newsletter__btn">Subscribe</button>
                    </div>
                </div>
            </div>
        `
    }
}

const footer = new Footer()