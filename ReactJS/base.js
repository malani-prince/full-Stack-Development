/**
// Main Heading ==> #
// Sub heading-1 ==>  -
// Sub heading-2 ==>  =
// conclusion => `
 */

// * Documentation Link for React : ===> https://react.dev/learn

// * Documentation Link for Vite React : ===> https://vitejs.dev/

// * Github : ===>  https://github.com/facebook/react

// * ReactDOM | Fiber : ===> https://github.com/acdlite/react-fiber-architecture

// * Tailwind : ===> https://tailwindcss.com/

// * for Images : ===> https://www.pexels.com/search/beautiful/

// * for UI template : ===> https://www.devui.io/

// * React Route : ===> https://reactrouter.com/en/main

//  *  ##############################################################################
//  *     Date: 8-01-2024  :
//  *                      : Basic Questions
//  *                      : Introduction about React
//  *                      : Introduction about React fundamentals
//  *                      : Why | When | Basic
//  *                      : Vite vs Normal React SetUp.
//  *  ##############################################################################

/**


// *  React Roadmap
// * why?
// -> build UI
// -> To easy to manage & build complex front-End.


// * When i learn React ?
// JS

// * Why react was created?
// Phantom Message Problem | (Ghost Message Problem) :-> for solving this problem this react introduce

// variable -> State
// State -> JS & UI -> DOM   -->   "JS and DOM are not in sync"


// * Js and DOM Working.

// * React Learning Process.
// -> Go in-depth => Babel, fibre, Virtual DOM, diffing algo., hydration
// -> Making Project => Different Project [✅]

// * React is a Library ==> Framework vs Library (military  <Rule must be there> | Cool Dude)

// * Topics:->
//  *
// * Topic to Learn


// * --------------------------------------------------------------------------
//  * Core of React < State or UI manipulation JSX(HTML writing inside js) >
// * --------------------------------------------------------------------------

//   1) component reusability

//   2) reusing of component(Props)

//   3) how to propagate Change(Hooks) | <use state> <use effect>

//   4) SPA <Single page application> | page not reload

//   5) Additional Addon to React

//   6) Router (React don't have router)

//   7) State management (React don't have state management)
//*       a) redux |
//*       b) redux Toolkit
//*       c) zustand
//*       d) context api ...

//   8) class based component <Functional>
//*     a) Legacy Code <😵‍💫> ...

//   9) BAAS Apps (Backend as a service)
//*     a) Social Media Clone, E-commerce App ...
//

//   10) After React
//*      1. React is not a  complete solution in most case  <Issues...>
//             a) no seo,
//             b) browser Render of JS, no routing
//             c) no routing
//*      2. framework
//             a) Next JS <Backend + FrontEnd Both in one file>
//             b) gatsby
//             c) Remix




// * --------------------------------------------------------------------------
// *           Documentation | Web vs Mobile | npx | npm
// * --------------------------------------------------------------------------

// * Documentation Link for React ===> https://react.dev/learn :-> Prefer this...
// * Documentation Link for Vite React ===> https://vitejs.dev/ :-> Prefer this...
// * Github ===>  https://github.com/facebook/react
// * now understanding:

//                        React
//                         /\
//                        /  \
//                       /    \
//                      /      \
//                     /        \
//                    /          \
//                   /            \
//               React-Dom    React-native
//                 (Web)        (Mobile)


//* - node package manager (npm)
//* - node package executer (npx)




// * --------------------------------------------------------------------------
// *            Create react Project with normal method using (npx)
// * --------------------------------------------------------------------------

//  * CMD Code:
// * ------|"""< npx create-react-app 01basicreact >"""|------ <All letter must be in small formate.>

//   after this go to the folder 01basicreact
//   open Package.json. <take a look>
//   Start => run project on development Env.
//   Build => generate Html|CSS|JS.
//   test => Testing environment.
//   Eject => eject the React and then move to other FW.
//   Linting => do More work
//   browser-List => supported browser

* How to Start the React Application...!
//  * write the coed :-> -------|""""< npm start >""""|-------
//  *                :-> -------|""""< npm run start >""""|-------
//  *                :-> -------|""""< npm run built >""""|-------




* ---------------------------------------------------------
*   Alternate Way of Run the React Project using "Vite".
* ---------------------------------------------------------

// * CMD Code:
// *          :-> --------|"""< npm create vite@latest >"""|--------
// Set the Repo Name.
// xecute this command and select the particular items, as per you requirement.
// It will create the folder inside your current folder with the given name
// * Run React Project:
// *          :-> -------|"""< npm install >"""|-------
// *          :-> -------|"""< npm run dev >"""|-------



//  Why we use vite ==> Normal react contain more Space ans take more time to process so for better approach we use vite..



*/




