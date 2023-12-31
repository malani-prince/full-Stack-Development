//  * EventEmitter

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data => name: ${name}  id: ${id} `)
})
customEmitter.on('response', () => {
    console.log("Some other logic")
})

// Order matter 
customEmitter.emit('response', 'john', 34)

// not going to print this
customEmitter.on('response', () => {
    console.log("Some other logic")
})