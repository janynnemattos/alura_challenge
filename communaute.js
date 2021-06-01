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
        const codeHtmlBlock = codeHtml.querySelector('code')
        hljs.highlightBlock(codeHtmlBlock)
    })
}

function createCard(project) {
    let card = `
    <a href="index.html class="all-projects" data-id="${project.id}">
        <div class="container-project" >
            <div class="text-content-container" style="background-color: ${project.detailsOfProject.colorOfProject}"> 
                <div class="buttons">
                    <button class="button-red"></button>
                    <button class="button-yellow"></button>
                    <button class="button-green"></button>
                </div>
                <div class="text-editor">                  
                    <div class="text-editor-container">
                        <code class="preview hljs ${project.detailsOfProject.language}"> ${project.detailsOfProject.code}</code>
                    </div>
                </div>
            </div>
            <div class="description-project-content">
                <h2 class="project-title">${project.detailsOfProject.titleOfProject}</h2>
                <p class="project-description">${project.detailsOfProject.descriptionOfProject}</p>
                <span class="project-language ${project.detailsOfProject.language}">${project.detailsOfProject.language}</span>
            </div>
        </div>
    </a>
    `
    console.log(project)
    return card
}