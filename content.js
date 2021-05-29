//text editor
const codeArea = document.querySelector('.text-editor-container')
const language = document.querySelector('.language')
const button = document.querySelector('.button-highlight')

function changeLanguage() {
    const code = codeArea.querySelector('code')
    codeArea.innerHTML = `<code class="preview hljs ${language.value}" contenteditable="true" aria-label="editor"></code>`
    codeArea.firstChild.innerText = code.innerText
}
language.addEventListener('change', () => {
    changeLanguage()
})
button.addEventListener('click', () => {
    const code = codeArea.querySelector('code')
    hljs.highlightBlock(code)
})

//button color
const buttonColor = document.querySelector('.color-project')
const backgroundColor = document.querySelector('.text-content-container')

function selectColor() {
    const color = buttonColor.value
    backgroundColor.style.backgroundColor=color
}
buttonColor.addEventListener('input', selectColor);

//hamburguer button mobile
const buttonMobile = document.querySelector('.button-mobile')

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
