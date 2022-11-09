let array1 = []
let c = 0;
let cDelete = 0;
const log = (...sometigth)=>{
    console.log(sometigth)    
}
const makeHtml = (data)=>{
    c++
    let array = []
    const card = document.getElementById("Card")
    const { main, name, sys, weather } = data
    const img = (weather[0].icon)
    const temperatura = main.temp
    const country = sys.country
    const imagenName = weather[0].main
    const container = document.createElement("div")
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${img}.svg`
    const imagen = document.createElement("img")
    const cityName = document.createElement("p")
    const countryName = document.createElement("p")
    const temp = document.createElement("p")
    const tempName = document.createElement("p")
    imagen.src = icon
    card.appendChild(container)
    container.setAttribute("id", `div${c}`);
    container.appendChild(imagen)
    container.appendChild(cityName)
    container.appendChild(temp)
    container.appendChild(tempName)
    container.appendChild(countryName)
    cityName.innerText = name
    temp.innerText = temperatura
    tempName.innerText = imagenName
    countryName.innerText = country
    const sotrge = localStorage.getItem("City")
    array.push(sotrge)
    array.push(name)
    if (array.length>5) {
        array.shift();
    }
    localStorage.setItem("City", array)
    array1.push(container)
    if (array1.length>5) {
        array1.shift();
        cDelete++;
        document.getElementById(`div${cDelete}`).remove()
}
}
const makeHtml1 = (data)=>{
    c++
    const card = document.getElementById("Card")
    const { main, name, sys, weather } = data
    const img = (weather[0].icon)
    const temperatura = main.temp
    const country = sys.country
    const imagenName = weather[0].main
    const container = document.createElement("div")
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${img}.svg`
    const imagen = document.createElement("img")
    const cityName = document.createElement("p")
    const countryName = document.createElement("p")
    const temp = document.createElement("p")
    const tempName = document.createElement("p")
    imagen.src = icon
    card.appendChild(container)
    container.setAttribute("id", `div${c}`);
    container.appendChild(imagen)
    container.appendChild(cityName)
    container.appendChild(temp)
    container.appendChild(tempName)
    container.appendChild(countryName)
    cityName.innerText = name
    temp.innerText = temperatura
    tempName.innerText = imagenName
    countryName.innerText = country
    array1.push(container)
    if (array1.length>5) {
        array1.shift();
        cDelete++;
        document.getElementById(`div${cDelete}`).remove()
    }
}
const loadMain = (city) =>{
    const link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;
    const info = async ()=>{
        try {
            const res = await fetch(link)
             const data = await res.json()
             makeHtml1(data)
        } catch (error) {
            log(error)
        }
    }
    info()
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
            document.querySelector("#city").value =  " "
            alert("Error, Ingrese una ciudad valida")
        }
    }
    info()
}
document.querySelector("#hola").addEventListener("click", wheaterclim)
document.getElementById("city").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        wheaterclim(e);
    }
    
})


window.addEventListener("load", ()=>{
    let sotrge = localStorage.getItem("City")
    sotrge = sotrge.split(",")
    for (let i = 0; i < sotrge.length; i++) {
        city = sotrge[i]
        loadMain(city)
    }
})