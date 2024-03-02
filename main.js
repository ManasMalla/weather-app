window.onload = function () {
  getWeather("Visakhapatnam");
};

function searchWeather(event) {
  if (event.key === "Enter") {
    const city = document.getElementById("search").value;
    getWeather(city);
  }
}

function getWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d43894f3d1447287554f7dd5ceab9537&units=metric`
  )
    .then((response) => response.json())
    .then((json) => {
      document.getElementById("temperature").innerHTML = json["main"]["temp"];

      document.getElementById("feels-like").innerHTML = `Feels like ${json[
        "main"
      ]["feels_like"].toFixed(0)}°`;

      document.getElementById("precipitation").innerHTML =
        json["main"]["humidity"];

      document.getElementById("min").innerHTML =
        json["main"]["temp_min"].toFixed(0);
      document.getElementById("max").innerHTML =
        json["main"]["temp_max"].toFixed(0);
      const d = new Date();
      const date = `${
        [
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
          "December",
        ][d.getMonth()]
      } ${d.getDate()}, ${
        d.getHours() > 12 ? d.getHours() - 12 : d.getHours()
      }:${String(d.getMinutes()).padStart(2, "0")} ${
        d.getHours() > 12 ? "PM" : "AM"
      }`;

      document.getElementById("date").innerHTML = date;

      document.getElementById("weather-type").innerHTML =
        json["weather"][0]["main"];
    });
}
