const API_KEY = "7d849030caf2fc1d7ffc990ba5423a49";
const city = "Astana";
const units = "metric";

fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`)
  .then((response) => response.json())
  .then(async (data) => {
    let result = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${data[0].lat}&lon=${data[0].lon}&appid=${API_KEY}`
    );
    let weather = await result.json();
    console.log(weather);
  })
  .catch((error) => console.error(error));
