// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");
const pendingTasksNumb = document.querySelector(".pendingTasks");
listArray = [];
inputBox.onkeyup = () => {
    let userEnteredValue = inputBox.value; //getting user entered value
    if (userEnteredValue.trim() != 0) { //if the user value isn't only spaces
        addBtn.classList.add("active"); //active the add button
    } else {
        addBtn.classList.remove("active"); //unactive the add button
    }
}
// showTasks(); //calling showTask function
addBtn.onclick = () => { //when user click on plus icon button
    let userEnteredValue = inputBox.value; //getting input field value

    if (userEnteredValue) {
        listArray.push(userEnteredValue);
        showTasks();
    }

    showTasks(); //calling showTask function
    addBtn.classList.remove("active"); //unactive the add button once the task added
}
function showTasks() {
    if (listArray.length == 0) {
        listArray = [];
    }

    else if (listArray.length > 0) {
        const pendingTasksNumb = document.querySelector(".pendingTasks");
        pendingTasksNumb.textContent = listArray.length; //passing the array length in pendingtask
        if (listArray.length > 0) { //if array length is greater than 0
            deleteAllBtn.classList.add("active"); //active the delete button
        } else {
            deleteAllBtn.classList.remove("active"); //unactive the delete button
        }
    }
    let newLiTag = "";
    listArray.forEach((element, index) => {
        newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i style="font-size:11px">DELETE</i></span></li>`;
    });
    pendingTasksNumb.textContent = listArray.length;
    todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
    inputBox.value = ""; //once task added leave the input field blank
}

function deleteTask(index) {
    listArray.splice(index, 1);
    showTasks(); //call the showTasks function
}
// delete all tasks function
deleteAllBtn.onclick = () => {
    listArray = []; //empty the array
    showTasks(); //call the showTasks function
}