let CATALOG = [
    {
        "id": 1,
        "name": "woman flax suit",
        "img": "https://i.ibb.co/C6cvjK4/Image-1.png",
        "price": 79.99
    },
    {
        "id": 2,
        "name": "man cerulean suit",
        "img": "https://i.ibb.co/d2R7pp2/Image-2.png",
        "price": 89.99
    },
    {
        "id": 3,
        "name": "woman sand dress",
        "img": "https://i.ibb.co/FwD5sBT/Image-3.png",
        "price": 49.99
    },
    {
        "id": 4,
        "name": "man white-blue jacket",
        "img": "https://i.ibb.co/5FWXyFz/Image-4.png",
        "price": 49.99
    },
    {
        "id": 5,
        "name": "man crayola coat",
        "img": "https://i.ibb.co/s1fQ0SG/Image-5.png",
        "price": 69.99
    },
    {
        "id": 6,
        "name": "man beau jacket",
        "img": "https://i.ibb.co/khcCM5Q/Image-6.png",
        "price": 44.99
    }
]

class Catalog {

    render() {
        const html = `
            <div class="main-page">
                ${navigationBar.createNavigationBar()}
                <div class="catalog">
                    <h1 class="catalog__title">CATALOG</h1>
                    <div class="catalog__items">
                        ${this.createCatalog(CATALOG)}
                    </div>
                </div>

                ${footer.createFooter()}
            </div>
        `

        ROOT_CATALOG.innerHTML = html
        this.eventListener()
    }

    generateProduct(id, name, price, img) {
        return `
            <div class="catalog__item">
                <div class="item__img" style="background-image: url(${img})"></div>
                <div class="item__offer">
                    <div class="item__text">
                        <span class="item__title">${name}</span>
                        <span class="item__price">$${price}</span>
                    </div>
                    <button class="item__btn" id="${id}">
                        <i class="far fa-heart item__btn-img"></i>
                    </button>
                </div>
            </div>
        `
    }

    createCatalog(CATALOG) {
        let html = ''

        CATALOG.forEach(element => {
            html += this.generateProduct(element.id, element.name, element.price, element.img)
        });

        return html
    }

    eventListener() {
        const cartButton = document.querySelector('.buttons__profile-btn')
        cartButton.addEventListener('click', this.showCart)

        const pushToCartButtons = document.querySelectorAll('.item__btn')
        pushToCartButtons.forEach(element => {
            element.addEventListener('click', { handleEvent: this.pushToCart, id: element.id })
        })
    }

    showCart() {
        cart.render()
        document.body.style.overflow = 'hidden'
    }

    pushToCart(event) {    
        let product = {}
        CATALOG.forEach(element => {
            console.log(element.id)
            if (element["id"] == this.id) {
                product = {
                    "id": id,
                    "name": element.name,
                    "img": element.img,
                    "price": element.price
                }
            }
        })

        cart.products.push(product)
        console.log(product);
    }
}

const catalog = new Catalog()