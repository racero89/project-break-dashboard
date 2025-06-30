function updateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const dateString = `${day}/${month}/${year}`;
  const timeString = `${hours}:${minutes}:${seconds}`;

  let greeting = "";
  let greetingClass = "";

  const hourNum = Number(hours);

  if (hourNum >= 0 && hourNum < 7) {
    greeting = "Es hora de descansar. Apaga y sigue mañana";
    greetingClass = "descansar";
  } else if (hourNum >= 7 && hourNum < 12) {
    greeting = "Buenos días, desayuna fuerte y a darle al código";
    greetingClass = "extra";
  } else if (hourNum >= 12 && hourNum < 14) {
    greeting = "Echa un rato más pero no olvides comer";
    greetingClass = "comer";
  } else if (hourNum >= 14 && hourNum < 16) {
    greeting = "Espero que hayas comido";
    greetingClass = "comer";
  } else if (hourNum >= 16 && hourNum < 18) {
    greeting = "Buenas tardes, el último empujón";
    greetingClass = "tarde";
  } else if (hourNum >= 18 && hourNum < 22) {
    greeting = "Esto ya son horas extras, ... piensa en parar pronto";
    greetingClass = "extra";
  } else {
    greeting = "Buenas noches, es hora de pensar en parar y descansar";
    greetingClass = "descansar";
  }

  const greetingElement = document.getElementById("greeting");
  greetingElement.textContent = greeting;
  greetingElement.className = greetingClass;

  document.getElementById("date").textContent = dateString;
  document.getElementById("time").textContent = timeString;
}

updateTime();
setInterval(updateTime, 1000);
