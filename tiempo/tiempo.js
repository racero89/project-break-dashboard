function updateWeather(temperature, humidity) {
  document.getElementById(
    "temperature"
  ).textContent = `Temperatura: ${temperature}°C`;
  document.getElementById("humidity").textContent = `Humedad: ${humidity}%`;
}

setInterval(async () => {
  const response = await fetch("http://192.168.1.X/getWeatherData");
  const data = await response.json();
  updateWeather(data.temperature, data.humidity);
}, 60000);
