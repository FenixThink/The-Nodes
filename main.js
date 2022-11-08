
/* const city = document.querySelector(".#city").value */
const log = (...sometigth)=>{
    console.log(sometigth)    
}
const makeHtml = (data)=>{
    log(data)
    const { main, name, sys, weather } = data
    const img = (weather[0].icon)
    const temperatura = main.temp
    const imagenName = weather[0].main
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${img}.svg`
    const imagen = document.createElement("img")
    const cityName = document.createElement("p")
    const temp = document.createElement("p")
    const tempName = document.createElement("p")
    imagen.src = icon
    document.getElementById("Card").appendChild(imagen)
    document.getElementById("Card").appendChild(cityName)
    document.getElementById("Card").appendChild(temp)
    document.getElementById("Card").appendChild(tempName)
    cityName.innerText = name
    temp.innerText = temperatura
    tempName.innerText = imagenName
}
const wheaterclim = (e)=>{
    e.preventDefault
    const city = document.querySelector("#city").value
    const link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;
    const info = async ()=>{
        try {
            const res = await fetch(link)
             const data = await res.json()
             makeHtml(data)
        } catch (error) {
            log(error)
        }
    }
    info()
}

document.querySelector("#hola").addEventListener("click", wheaterclim)