class ModalWindow {

    render() {
        const html = `
            <div class="modal-window__container">
                <div class="modal-window__popup">
                    <button class="modal-window__button button">
                        <i class="fas fa-times button__img"></i>
                    </button>
                    <h1 class="modal-window__title">Perfetto</h1>
                    <i class="fas fa-check-circle modal-window__success"></i>
                </div>

                <div class="modal-window__blur"></div>
            </div>
        ` // Содержит наш html

        ROOT_MODAL.innerHTML = html // Помещаем наш html в обертку

        this.eventListener()
    }

    hideModalWindow() {
        ROOT_MODAL.innerHTML = ''
    }

    eventListener() {
        const closeButton = document.querySelector('.modal-window__button')
        closeButton.addEventListener('click', this.hideModalWindow)

        const closeWindow = document.querySelector('.modal-window__success')
        closeWindow.addEventListener('click', this.hideModalWindow)
    }

}

const modalWindow = new ModalWindow() // Создаем экземпляр нашего окна