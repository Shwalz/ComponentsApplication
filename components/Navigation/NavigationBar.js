class NavigationBar {

    createNavigationBar() {
        return `
            <div class="navigation-bar">

                <span class="navigation-bar__logo">GIALLO</span>

                <div class="navigation-bar__menu">
                    <a href="#" class="menu__link">Shop</a>
                    <a href="#" class="menu__link">Collections</a>
                    <a href="#" class="menu__link">About us</a>
                    <a href="#" class="menu__link">Contact</a>
                </div>

                <div class="navigation-bar__buttons buttons">
                    <button class="buttons__search-btn buttons__item">
                        <i class="fas fa-search"></i>
                    </button>
                    <button class="buttons__profile-btn buttons__item">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="buttons__cart-btn buttons__item">
                        <i class="far fa-user"></i>
                    </button>
                </div>
            </div>

            <div class="navigation-bar__line"></div>
        `
    }
}

const navigationBar = new NavigationBar()