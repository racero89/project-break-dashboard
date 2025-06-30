const backgrounds = [
  'url("https://example.com/bg1.jpg")',
  'url("https://example.com/bg2.jpg")',
  'url("https://example.com/bg3.jpg")',
];

function setRandomBackground() {
  const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.body.style.backgroundImage = randomBg;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
}

window.onload = setRandomBackground;
