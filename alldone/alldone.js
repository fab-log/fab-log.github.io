let date = new Date();

const getTasks = () => {
    if (JSON.parse(localStorage.getItem("myTasks")) === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("myTasks"));
    }
}

getTasks();

const getConfig = () => {
    if (localStorage.getItem("myConfig") === null) {
        config = {
            storedMode: "dark mode",
            storedOrder: "afterbegin"
        }
    } else {
        config = JSON.parse(localStorage.getItem("myConfig"));
    };
    console.log("config: " + JSON.stringify(config, null, 1));
}

getConfig();

const darkMode = document.querySelector("#dark-mode");
const btnTaskOrder = document.querySelector("#btn-task-order");

if (config.storedMode === "light mode") {
    document.body.classList.add("dark");
    darkMode.textContent = "light mode";
} else {
    document.body.classList.remove("dark");
    darkMode.textContent = "dark mode";
};

if (config.storedOrder === "afterbegin") {
    taskOrder = "afterbegin";
    btnTaskOrder.textContent = "Oldest tasks first";
} else {
    taskOrder = "beforeend";
    btnTaskOrder.textContent = "Latest tasks first";
}

const saveTasks = () => {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
};

const topNav = document.querySelector("#top-nav");
const burger = document.querySelector("#burger");
const x = document.querySelector("#x");
const menu = document.querySelector(".menu");
const showMenu = document.querySelector(".show-menu");
const imprint = document.querySelector("#imprint");
const btnImprint = document.querySelector("#btn-imprint");
const closeImprint = document.querySelector("#close-imprint");
const header = document.querySelector(".header");
const plus = document.querySelector("#plus");
const classPlus = document.querySelector(".plus");
const newTask = document.querySelector(".new");
const newTaskSubmit = document.querySelector("#new-task-submit");
const editTaskSubmit = document.querySelector("#edit-task-submit");
const newTaskUndo = document.querySelector("#new-task-undo");
const welcome = document.querySelector("#welcome");
const newTaskHeader = document.querySelector("#new-task-header");
const newTaskTitle = document.querySelector("#new-task-title");
const newTaskDescription = document.querySelector("#new-task-description");
const newTaskPrio = document.querySelector("#new-task-prio");
const newTaskDueDate = document.querySelector("#new-task-due-date");
const divSubtaskList = document.querySelector("#div-subtask-list");
const subtaskList = document.querySelector("#subtask-list");
const subtaskAdd = document.querySelector("#subtask-add");
const btnNewSubtaskAdd = document.querySelector("#btn-new-subtask-add");
const subtaskEdit = document.querySelector("#subtask-edit");
const newSubtaskDescription = document.querySelector("#new-subtask-description");
const btnNewSubtaskSubmit = document.querySelector("#btn-new-subtask-submit");
const btnNewSubtaskUndo = document.querySelector("#btn-new-subtask-undo");
const task = document.querySelector(".task");
const showCompletedTasks = document.querySelector("#show-completed-tasks");
const divCompletedTasks = document.querySelector(".div-completed-tasks");
const divTasks = document.querySelector("#div-tasks");
const alertTitleMissing = document.querySelector("#alert-title-missing");
const alertCompletedNoEdit = document.querySelector("#alert-completed-no-edit");
const alertDueDate = document.querySelector("#alert-due-date");

window.scrollTo(0, 0);

burger.addEventListener("click", () => {
    burger.style.display = "none";
    x.style.display = "block";
    menu.style.visibility = "visible";
    menu.style.maxHeight = "1000px";
    setTimeout(() => {
        menu.style.opacity = "1";
    }, 100);
});

closeMenu = () => {
    x.style.display = "none";
    burger.style.display = "block";
    menu.style.opacity = "0";
    menu.style.maxHeight = "0px";
    setTimeout(() => {
        menu.style.visibility = "hidden";
    }, 500);
}

x.addEventListener("click", closeMenu);

const saveConfig = () => {
    localStorage.setItem("myConfig", JSON.stringify(config));
};

darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (darkMode.textContent === "dark mode") {
        darkMode.textContent = "light mode";
    } else {
        darkMode.textContent = "dark mode";
    };
    config.storedMode = darkMode.textContent;
    closeMenu();
    saveConfig();
    console.log("config: " + JSON.stringify(config, null, 1));
});

