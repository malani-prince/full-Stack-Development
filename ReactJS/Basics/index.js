// * L03 => Basic

// h1 tag use
// ReactDOM.render(
//     <h1>Hello Prince!</h1>,
//     document.getElementById("root")
// )

// use p tag
// ReactDOM.render(
//     <p>Hi, My name is Prince Malani</p>,
//     document.getElementById('root')
// )


// * L04 => Build Some OrderList and UnorderedList Components.
// Add the list element into the Page.

// ReactDOM.render(
//     <ul>
//         <li>Things</li>
//         <li>Things</li>
//     </ul>,
//     document.getElementById('root')
// )

// * L05 => Local SetUp
// * L06 => Why React | what is Composable Code. | <Divide code into Several Part and call them at the end of the part.>

function Navbar() {
    return (
        <ul class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact</button>
            </li>
        </ul>
    )
}

// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)

function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
)


// * L07 => Build a React info Site | Why React? It's Declarative!
//       => Declarative

// Challenge :
/**
 * - create a new h1 element
 * - Give it some TextContent
 * - Give it a class name of header
 * - append it as a child of the div#root
 */

// const h1 = document.createElement('h1')
// h1.textContent = "This is an imperative wat to program"
// h1.className = "header"
// document.getElementById('root').append(h1)

// *      |
// *      |
// *      |
// *      \/  use this and get a small code

ReactDOM.render(
    <h1 class="header">Hello Prince!</h1>,
    document.getElementById("root")
)


// * L08 => Hands on Build a React info Side | JSX