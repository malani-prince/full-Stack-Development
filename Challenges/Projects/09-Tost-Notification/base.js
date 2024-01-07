const notification = document.getElementById("tost-box")
const successMsg = '<img src="../Images/checked-green.png" alt="" width="40"> <p> Success </p>'
const errorMsg = '<img src="../Images/error.png" alt="" width="40"> <p> Error </p>'
const invalidMsg = '<img src="../Images/invalid.png" alt="" width="40"> <p> Invalid </p>'

function showTost(msg) {
    const tost = document.createElement('div')

    tost.classList.add('tost')

    tost.innerHTML = msg
    notification.appendChild(tost)

    tost.classList.add('error')

    tost.classList.add('invalid')

    console.log(tost.classList)

    setTimeout(() => {
        tost.remove()
    }, 5000)
}