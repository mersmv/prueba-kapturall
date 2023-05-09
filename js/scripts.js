const menu = document.getElementById('menu')
const logoBurguer = document.getElementById('logo__burguer')


logoBurguer.addEventListener('click', () => {
    menu.classList.toggle('header-none')
})