//  *  ##############################################################################
//  *     Date: 9-01-2024  :
//  *                      : 1. diff. between vite and normal react
//  *                      : 2. Working flow of normal and vite react
//  *                      : 3. code Structure
//  *                      : 4. fragment "<>"  |  <alternative of Div tag>
//  *                      : 5. component reusability
//  *                      : 6. Js to React Script Conversion Demo.
//  *                      : 7. Evaluation expression for display the Outcome
//  *                      : 8. how the Functionality are working
//  *                      :         a.  React to web
//  *                      :         b.  React to HTML
//  *                      :         c.  React to JS
//  *                      : 9. Evaluation Expression
//  *                      :         a. Working | constrains
//  *                      : 10. Hooks - update value on multiple places
//  *  ##############################################################################

/**

// * =========================================================
// * Difference between vite and normal React.
// * =========================================================

// * -----------------------------------------------------------
// *      1. Normal React Project Working
// * -----------------------------------------------------------

 *  resource =>
 *           =>
 * 1. Basic React.
 *   a) node_modules => Node dependencies
 *   b) Source => index.js | App.js
 *   c) gitignore. => can not upload on Github
 *   d) package-lok.json => Stable version of the lib is store (dependencies are locked)
 *   e) package.json => store the package name and other as well
 *   f) README.md => MArkdownFile
 *   g) ./public/manifest.json => this file use for the mobile version
 *   h) ./public/robots.txt => Search engine.
 *   i) ./public/index.html => Main File | element are being stored in this file
 *
 *
 *   j) .src/index.js => data from the public is being used.
 *      -> In this using normal DOM the root element of ./public/index.html is selected. | Then Use the ReactDOM Object. <it is the virtual DOM and then it compare with the main DOM | only change require element not whole Code.> | method is use is <createRoot> |  <Refer Code>
 * Method => ReactDOM require the HTML element from the html page and it calls the function using createRoot method. | then createRoot.render => use for render data.
 *
//  *  How the index.html get loaded into the Environment.
 *  in package.json => property "rect-script" Responsible for Load index.js

//  * ==================
// *        Working
//  * ==================
 *  1. Create File called  ===> "chai" <With small Letter | capital letter>

 *  2. now save the file with extension with ==+> ".js"

//* 3. create function called ===> chai --<| Capital | Small | First Capital | camel Case |>--
|
 *  4. Export Chai function from ===> "Chai"

//* 5. Import this function ===> in "App.jsx" file |<---First letter must be Capital--->|

//* 6. Now, in import statement first letter must be capital ===> ex. <| import Chai from './chai' |>


 *  6. There is a rule of That only one element should be return, If we have to use multiple element then, use the div because it contains multiple element or use  the fragment.

 *  7. Fragment =========> <> | It contain the multiple element




// * -----------------------------------------------------------
// *      2. Vit React Working (Little wait light weight)
// * -----------------------------------------------------------

 *  a) index.html => Main file <Direct load the main.jsx>
 *  b) ./src/App.jsx => Handle All the operation <just like controllers>
 *  c) ./src/main.jsx => it is the file that are being use for the handle those function.

//  * ==================
// *        Working
//  * ==================

 *  1. Create File called  ===> "Chai" <With small Letter | capital letter>

 *  2. now save the file with extension with ==+> ".jsx"

//* 3. create function called ===> Chai <first letter must be capital>

 *  4. Export Chai function from ===> "Chai" file

//* 5. Import this function ===> in "App.jsx" file |<---First letter must be Capital--->|

 *  6. There is a rule of That only one element should be return, If we have to use multiple element then, use the div because it contains multiple element or use  the fragment.

 *  7. Fragment =========> <> | It contain the multiple element




//  * `````````````````````````````````````````````````````````
//  *         Best practice  <Conclusion of above topic>
//  * `````````````````````````````````````````````````````````
 *  ./src/<new File> ==> first letter should be Capital Always...
 *                   ==> in normal React extension : //* js | jsx
 *                   ==> in Vite it must be : //* .jsx
 * ./srv/<new file>  ==> in file, function name start with the Capital letter. | and at the import time Variable also contain the Capital letter.
 *



// * -----------------------------------------------------------
// *      3. Custom Way of Writing React.
// * -----------------------------------------------------------

// * Code: --->  This is method "How React is going to work" | continuos Object created and when it called then display the whole Code

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

// * Every html | JS use the bundler => Babel | wid
// * Bundler work behind the seen | Convert the react code into readable form for browser.




// * ````````````````````````````````````````````````````````````````````````````````
// *  Summary - (js to React | Evaluation Expression Conversion | custom React APK)
// * ````````````````````````````````````````````````````````````````````````````````

// * 1. React Element created (Custom)  <Custom Render Method>
//  Create a method "CustomElement" take two properties 1. reactElement | 2. element

// * 2. main.js ==> app.js is just method ? <does this direct work>

// * 3. react convert tree structure | <so we can apply our own custom object into it ? > | <Not possible> []

// * 4. for working those we have to create the element, that contains, only the single element inside the function and we pass that function into the ""reactDOM"" then it is working.

// * 5. why the custom not working => Because the properties inside Object does not match with the react properties, thats the reason it is not working.

// * 6. method is React.createElement()   ==>   this function is import by Babel engine.
// Example:
const reactElement = React.createElement(

    // 1. Tag name
    'a',

    // 2. Object
    {
        href: "https://google.com",
        target: "_blank"
    },

    // direct Test,
    "Visit Google Web Hear",

    // Evaluated Expression. | <Variable Inject into Web>
    anotherUser
}

// * -----------------------------------------------------------
// *                         Hooks
// * -----------------------------------------------------------

// * Why Hooks Introduce ?
// Update the data at Different different Level We require Hooks.
// suppose we have to change the count value from the different different places at single time, so instead of writing the different different dom.QuerySelector we simply Use Hooks.
// it is the special way, for updation of data. | <different different methods are there>
// UI updation will be handle by the REACT.


*/



