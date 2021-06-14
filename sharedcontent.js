const buttonMobile = document.querySelector('.button-mobile')

const navMobile = document.querySelector('.link-nav-ul')
const userMobile = document.querySelector('.user-photo-head-of-page')

//hamburguer button mobile
function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const menuNav = document.querySelector('.menu-nav')
    menuNav.classList.toggle('active');
    const active = menuNav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expended', active)
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fermer Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Ouvrir Menu')
    }
}

buttonMobile.addEventListener('click', toggleMenu)
buttonMobile.addEventListener('touchstart', toggleMenu)


//user profile button mobile
window.addEventListener('resize', () => {
    let size = window.innerWidth
    console.log(size)
    if(size < 400) {
        navMobile.append(userMobile)
    }else {
        document.querySelector('.head-of-page').append(userMobile)
    }
}
)

