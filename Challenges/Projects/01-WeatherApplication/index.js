const apiKey = "cad1137a2b76031118da34bc8a25d3f7"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=sidny"
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")



const data = {
    name: "Pune",
    temp: "12.30",
    humidity: "50%",
    wind: "20 km/h"
}

async function checkWhether(city) {
    // const res = await fetch(
    //     apiUrl + city + `&appid=${apiKey}`,
    // )
    // var dataTemp = await res.json()

    // console.log(dataTemp)

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = data.temp
    document.querySelector('.humidity').innerHTML = data.humidity
    document.querySelector('.wind').innerHTML = data.wind
}

searchBtn.addEventListener("click", () => {
    console.log("qwertyuiop")
    checkWhether(searchBox.value)
})