btnTaskOrder.addEventListener("click", () => {
    if (taskOrder === "afterbegin") {
        taskOrder = "beforeend";
        btnTaskOrder.textContent = "Oldest tasks first";
    } else {
        taskOrder = "afterbegin";
        btnTaskOrder.textContent = "Latest tasks first";
    };
    config.storedOrder = taskOrder;
    renderTasks();
    closeMenu();
    saveConfig();
    console.log("config: " + JSON.stringify(config, null, 1));
});

btnImprint.addEventListener("click", () => {
    imprint.classList.add("show-new");
    closeMenu();
});

closeImprint.addEventListener("click", () => {
    imprint.classList.remove("show-new");
});

checkForTasks = () => {
    let activeTaskList = tasks.filter(function(task) {
        return task.status === "active";
    });
    if (activeTaskList.length > 0) {
        welcome.style.display = "none";
    } else {
        welcome.style.display = "inline";
    };
    let completedTaskList = tasks.filter(function(task) {
        return task.status === "completed"
    });
    // let completedTasks = tasks.length - activeTasks.length;
    if (completedTaskList.length === 0) {
        showCompletedTasks.style.display = "none";
    } else {
        showCompletedTasks.style.display = "inline";
    };
};

checkForTasks();

const listenForDone = () => {
    taskDone.forEach(element => {
        element.addEventListener("click", () => {
            id = element.getAttribute("id");
            let date = new Date();
            tasks[id-1].status = "completed";
            tasks[id-1].timeCompleted = date.toLocaleString();
            renderTasks();
        });
    });
};

const listenForRestore = () => {
    taskRestore.forEach(element => {
        element.addEventListener("click", () => {
            id = element.getAttribute("id");
            let date = new Date();
            tasks[id-1].status = "active";
            // tasks[id-1].timeCompleted = date.toLocaleString();
            renderTasks();
        });
    });
    let completedTaskList = tasks.filter(function(task) {
        return task.status === "completed"
    });
    if (completedTaskList.length === 0) {
        divCompletedTasks.classList.remove("show-completed-tasks");
    };
};

const listenForEdit = () => {
    // formNew.reset();
    taskHeader.forEach(element => {
        element.addEventListener("click", () => {
            id = element.getAttribute("title");
            if (tasks[id-1].status === "completed") {
                alertCompletedNoEdit.style.display = "block";
                setTimeout(() => {
                    alertCompletedNoEdit.style.display = "none";
                }, 3000);
                return "Completed tasks cannot be edited";
            } else {
                newTaskHeader.innerHTML = "Edit task";
                newTaskTitle.value = tasks[id-1].title;
                if (tasks[id-1].description === "(no description)") {
                    newTaskDescription.value = "";
                };
                newTaskDescription.value = tasks[id-1].description;
                newTaskPrio.value = tasks[id-1].priority;
                newTaskDueDate.value = tasks[id-1].dueDate;
                newSubtasks = tasks[id-1].subtasks;
                newTaskSubmit.style.display = "none";
                editTaskSubmit.style.display = "block";
                // const editTaskSubmit = document.querySelector("#edit-task-submit");
                newTask.classList.add("show-new");
                header.scrollIntoView({ behavior: "auto" });
                classPlus.style.display = "none";
                if (newSubtasks.length > 0) {
                    divSubtaskList.style.display = "block";
                };
                renderSubtasks();
                addSubtaskRemoveBtn();
                btnNewSubtaskAdd.addEventListener("click", () => {
                    subtaskEdit.style.display = "block";
                });
                btnNewSubtaskUndo.addEventListener("click", () => {
                    subtaskEdit.style.display = "none";
                });
                subtaskId = newSubtasks.length;
                btnNewSubtaskSubmit.addEventListener("click", subtaskSubmit);
                editTaskSubmit.addEventListener("click", () => {
                    if (newTaskTitle.value === "") {
                        alertTitleMissing.style.display = "block";
                        setTimeout(() => {
                            alertTitleMissing.style.display = "none";
                        }, 3000);
                        return "no title entered";
                    } else if (newTaskDueDate.valueAsNumber + 86400000 < date.getTime()) {
                        alertDueDate.style.display = "block";
                        setTimeout(() => {
                            alertDueDate.style.display = "none";
                        }, 3000);
                    } else {
                        tasks[id-1].title = newTaskTitle.value;
                        if (newTaskDescription.value === "") {
                            newTaskDescription.value = "(no description)";
                        };
                        tasks[id-1].description = newTaskDescription.value;
                        tasks[id-1].priority = newTaskPrio.value;
                        tasks[id-1].dueDate = newTaskDueDate.value;
                        tasks[id-1].subtasks = newSubtasks;
                        let date = new Date();
                        tasks[id-1].timeGenerated = date.toLocaleString();
                        renderTasks();
                        listenForDone();
                        listenForRestore();
                        checkForTasks();
                        divSubtaskList.style.display = "none";
                        newTask.classList.remove("show-new");
                        classPlus.style.display = "block";
                    }
                });
            }
        });
    });
};

