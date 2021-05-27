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



