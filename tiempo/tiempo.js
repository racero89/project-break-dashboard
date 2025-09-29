async function fetchWeather() {
  const apiKey = "4c709b4143cf49c08a992202252909";
  const city = "Madrid";

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    );

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();

    const temperature = data.current.temp_c;
    const humidity = data.current.humidity;

    document.getElementById(
      "temperature"
    ).textContent = `Temperatura: ${temperature}°C`;
    document.getElementById("humidity").textContent = `Humedad: ${humidity}%`;
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
