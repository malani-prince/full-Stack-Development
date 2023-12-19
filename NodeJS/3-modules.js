// * ###################################################
// *          Modules                (3-modules.js)
// * ###################################################

// every file in node is module 
// Module => Encapsulated code (only share minimum)
const john = "john"
const peter = "peter"

const sayHi = (name) => {
    console.log(`hello there ${name}`)
}

sayHi('prince')
sayHi('john')
sayHi("peter")
