const codeArea = document.querySelector('.text-editor-container')
const language = document.querySelector('.language')
const button = document.querySelector('.button-highlight')
const titleOfProject = document.querySelector('.name-project')
const descriptionOfProject = document.querySelector('.description-project')

const buttonColor = document.querySelector('.color-project')
const backgroundColor = document.querySelector('.text-content-container')

const buttonSave = document.querySelector('.save-project')

//text editor
function changeLanguage() {
    let code = codeArea.querySelector('code').innerText
    codeArea.innerHTML = `<code class="preview hljs ${language.value}" contenteditable="true" aria-label="editor"></code>`
    codeArea.firstChild.innerText = code
}
language.addEventListener('change', () => {
       changeLanguage()
})
button.addEventListener('click', () => {
    const code = codeArea.querySelector('code')
    hljs.highlightBlock(code)
})

//button color
function selectColor() {
    const color = buttonColor.value
    backgroundColor.style.backgroundColor=color
}
buttonColor.addEventListener('input', selectColor);

//button save
buttonSave.addEventListener('click', (event) => {
    event.preventDefault()
    if (typeof(Storage) !== "undefined"){
        const project = buildProject()
        saveLocalStorage(project)
    }else {
        console.log("Local Storage n'est pas supporté")
    }
    //location.reload()
})

//button clear space
const buttonClose = document.querySelector('.button-red')
const contentEditor = document.querySelector('.preview')
buttonClose.addEventListener('click', () => {
    contentEditor.innerText=""
})

//buttonsaveimage
const buttonSaveImg = document.querySelector('.save-as-image')
buttonSaveImg.addEventListener('click', () => {
    domtoimage.toJpeg(backgroundColor, { quality: 1 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        let title = titleOfProject.value || 'image'
        link.download = `${title}.jpeg`;
        link.href = dataUrl;
        link.click();
    });
})

function buildProject() {
    let project = {
        'id': atribuiId(),
        'detailsOfProject': {
            'titleOfProject' : titleOfProject.value,
            'descriptionOfProject': descriptionOfProject.value,
            'language': language.value,
            'colorOfProject': buttonColor.value,
            'code': codeArea.querySelector('code').innerText,
        }
    }
    return project
}

function atribuiId(){
    return localStorage.length
}

function saveLocalStorage(objectJson) {
    localStorage.setItem(objectJson.id, JSON.stringify(objectJson))
    window.location.href="/alura_challenge/communaute.html"
    console.log('ok')
}




