const allProjects = document.querySelector('.all-projects')

new function(){
    showProjects()
}

function showProjects() {
    if(localStorage.length == 0) {
        return
    }
    let projects = []
    for(let i = 0; i < localStorage.length; i++) {
        projects.push(JSON.parse(localStorage.getItem(i)))
    }
    projects.forEach(project => {
        allProjects.innerHTML+= createCard(project)
        const codeHtml = allProjects.querySelector(`[data-id="${project.id}"]`)
        console.log(codeHtml)
        const codeHtmlBlock = codeHtml.querySelector('code')
        console.log(codeHtmlBlock)
        setTimeout(() => {
            console.log(codeHtmlBlock)
        }, 2000)
        hljs.highlightBlock(codeHtmlBlock)
    })
}
//function likes
let clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
  };


function createCard(project) {
    let card = `
    <div class="all-projects" data-id="${project.id}">
        <div class="container-project" >
            <div class="text-content-container" style="background-color: ${project.detailsOfProject.colorOfProject}"> 
                <div class="buttons">
                    <button class="button-red-communaute"></button> 
                    <button class="button-yellow-communaute"></button> 
                    <button class="button-green-communaute"></button> 
                </div>
                <div class="text-editor">                  
                    <div class="text-editor-container">
                    <a href="index.html"><code class="preview hljs ${project.detailsOfProject.language}"> ${project.detailsOfProject.code}</code></a>
                    </div>
                </div>
            </div>
            <div class="description-project-content">
                <h2 class="project-title">${project.detailsOfProject.titleOfProject}</h2>
                <p class="project-description">${project.detailsOfProject.descriptionOfProject}</p>
                <span class="project-language ${project.detailsOfProject.language}">${project.detailsOfProject.language}</span>
                <div class="interactions-project">
                    <div class="style-click">
                    <button type="button" class="button-project"> <img src="imgs/comentbutton.svg"></button>
                    </div>
                    <div class="style-click">
                    <button type="button" onClick="onClick()" class="button-project"><img src="imgs/likebutton.svg"></button>
                    <a id="clicks" class="icon-project-like">0</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    console.log(project)
    return card
}