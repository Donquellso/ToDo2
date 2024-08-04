import jsstuff from "./main.js";

const js = jsstuff();

js.addNewProject('Project 1');
js.addNewProject('Project 2');
js.addNewProject('Project 3');
js.addNewProject('ESSA');
js.getAllProjectsNames();

const DOM = () => {
let leftupper = document.getElementById("leftupper");
let leftmiddle = document.getElementById('leftmiddle');
let right = document.getElementById("right");
let rightDiv = document.getElementById('rightdiv');
const displayProjects = () => {
    let names = js.getAllProjectsNames();
    let namesDiv = document.createElement('div');
    names.forEach((name,index)=>{
        let ProjectName = document.createElement('h3');
        ProjectName.classList.add("ProjectName");
        ProjectName.innerHTML=name;
        ProjectName.addEventListener('click',()=>{projectNameListener(index)});
        namesDiv.appendChild(ProjectName);
    })
    leftmiddle.appendChild(namesDiv);
}
function projectNameListener(index){
    rightDiv.innerHTML="";
    let tab = js.getAllProjectElements(index);
    tab.forEach((element,num)=>{
        let projectElementDiv = document.createElement('div');
        let projectTitle = document.createElement('span');
        let projectDueDate = document.createElement('span');
        let projectDelete = document.createElement('span');
        projectDelete.textContent="XXX";
        projectDelete.addEventListener('click',()=>{
            js.deleteProjectElement(index,num);
            projectNameListener(index);
        })
        projectTitle.innerHTML=element.title;
        projectDueDate.innerHTML=element.dueDate;
        projectElementDiv.appendChild(projectTitle);
        projectElementDiv.appendChild(projectDueDate);
        projectElementDiv.appendChild(projectDelete);
        projectElementDiv.classList.add("projectElementDiv");
        projectElementDiv.addEventListener('click',()=>{
            if(projectElementDiv.classList.contains('open')){
            projectElementDiv.classList.remove('open');
        } else{
            projectElementDiv.classList.add('open');
        }
    });
        rightDiv.appendChild(projectElementDiv);
    });
}


displayProjects();
js.addNewProjectElement("TYTUŁ","OPIS",2022,0);
js.addNewProjectElement("TYTUŁ2","OPIS2",2023,0);





}
DOM();