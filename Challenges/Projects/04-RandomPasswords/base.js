const inputFieldData = document.querySelector('.container .display #inputField ')
const inputGenerateBtn = document.querySelector('.container #generate-btn')
const copyElement = document.querySelector('.display img')

inputGenerateBtn.addEventListener(
    "click",
    () => {
        const passwordData = `QWERTYUIOPASDFGHJKLZXCVBNM1234567890-=~!@#$%^&*()_+[]\;,./{}|:<>?qwertyuiopasdfghjklzxcvbnm`

        let password = ""

        for (var i = 0; i <= 12; i++) {
            var randomNumber = Math.floor(Math.random() * passwordData.length);

            // * passwordData.substring(<starting Index>, <Ending Index> + 1) | +1 for purpose of taking the value exact on starting index.  
            password += passwordData.substring(randomNumber, randomNumber + 1);
        }
        console.log(password)
        inputFieldData.value = password
    }
)

copyElement.addEventListener(
    'click',
    () => {
        inputFieldData.select()
        document.execCommand('copy')

    }
)