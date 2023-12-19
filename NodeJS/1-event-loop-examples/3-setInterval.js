// it is Asynchronous function
// set interval runs in increment [after 2 seconds] | event loop invoke that callback

setInterval(
    () => {
        console.log("hello World")
    }, 2000)

console.log("I will run first")

// Process stays Alive unless kill the process (ctrl + c)