//  *  ##############################################################################
//  *     Date: 09-01-2024  :
//  *                       : Virtual DOM
//  *                       : Fiber
//  *                       : Props
//  *                       : Tailwind
//  *                       : Interview Question
//  *  ##############################################################################

//* article => https://github.com/acdlite/react-fiber-architecture

/**
 //  * ------------------------------------------------
 //  *       Virtual dom  |  Fiber(core Algorithm)
 //  * ------------------------------------------------

// * Virtual DOM Goal => animation | Reload | Videos | incremental Rendering
// Tree Updation is very easy


// * Key Feature => pause, abort, Reusability as new update come, Ability to assign priority type of update. <Hydretion concept>


// * What is reconciliation ? => It is algorithm react use to differentiation one tree with another.""
// -> Which part must be change  
// -> reconciliation algorithm behind what is popularly understood as the "Virtual DOM". | <it is the Virtual DOM>


//* How it is Working ? => Different component type are assumed to generate substantially different trees. React will nor attempt to diff them, but rather replace the old tree component. 


// * -> Interview
// Why key introduce ? => fiber  |  There is one array and convert this array in form of button, p, h1 etc.. and concept is key introduce. ==> List use for optimization of work in Fiber Algorithm.  |  <diffing of list is perform using keys. keys should be "stable, predictable, and Unique.">

// * reconciliation  versus Rendering ?  => 

//  * What is a Fiber ? (Points)
 *      1. Pause work and come back to it later
 *      2. assign priority to different type of work
 *      3. reuse previous Completed Work
 *      4. abort work if it's no longer needed 

// * Working Flow : -> React element Created -> Go to Virtual Dom -> Create new state for the given activity -> UI modification done -> If new element coming overwrite the previous.

 //  * ------------------------------------------------
 //  *                Props + Tailwind
 //  * ------------------------------------------------

// ********* Tailwind : A utility-first CSS framework *********


// * How to Work with tailwind ? 
//  *       1. npm install -D tailwindcss postcss autoprefixer
//  *       2. npx tailwindcss init -p   
//             <Create file Called tailwind.config.js>


//  *       3. Now open this new file and change the content to this.
//                           |
//                           |
//                          \|/
//                     content: [
//                           "./index.html",
//                           ".\\src\\**\\*.{js,ts,jsx,tsx}",
//                     ],

// *        4. Aff the Tailwind dependencies into the index.css file in your project
//                           |
//                           |
//                          \|/
//                     @tailwind base;
//                     @tailwind components;
//                     @tailwind utilities;

// * Props: => it is use for, reusability of component

// * Why Props: 
// We have one "Card" component and we have to call this card every time when the new user is login at this moment, you are not going to write the whole code twice, or more so We have to create a separately folder in this whole base component is there.
// and when we require those component we just have to reuse this.
// * for making the value change inside the Component We require concept Called "Props" 
// * Props passes as an argument into the function


// * -------------------------------------------
// *            Interview Question.
// * -------------------------------------------

// 1. counter project 
//                  : setCounter <> | Use State
//
//

*/


