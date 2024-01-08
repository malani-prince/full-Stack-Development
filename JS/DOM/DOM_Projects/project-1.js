/**
 * --------------------------------------------------------
 * Project : 1 : Quote Selector 
 * --------------------------------------------------------
 */

const quotes = [
    {
        quote: "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that",
        person: "Stephen King"
    },
    {
        quote: "You should write because you love the shape of stories and sentences and the creation of different words on a page. Writing comes from reading, and reading is the finest teacher of how to write",
        person: "Annie Proulx"
    },
    {
        quote: "Indeed, learning to write may be part of learning to read. For all I know, writing comes out of a superior devotion to reading",
        person: 'Eudora Welty'
    }, {
        quote: "Read, read, read. Read everything  —  trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You'll absorb it. Then write. If it's good, you'll find out. If it's not, throw it out of the window.",
        person: "William Faulkner"
    },
    {
        quote: "I kept always two books in my pocket: one to read, one to write in",
        person: "Robert Louis Stevenson"
    },
    {
        quote: "One sure window into a person’s soul is his reading list",
        person: "Mary B. W. Tabor"
    },
    {
        quote: "Read a thousand books, and your words will flow like a river",
        person: "Lisa See"
    },
    {
        quote: "If there's a book that you want to read, but it hasn't been written yet, then you must write it",
        person: "Toni Morrison"
    },
    {
        quote: "Everybody walks past a thousand story ideas every day. The good writers are the ones who see five or six of them. Most people don’t see any.",
        person: "Orson Scott"
    },
    {
        quote: "Most writers regard the truth as their most valuable possession, and therefore are most economical in its use",
        person: "Mark Twain"
    },
    {
        quote: "Write what disturbs you, what you fear, what you have not been willing to speak about. Be willing to be split open",
        person: "Natalie Goldberg"
    },
    {
        quote: "Write what should not be forgotten",
        person: "Isabel Allende"
    },
    {
        quote: "It is only by writing, not dreaming about it, that we develop our own style",
        person: "P.D. James"
    },
    {
        quote: "Voice is not just the result of a single sentence or paragraph or page. It’s not even the sum total of a whole story. It’s all your work laid out across the table like the bones and fossils of an unidentified carcass",
        person: "Chuck Wendig"
    },
    {
        quote: "I don’t want just words. If that’s all you have for me, you’d better go.",
        person: "F. Scott Fitzgerald"
    },
]


const btn = document.querySelector('#new-quote')
const quoteSelector = document.querySelector('.quote')
const person = document.querySelector('.person')
// console.log(btn)
// console.log(quote)
// console.log(person)
console.log(quotes.length)


btn.addEventListener("click", function () {

    let rNumber = Math.floor(Math.random() * quotes.length) + 1
    console.log(rNumber)
    quoteSelector.textContent = quotes[rNumber].quote
    person.textContent = quotes[rNumber].person
    // console.log("Click the Button")
})



/**
 * --------------------------------------------------------
 * Project : 2 : Model 
 * --------------------------------------------------------
 */

