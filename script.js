async function getWeather() {
  let city = document.getElementById("city").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const apiKey = "e15e6babc835bf07b1ead4da1378deae"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    let response = await fetch(url);
    let data = await response.json();

    if (data.cod === "404") {
      document.getElementById("weatherResult").innerHTML =
        "<h3>City Not Found</h3>";
      return;
    }

    document.getElementById("weatherResult").innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p> Temperature: <b>${data.main.temp}°C</b></p>
        <p>Condition: <b>${data.weather[0].description}</b></p>
        <p> Humidity: <b>${data.main.humidity}%</b></p>
        <p>Wind Speed: <b>${data.wind.speed} m/s</b></p>
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML =
      "<h3>Error fetching data</h3>";
    console.error(error);
  }
}
