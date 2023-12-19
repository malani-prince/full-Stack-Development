// * ###################################################
// *          Global                 (2-global.js)
// * ###################################################

// Global     -   No window Object
// __dirname  -   path to current directory
// __filename -   file name
// require    -   function to use module (Common JS)
// module     -   info about current module (file)
// Process    -   info about env where the program being Executed

console.log(__dirname)
console.log(__filename)
setInterval(
    () => {
        console.log("hello world")
    }, 1000
)