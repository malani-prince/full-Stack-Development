const hiddenImage = document.querySelector('.container img')
const flag = true
const pass = document.querySelector('.input-box input')

hiddenImage.onclick = function () {
    if (pass.type == "password") {
        hiddenImage.src = "../Images/unhide.png"
        pass.type = "text"
    }
    else {
        hiddenImage.src = "../Images/hide.png"
        pass.type = "password"
    }
}