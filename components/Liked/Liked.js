class Liked {

    render() {

        const html = `
        
            <div class="liked__container">
                <div class="liked__blur"></div>

                <div class="liked__popup">
                    
                </div>
            </div>
        
        `

        ROOT_LIKED.innerHTML = html
    }

}

const liked = new Liked()