const renderTasks = () => {
    let activeTasks = tasks.filter(function(task) {
        return task.status === "active"
    });
    divTasks.innerHTML = "";
    activeTasks.forEach(element => {
        if (element.subtasks.length === 0) {
            subsHeader = "";
        } else {
            subsHeader = `Subtasks<br>`
        };
        let subs = "";
        element.subtasks.forEach(subElement => {
            if (taskOrder === "afterbegin") {
                subs = `<li>${subElement.description}</li>` + subs
            } else {
                subs += `<li>${subElement.description}</li>`
            }
        });

        let dateComponents = element.dueDate.split("-");
        let year = parseInt(dateComponents[0]);
        let month = parseInt(dateComponents[1]) - 1;
        let day = parseInt(dateComponents[2]);
        let selectedDate = new Date(year, month, day);
        let milliseconds = selectedDate.getTime();

        if (element.dueDate === "") {
            textDueDate = "";
        // } else if (milliseconds + 172800000 < date.getTime()) {
           // textDueDate = `<span style="color: var(--prio2)"><b>!</b></span> Fällig am ${element.dueDate.substring(8)}.${element.dueDate.substring(5, 7)}.${element.dueDate.substring(0, 4)}`
        } else if (milliseconds + 86400000 < date.getTime()) {
            textDueDate = `<span style="color: var(--prio1)"><b>!!</b></span> Due ${element.dueDate.substring(8)}.${element.dueDate.substring(5, 7)}.${element.dueDate.substring(0, 4)}`
        } else {
            textDueDate = `Due ${element.dueDate.substring(8)}.${element.dueDate.substring(5, 7)}.${element.dueDate.substring(0, 4)}`
        }
        divTasks.insertAdjacentHTML(taskOrder, `
            <div class="task prio${element.priority}">
                <div>
                    <p class="task-date">${textDueDate}</p>
                    <h3 class="task-header" title="${element.id}">${element.title}</h3>
                        <img src="pix/check.webp" class="task-img task-done" id="${element.id}" alt="checkbox" title="mark task as done">
                    <p>${element.description}</p>
                    <p><small>${subsHeader}</small></p>
                    <ul style="margin-top: 0px;"><small>${subs}</small></ul>
                </div>
            </div>
        `);
    });
    taskDone = document.querySelectorAll(".task-done");
    let completedTasks = tasks.filter(function(task) {
        return task.status === "completed"
    });
    divCompletedTasks.innerHTML = "";
    completedTasks.forEach(element => {
        divCompletedTasks.insertAdjacentHTML(taskOrder, `
            <div class="task completed">
                <div>
                    <p class="task-date">Done: ${element.timeCompleted}</p>
                    <h3 class="task-header" title="${element.id}">${element.title}</h3>
                    <img src="pix/restore.webp" class="task-img task-restore" id="${element.id}" alt="restore" title="restore task">
                    <p>${element.description}</p>
                </div>
            </div>
        `);
    });
    taskRestore = document.querySelectorAll(".task-restore");
    taskHeader = document.querySelectorAll(".task-header");
    listenForDone();
    listenForRestore();
    listenForEdit();
    checkForTasks();
    saveTasks();
    window.scrollTo(0, 0);
};

renderTasks();
// listenForDone();

