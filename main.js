const jsstuff = () => {
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
    let names=[];
    tab.forEach(element => {
       names.push(element.name);
    });
    return names;
}

const addNewProject = (name) => {
const tabElement = new Project(name);
tab.push(tabElement);
}

const addNewProjectElement = (title, description, dueDate, index) =>{
    const ProjectEl = new ProjectElement(title, description, dueDate);
    tab[index].details.push(ProjectEl);
}

const getAllProjectElements = (index) => {
    let elements = [];
    tab[index].details.forEach(element =>{
        let project = {
        title: element.title,
        dueDate: element.dueDate,
        }
        elements.push(project);
    })
    return elements;
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

const sortByPriority = (index) => {
        tab[index].details.sort((a,b)=> b.priority - a.priority);
}
return {
    getAllProjectsNames,
    addNewProject,
    addNewProjectElement,
    getAllProjectElements,
    expandProjectElement,
    deleteProjectElement,
    changePriority,
    sortByPriority,
};
}

export default jsstuff;