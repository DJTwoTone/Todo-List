//add time functions

const form = document.querySelector("form");
const todoList = document.querySelector('#todo-list');

window.addEventListener('load', function () {
    const savedTasks = JSON.parse(localStorage.getItem('todolist'));
    console.log(savedTasks);
    for (task in savedTasks) {
        const newLi = document.createElement('li');
        const newP = document.createElement('p');
        const doneBtn = document.createElement('button');
        const removeBtn = document.createElement('button');
        newP.innerText = task;
        doneBtn.innerText = "Done"
        removeBtn.innerText = "Remove"

        newLi.append(newP);
        newLi.append(doneBtn);
        newLi.append(removeBtn);
        todoList.append(newLi);

        if (savedTasks[task]) {
            newLi.classList.add('done')
        }



    }
})

form.addEventListener('submit', function (e) {


    e.preventDefault();
    const newTask = document.querySelector('#task');
    if (newTask.value != '') {

        const newLi = document.createElement('li');
        const newP = document.createElement('p');
        const doneBtn = document.createElement('button');
        const removeBtn = document.createElement('button');
        newP.innerText = newTask.value;
        doneBtn.innerText = "Done"
        removeBtn.innerText = "Remove"

        newLi.append(newP);
        newLi.append(doneBtn);
        newLi.append(removeBtn);
        todoList.append(newLi);
        remember();
        form.reset();
    }
})



todoList.addEventListener('click', function (e) {
    if (e.target.innerText === "Done") {
        e.target.parentElement.classList.add('done');
    } else if (e.target.innerText === "Remove") {
        e.target.parentElement.remove();
    }
    remember();
})

function remember() {
    const toSave = {};
    ps = todoList.getElementsByTagName('p');
    for (p of ps) {
        toSave[p.innerText] = p.parentElement.classList.contains('done')
    }
    localStorage.setItem("todolist", JSON.stringify(toSave));
}