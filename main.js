
const tab = [];

class Project {
    constructor(name){
        this.name=name;
        this.details=[];
    }
}

class ProjectElement {
    constructor(title, description, dueDate){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = 0;
    }
}

const getAllProjectsNames = () => {
    tab.forEach(element => {
        console.log(element.name);
    });
}

const addNewProject = (name) => {
const tabElement = new Project(name);
tab.push(tabElement);
}

const addNewProjectElement = (title, description, dueDate, index) =>{
    const ProjectEl = new ProjectElement(title, description, dueDate);
    tab[index].details.push(ProjectEl);
}

const getAllProjectElements = (index, num) => {
    console.log(tab[index].details[num].title);
    console.log(tab[index].details[num].dueDate);
}

const expandProjectElement = (index, num) => {
    console.log(tab[index].details[num].description);
}

const deleteProjectElement = (index, num) => {
    tab[index].details.splice(num,1);
}

const changePriority = (index, num) => {
    tab[index].details[num].priority = 1;
}


const test2 = new Project("Nazwa");
const test3 = new Project("Nazwa2");
const test4 = new Project("Nazwa3");

tab.push(test2);
tab.push(test3);
tab.push(test4);

addNewProject("DZIAŁA");
getAllProjectsNames();
addNewProjectElement("Tytul","OPIS",2023-2-24,0);
addNewProjectElement("Tytul2","OPIS2",2022223-2-24,0);
changePriority(0,0);
getAllProjectElements(0,0);


console.log(tab);