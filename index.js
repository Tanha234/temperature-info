const API_KEY=`359e211b355ed87574e0bb353f4e0f36`;
const weatherInfo=()=>{
    const searchWeather=document.getElementById("weather-detalis");
    const city=searchWeather.value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemperature(data));
}
const setCity=(id,text)=>{
    document.getElementById(id).innerText=text;

}


const displayTemperature=temperature=>
{
       setCity("default-city",temperature.name);
       setCity("temp",temperature.main.temp);
       setCity("condition",temperature.weather[0].main);
       console.log(temperature);

       const url=`https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png `
       const imgIcon=document.getElementById("img-icon");
       imgIcon.setAttribute("src",url);
}