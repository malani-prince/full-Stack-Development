/**
 * This is method "How React is going to work"
 */

function customRender(reactElement, container) {

    // * Problem: => single single attribute added on single line 

    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute("href", reactElement.props.href)
    // domElement.setAttribute("target", reactElement.props.target)
    // container.appendChild(domElement)


    // Modular Code: 
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === "children") {
            continue
        }
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to Visit Google"
}

console.log(reactElement.props.href)

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)