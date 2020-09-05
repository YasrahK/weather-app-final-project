function formatDate(timestamp) {
    let now = new Date(timestamp);
    let date = now.getDate();
    let hours = now.getHours();
    if(hours <0){
        hours = `0${hours}`;
    }
    let minutes = now.getMinutes();
    if (minutes <10) {
        minutes = `0${minutes}`;
    }
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = days[now.getDay()]; 
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let month = months[now.getMonth()];
      let year = now.getFullYear();
    return `${day} <br /><small> ${hours}:${minutes}<br />${month} ${date}, ${year}</small>`;
}


function showTemperature(response) {
    let temperatureElement=document.querySelector("#temp-reading");
    let cityElement=document.querySelector("#city");
    let descriptionElement=document.querySelector("#description");
    let maxTempElement=document.querySelector("#max-temp");
    let minTempElement=document.querySelector("#min-temp");
    let feelsLikeElement=document.querySelector("#feels-like");
    let windSpeedElement=document.querySelector("#wind-speed");
    let humidityElement=document.querySelector("#humidity");
    let pressureElement=document.querySelector("#pressure");
    let dateElement=document.querySelector("#date");
    let iconElement=document.querySelector("#icon");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather[0].main;
    maxTempElement.innerHTML=Math.round(response.data.main.temp_max);
    minTempElement.innerHTML=Math.round(response.data.main.temp_min);
    feelsLikeElement.innerHTML=Math.round(response.data.main.feels_like);
    windSpeedElement.innerHTML=Math.round(response.data.wind.speed);
    humidityElement.innerHTML=response.data.main.humidity;
    pressureElement.innerHTML=response.data.main.pressure;
    dateElement.innerHTML=formatDate(response.data.dt*1000);
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description)
}
function search(city) {
    let apiKey = "5fc324aaf951a7a1b818994b70c47e36";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(showTemperature);
}
function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#input-place");
   search(cityInputElement.value)
}

search("Chicago");

let form = document.querySelector("#search-city");
form.addEventListener("submit",handleSubmit);


