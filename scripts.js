const button = document.querySelector('.dark-light-button')
const icon = document.querySelector('.dark-light-icon')

button.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode')
    
    if(isLight){
        icon.src = "./assets/icons8-símbolo-da-lua-96.png"
    } else {
        icon.src = "./assets/sun_6421124.png"
    }
    
})