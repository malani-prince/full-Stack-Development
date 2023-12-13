let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

// local storage example 
// localStorage.setItem("myLeads", myLeads)
// Get the lead from the localStorage store it in a variable, leadsFromLocalStorage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// for ignore the "" this list
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// Tag have the same Object like this
// const data = [
//     {
//         url: "www.myUrl.com"
//     }
// ]

// Listen for click on tabBtn. Log pers LinkDInURL to the Console
tabBtn.addEventListener("click", function () {

    // myLeads.push(data[0].url)
    // localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)


    chrome.tabs.query(
        // Which tab
        {
            active: true,
            currentWindow: true
        },
        // This new tab passes into the tag parameter and we use this further
        function (tabs) {
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads))
            render(myLeads)
        }
    )
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    // save the myLeads array to local storage
    // myLeads: name is define [key]
    // JSON.stringify(myLeads): convert myLeads into String
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // render function call
    render(myLeads)
})