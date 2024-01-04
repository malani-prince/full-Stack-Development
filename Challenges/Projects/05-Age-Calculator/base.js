const outputDisplay = document.getElementById("final-age-count-value")
const inputData = document.querySelector('.input-box input')
const inputBtnForAge = document.querySelector(".input-box button")

inputBtnForAge.addEventListener("click", () => {
    let birthDate = new Date(inputData.value)  // 06/10/2002
    console.log(birthDate)

    let d1 = birthDate.getDate()
    let m1 = birthDate.getMonth() + 1
    let y1 = birthDate.getFullYear()

    const currentDate = new Date()           // 03/01/2024
    let d2 = currentDate.getDate()
    let m2 = currentDate.getMonth() + 1
    let y2 = currentDate.getFullYear()

    console.log(d1, d2)
    console.log(m1, m2)
    console.log(y1, y2)

    // * Difference
    let d3, m3, y3;

    y3 = y2 - y1                                       // y3 = 2024 -2002 => 22

    if (m2 >= m1) {                                    // (01 >=10) (false)
        m3 = m2 - m1
    } else {                                           // * Got to else and y3-- ==> 22 - 1 = 21
        y3--                                           // Month = 12 + 1 - 10 = 3
        m3 = 12 + m2 - m1
    }

    if (d2 >= d1) {     // 3 - 6 => (false)
        d3 = d2 - d1;
    } else {
        m3--;                                          // * Go to else part ==> m3-- ==> 3 - 1 = 2
        d3 = getDaysInMonth(y1, m1) + d2 - d1          // * totalDayInA month (31 + 3 - 6) = 28
    }

    if (m3 < 0) {
        m3 = 11
        y3--
    }

    outputDisplay.innerHTML = y3 + " Years, " + m3 + " Month and " + d3 + " Day"
})

// * Return Total day in the Current month.
function getDaysInMonth(year, month) {
    let data = new Date(year, month, 0).getDate()
    console.log(data)
    return data
}