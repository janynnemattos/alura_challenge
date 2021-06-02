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
})

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
//function modal
btn.onclick = function() {
  modal.style.display = "block";
}
//function click x, close
span.onclick = function() {
  modal.style.display = "none";
}
//click outside modal, close
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




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
    codeArea.innerHTML=""
}




