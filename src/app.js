function showTemperature(response) {
    console.log(response.data);
    let temperatureElement=document.querySelector("#temp-reading");
    let cityElement=document.querySelector("#city");
    let descriptionElement=document.querySelector("#description");
    let maxTempElement=document.querySelector("#max-temp");
    let minTempElement=document.querySelector("#min-temp");
    let feelsLikeElement=document.querySelector("#feels-like");
    let windSpeedElement=document.querySelector("#wind-speed");
    let humidityElement=document.querySelector("#humidity");
    let pressureElement=document.querySelector("#pressure");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather[0].main;
    maxTempElement.innerHTML=Math.round(response.data.main.temp_max);
    minTempElement.innerHTML=Math.round(response.data.main.temp_min);
    feelsLikeElement.innerHTML=Math.round(response.data.main.feels_like);
    windSpeedElement.innerHTML=Math.round(response.data.wind.speed);
    humidityElement.innerHTML=response.data.main.humidity;
    pressureElement.innerHTML=response.data.main.pressure;
    HTMLTableDataCellElement.innerHTML=formatDate(response.data.dt*1000);
}
function



let apiKey = "5fc324aaf951a7a1b818994b70c47e36";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);