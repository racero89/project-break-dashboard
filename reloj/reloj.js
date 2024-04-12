function updateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const dateString = `${day}/${month}/${year}`;
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    let greeting = '';
  
    if (hours >= 0 && hours < 7) {
      greeting = 'Es hora de descansar. Apaga y sigue mañana';
      document.body.className = 'descansar';
    } else if (hours >= 7 && hours < 12) {
      greeting = 'Buenos días, desayuna fuerte y a darle al código';
      document.body.className = 'darle-al-codigo';
    } else if (hours >= 12 && hours < 14) {
      greeting = 'Echa un rato más pero no olvides comer';
      document.body.className = 'comer';
    } else if (hours >= 14 && hours < 16) {
      greeting = 'Espero que hayas comido';
      document.body.className = 'comer';
    } else if (hours >= 16 && hours < 18) {
      greeting = 'Buenas tardes, el último empujón';
      document.body.className = 'tarde';
    } else if (hours >= 18 && hours < 22) {
      greeting = 'Esto ya son horas extras, ... piensa en parar pronto';
      document.body.className = 'extras';
    } else {
      greeting = 'Buenas noches, es hora de pensar en parar y descansar';
      document.body.className = 'descansar';
    }
  
    document.getElementById('greeting').textContent = greeting;
    document.getElementById('date').textContent = dateString;
    document.getElementById('time').textContent = timeString;
  }
  
  setInterval(updateTime, 1000);