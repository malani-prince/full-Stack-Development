const listOfQuot = [
    {
        quot: "I'm unpredictable, I never know where I'm going until I get there, I'm so random, I'm always growing, learning, changing, I'm never the same person twice. But one thing you can be sure of about me; is I will always do exactly what I want to do.",
        writer: "C. JoyBell C."
    },
    {
        quot: 'That proves you are unusual," returned the Scarecrow; "and I am convinced that the only people worthy of consideration in this world are the unusual ones. For the common folks are like the leaves of a tree, and live and die unnoticed',
        writer: "L. Frank Baum, The Land of Oz"
    },
    {
        quot: "But that was life: Nobody got a guided tour to their own theme park. You had to hop on the rides as they presented themselves, never knowing whether you would like the one you were in line for...or if the bastard was going to make",
        writer: "J.R. Ward, da"
    },
    {
        quot: "Her name badge read: Hello! My name is DIE, DEMIGOD SCUM!",
        writer: "Rick Richard, The Son of Neptune"
    },
    {
        quot: "A musician must make music, an artist must paint, a poet must write, if he is to be ultimately at peace with himself. What a man can be, he must be",
        writer: "Abraham sd"
    },
    {
        quot: "Insane means fewer cameras!",
        writer: "Ally Carter, Only the Good Spy Young"
    },
    {
        quot: "OK, Josh said evenly, I've seen men made of mud, I guess I can accept spying rats. Do they talk? he wondered aloud Don't be ridiculous, snapped, They're rats Josh really didn't think it was a ridiculous suggestion writeMichael Scott, The ",
        writer: "Michael Scott, The "
    },
    {
        quot: "The lampshade on my head is for my bright ideas. I won't be able to convey them until Monday, when my curtain gets out of the dry cleaners",
        writer: " Some Inspiration for the Overenthusiastic"
    },
    {
        quot: 'Some quotations," said  by, "are greatly improved by lack of context.',
        writer: "John Wyndham, The  Cuckoos"
    },
    {
        quot: "Never ask an elf for help; they might decide your better off dead, eh?",
        writer: "Christopher"
    },
    {
        quot: "What do you want? Where's the goddamn ice I ordered? Where's the booze? There's a war on, man! People are being killed!",
        writer: "Hunter S. Thompson, Fear and Loathing in Las Vegas"
    },
    {
        quot: 'It looks rather ordinary,said the. "Unless you consider that a top hat is always somewhat extraordinary, of course',
        writer: "Finn Family"
    }
]

const quoteField = document.querySelector('.input #quot')
const writerField = document.querySelector('.input #writer')
const generateBtn = document.querySelector('.container button')

generateBtn.addEventListener('click', () => {

    const randomNumber = Math.floor(Math.random() * listOfQuot.length)
    
    quoteField.textContent = listOfQuot[randomNumber].quot
    writerField.textContent = "-" +listOfQuot[randomNumber].writer
})