/** 
// *- Summary of the Lecture

// * 1. create a file called Layout.jsx
    - provide one Outlet(from react - router - dom)
    - use: in our website we require Header and footer in every pages at that time the Outlet help to handel those other routes inside it.
    - syntax:
    '''
        < Header />
        Outlet />   outlet handles other routes and put those inside the outlet.
        Footer />
    '''

---

// * 2. Nesting:

//*   => for creating router: 
        - require Router Provider  (for making router we require Router provider) 
        - it kind of wrapper that bind all the methods inside it
        - Syntax =>     <RouterProvider router={router} />


//*    => after creating the router provider
        Step: 1
            - Layout.jsx plays the important role
            - creating the routes createBrowserRouter
            - syntax => "" router = createBrowserRouter( ... ) ""

        --------------------------------------------

        step: 2
            - create method called ===> createRoutesFromElements() and inside this we have to specifies our all the components.
            - we nest all the data inside the Layout.jsx component. (show the below example)
            - for creating the Route use this syntax: 
                - syntax: 
                    <Route path='/' element={<Layout />}>
                    path = when any button or anchor click at that moment this path is called and display the page
                    element = We just have to specifies the which element we have to call on this route.

// *         - Example Syntax Refer this:
            '''
            (main.jsx)
            const router = createBrowserRouter(
                createRoutesFromElements(
                    <Route path='/' element={<Layout />}>   // * Top to the stack and inside it all other routes should ne present
                        <Route path='' element={<Home />} />
                        <Route path='about' element={<About />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path='user/:userId' element={<User />} />
                        <Route
                            loader={gitHubInfoLoader}
                            path='github'
                            element={<Github />}
                        />
                    </Route>
                ))
            '''

            --------------------------------------------

            Step: 3
            - take the dynamic Value from the URL 
//*         - syntax: """<Route path='user/:userId' element={<User />} />"""
            - where the function is calling at that place for grep those value we require to add one hook called 
//*         "import { useParams } from 'react-router-dom'
            - now using this method we have to create one object and that's.
//*         - Example:  const {userId} = useParams()  // var. must be same 
            - it the value is store inside this variable and we can use this variable any where in our component.

            --------------------------------------------

            Step: 4
            - Handling API Calls.
            - inside the Router we have one parameter called "loader" 
            - loader provide the functionality to load the api calls before clicking 
            - we have to specifies any API calls with in the loader because it is the optimal. instead of writing inside the function. 
// *        - click button | Loader call | fetch value and just display (Optimal)
            - Click button | Use Effect call | fetch call | data store | data convert into Json | and take a Response (normal Method)
            
            - data pass through {loader} for catch those data we have to use one hook called 
//*         "import { useLoaderData } from 'react-router-dom'
            - loader take a function.

            - Example: 
            '''
            (main.jsx)
                import Github, { gitHubInfoLoader } from './Components/Github/Github.jsx'
                <Route
                    loader={gitHubInfoLoader}
                    path='github'
                    element={<Github />}
                />
            
            (Github.jsx)
                export const gitHubInfoLoader = async () => {
                    const response = await fetch('https://api.github.com/users/malani-prince')
                    return response.json()
                }
            '''
}



---

*/