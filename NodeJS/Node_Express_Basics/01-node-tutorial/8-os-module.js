
// * ------------------
// *  Os - Module
// * ------------------


// OS Module
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)


// return the system uptime in second
console.log(`system uptime is ${os.uptime} second`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.totalmem()
}
console.log(currentOS)