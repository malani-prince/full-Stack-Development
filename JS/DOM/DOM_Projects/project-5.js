// Variable

const addText = document.getElementById('addTask')
const taskContainer = document.getElementById('task-container')
const inputTask = document.getElementById("input-task")


// Event Listener for Add Button

addText.addEventListener('click', function () {

    // create the new element "div"
    let task = document.createElement('div')
    task.classList.add('task')

    // fetch the data that enter into the input field, and store that new data into new "li" tag
    let li = document.createElement('li')
    li.innerText = `${inputTask.value}`
    task.appendChild(li)

    // create the new "CheckBox"
    let checkBtn = document.createElement('button')
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
    checkBtn.classList.add('checkTask')
    task.appendChild(checkBtn)

    // create the new "DeleteBox"
    let deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`
    deleteBtn.classList.add('deleteTask')
    task.appendChild(deleteBtn)

    if (inputTask.value === "") {
        alert("please enter a Task")
    } else {
        taskContainer.appendChild(task)
        console.log(taskContainer)
    }

    inputTask.value = "";


    checkBtn.addEventListener('click', function () {
        checkBtn.parentElement.style.textDecoration = 'line-through'
    })

    deleteBtn.addEventListener('click', function (e) {
        let target = e.target
        target.parentElement.parentElement.remove()
    })



})