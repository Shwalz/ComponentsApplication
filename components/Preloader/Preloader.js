class Preloader {

    render() {
        const html = `
            <div class="preloader__container">
                <div class="preloader__offer">
                    <h1 class="preloader__title">Yellow peace</h1>
                    <button class="preloader__button button">
                        <span class="button__title">take a look</span>
                    </button>
                </div>
                <div class="preloader__image"></div>
            </div>
        `

        ROOT_PRELOADER.innerHTML = html

        this.eventListener()
    }

    hidePreloader() {
        ROOT_PRELOADER.style.display = 'none'
        catalog.render()
    }

    eventListener() {
        const preloaderButton = document.querySelector('.preloader__button')

        preloaderButton.addEventListener('click', this.hidePreloader)
    }

}

const preloader = new Preloader()