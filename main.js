const backgrounds = [
  'url("https://example.com/bg1.jpg")',
  'url("https://example.com/bg2.jpg")',
  'url("https://example.com/bg3.jpg")',
  'url("https://www.clarin.com/img/2023/11/24/t78703quL_1256x620__1.jpg")',
  'url("https://img.freepik.com/foto-gratis/fondo-textura-acuarela-purpura-rosa_1083-169.jpg")',
];

function setRandomBackground() {
  const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.body.style.backgroundImage = randomBg;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
}

function addBackLink() {
  if (!document.querySelector(".back-link")) {
    const link = document.createElement("a");
    link.href = "index.html";
    link.textContent = "← Volver al Inicio";
    link.className = "back-link";
    document.body.appendChild(link);
  }
}

window.onload = function () {
  setRandomBackground();
  addBackLink();
};
