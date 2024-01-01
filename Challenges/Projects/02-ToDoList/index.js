console.log("hello world")

const inputField = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
const inputBtn = document.getElementById('click-btn')

inputBtn.addEventListener("click", () => {
    if (inputField.value === "") {
        alert("please Enter Data First")
    }
    else {
        const li = document.createElement('li')
        li.innerText = inputField.value
        listContainer.appendChild(li)
        inputField.value = "";

        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)

        addIntoLocalStorage()
    }
})

listContainer.addEventListener('click', (e) => {
    // e represent the structure of the "listContainer"
    // e.target.classList.toggle('checked) ===> Add new Class property into this document.getElementById('list-container')

    console.log(e)
    // this is use for completing the task
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        addIntoLocalStorage()
    }
    // This is use for Remove the task
    // 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        addIntoLocalStorage()
    }
}, false)


function addIntoLocalStorage() {
    localStorage.setItem(
        "data",
        listContainer.innerHTML
    )
}

function showLocalStorageData() {
    // return all the data that present inside local storage.
    listContainer.innerHTML = localStorage.getItem("data")
}

showLocalStorageData()
