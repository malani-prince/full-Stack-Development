const inputField = document.getElementById('inputDetails')
const qrImage = document.getElementById('qrImage')
const generateBtn = document.getElementById('generateImage')
const error = document.getElementById('error')
const reset = document.getElementById('reset')

console.log(inputField, "\n", qrImage, "\n", generateBtn)

generateBtn.addEventListener('click', () => {
    const input = inputField.value
    if (!input) {
        error.innerHTML = "please provide the data"
    } else {
        error.innerHTML = ""
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`
        qrImage.classList.add("show-img")

        inputField.value = ""
    }
})


reset.addEventListener('click', () => {
    qrImage.src = ""
})