window.onload = ()=>{
    getWeatherData();
}



function getWeatherData(){
    console.log("Hello, World!");
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=17.7324576&lon=83.3041052&appid=658a999b38d9253a78b1726906ceebc8&units=metric")
    .then((response)=>{return response.json()}).then((jsonResponse)=>{
        document.getElementById("temperature").innerText = jsonResponse["main"]["temp"];
    })
}