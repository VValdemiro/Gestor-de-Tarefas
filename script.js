//função que adiciona tarefa
function addTask(){
    //titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;
        if(taskTitle) {
            const template = document.querySelector(".template");
            const newTask = template.cloneNode(true);
            //Adicionar Titulo
            newTask.querySelector(".task-title").textContent = taskTitle;
            //Remover as classes desnecessarias
            newTask.classList.remove("template");
            newTask.classList.remove("hide");
            //Adicionar tarefa na lista
            const list = document.querySelector("#task-list");
            list.appendChild(newTask);
            //Adicionar o evento de remover o botão
            const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
                removeTask(this);
            });
            //Adicionar evento de completar tarefa
            const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
                completeTask(this);
            });
            //Limpar imput
            document.querySelector("#task-title").value = "";
        }
}

//Função remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
};

//Funação de completar tarefa
function completeTask(task) {
    
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
};

//Evento adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){
    e.preventDefault();
    addTask();
});