const API_KEY=`359e211b355ed87574e0bb353f4e0f36`;
const weatherInfo=()=>{
    const weatherInfo =document.getElementById("weather-detalis");
    const city=weatherInfo.value;

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    fetch(url)
    .then(response=>response.json())
    .then(json=>getWeatherInfo(json));
}
const setFunction=(id,text)=>{
    document.getElementById(id).innerText=text;

}
const getWeatherInfo=(temperature)=>{
    setFunction("default-city",temperature.name);
    setFunction("temp",temperature.name);
    console.log(temperature);
}