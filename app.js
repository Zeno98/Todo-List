const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");
const pendingTasksNumb = document.querySelector(".pendingTasks");
listArray = [];
inputBox.onkeyup = () => {
    let userEnteredValue = inputBox.value; 
    if (userEnteredValue.trim() != 0) { 
        addBtn.classList.add("active"); 
    } else {
        addBtn.classList.remove("active"); 
    }
}

addBtn.onclick = () => { 
    let userEnteredValue = inputBox.value; 

    if (userEnteredValue) {
        listArray.push(userEnteredValue);
        showTasks();
    }

    showTasks(); 
    addBtn.classList.remove("active"); 
}
function showTasks() {
    if (listArray.length == 0) {
        listArray = [];
    }

    else if (listArray.length > 0) {
        const pendingTasksNumb = document.querySelector(".pendingTasks");
        pendingTasksNumb.textContent = listArray.length; 
        if (listArray.length > 0) { 
            deleteAllBtn.classList.add("active"); 
        } else {
            deleteAllBtn.classList.remove("active"); 
        }
    }
    let newLiTag = "";
    listArray.forEach((element, index) => {
        newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i style="font-size:11px">DELETE</i></span></li>`;
    });
    pendingTasksNumb.textContent = listArray.length;
    todoList.innerHTML = newLiTag; 
    inputBox.value = ""; 
}

function deleteTask(index) {
    listArray.splice(index, 1);
    showTasks(); 
}
// delete all tasks function
deleteAllBtn.onclick = () => {
    listArray = []; 
    showTasks(); 
}