let subtaskId = 0;

const subtaskSubmit = () => {
    if (newSubtaskDescription.value === "") {
        subtaskEdit.style.display = "none";
        return "no content in subtasks";
    } else {
        newSubtask = {
        subtaskId: subtaskId += 1,
        status: "active",
        description: newSubtaskDescription.value
        };           
        newSubtasks.push(newSubtask);
        renderSubtasks();
        // addSubtaskRemoveBtn();
        newSubtaskDescription.value = "";
        subtaskEdit.style.display = "none";
        divSubtaskList.style.display = "block";
    };
};

newTaskSubmit.addEventListener("click", () => {
    if (newTaskTitle.value === "") {
        alertTitleMissing.style.display = "block";
        setTimeout(() => {
            alertTitleMissing.style.display = "none";
        }, 3000);
        return "No title entered";
    } else if (newTaskDueDate.valueAsNumber + 86400000 < date.getTime()) {
        alertDueDate.style.display = "block";
        setTimeout(() => {
            alertDueDate.style.display = "none";
        }, 3000);
    } else {
        let date = new Date();
        btnNewSubtaskSubmit.removeEventListener("click", subtaskSubmit);
        let newTaskObject = {
            id: tasks.length +1,
            status: "active",
            timeGenerated: date.toLocaleString(),
            timeCompleted: "",
            title: newTaskTitle.value,
            description: newTaskDescription.value,
            subtasks: newSubtasks, 
            priority: newTaskPrio.value,
            dueDate: newTaskDueDate.value
        };
        if (newTaskObject.description === "") {
            newTaskObject.description = "(no description)";
        }
        tasks.push(newTaskObject);
        renderTasks();
        listenForDone();
        listenForRestore();
        checkForTasks();
        divSubtaskList.style.display = "none";
        newTask.classList.remove("show-new");
        classPlus.style.display = "block";
        newSubtasks = [];
        newTaskDueDate.value = "";
    }
});

showCompletedTasks.addEventListener("click", () => {
    divCompletedTasks.classList.toggle("show-completed-tasks");
    showCompletedTasks.scrollIntoView({ behavior: "auto" });
});

const renderSubtasks = () => {
    subtaskList.innerHTML = "";
    newSubtasks.forEach(element => {
        subtaskList.insertAdjacentHTML(taskOrder, `
        <button class="btn-new-subtask-remove" title="${element.subtaskId}" type="submit">-</button>
        <p class="subtask-item">${element.description}</p>
        `);
    });
    btnNewSubtaskRemove = document.querySelectorAll(".btn-new-subtask-remove");
    addSubtaskRemoveBtn();
};

const addSubtaskRemoveBtn = () => {
    btnNewSubtaskRemove.forEach(element => {
        element.addEventListener("click", () => {
            let subtaskId = element.getAttribute("title");
            newSubtasks = newSubtasks.filter(function(task) {
                return task.subtaskId != subtaskId;
            });

            renderSubtasks();
        });
    });
}

plus.addEventListener("click", () => {
    classPlus.style.display = "none";
    // formNew.reset();
    newTaskHeader.innerHTML = "New task";
    newTaskSubmit.style.display = "block";
    editTaskSubmit.style.display = "none";
    newTaskTitle.value = "";
    newTaskDescription.value = "";
    newTaskPrio.value = 2;
    newTaskDueDate.value = "";
    newTask.classList.toggle("show-new");
    topNav.scrollIntoView({ behavior: "auto" });
    divSubtaskList.style.display = "none";
    btnNewSubtaskAdd.addEventListener("click", () => {
        subtaskEdit.style.display = "block";
    });
    btnNewSubtaskUndo.addEventListener("click", () => {
        subtaskEdit.style.display = "none";
    });
    newSubtasks = [];
    newSubtask = {};
    btnNewSubtaskSubmit.addEventListener("click", subtaskSubmit);
    
    // newTask.style.visibility = "visible";
    // newTask.style.width = "calc(75% - 75px)";
    // newTask.style.maxHeight = "1200px";
});

newTaskUndo.addEventListener("click", () => {
    newTask.classList.remove("show-new");
    classPlus.style.display = "block";
    subtaskEdit.style.display = "none";
});

// listenForDone();