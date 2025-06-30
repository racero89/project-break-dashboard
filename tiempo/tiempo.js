function updateWeather(temperature, humidity) {
  document.getElementById(
    "temperature"
  ).textContent = `Temperatura: ${temperature}°C`;
  document.getElementById("humidity").textContent = `Humedad: ${humidity}%`;
}

async function fetchWeather() {
  try {
    const response = await fetch("http://192.168.1.100/getWeatherData");

    if (!response.ok) throw new Error("Error en la respuesta");
    const data = await response.json();
    console.log(data);
    updateWeather(data.temperature, data.humidity);
  } catch (error) {
    console.error("No se pudo obtener el clima:", error);
    document.getElementById("temperature").textContent =
      "No se pudo obtener la temperatura";
    document.getElementById("humidity").textContent =
      "No se pudo obtener la humedad";
  }
}

fetchWeather();
setInterval(fetchWeather, 60000);
