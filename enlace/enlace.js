window.onload = function () {
  mostrarEnlacesGuardados();
};

document.getElementById("link").addEventListener("click", function () {
  const titulo = document.getElementById("tituloEnlace").value.trim();
  const url = document.getElementById("urlEnlace").value.trim();

  if (titulo && url) {
    const enlace = { titulo, url };
    guardarEnlace(enlace);
    agregarEnlaceAlDOM(enlace);
    limpiarInputs();
  } else {
    alert("Por favor, completa ambos campos.");
  }
});

function guardarEnlace(enlace) {
  let enlaces = JSON.parse(localStorage.getItem("enlaces")) || [];
  enlaces.push(enlace);
  localStorage.setItem("enlaces", JSON.stringify(enlaces));
}

function mostrarEnlacesGuardados() {
  const enlaces = JSON.parse(localStorage.getItem("enlaces")) || [];
  enlaces.forEach((enlace) => agregarEnlaceAlDOM(enlace));
}

function agregarEnlaceAlDOM(enlace) {
  const contenedor = document.getElementById("listaEnlaces");

  const linkItem = document.createElement("div");
  linkItem.classList.add("enlace-item");

  const a = document.createElement("a");
  a.href = enlace.url;
  a.textContent = enlace.titulo;
  a.target = "_blank";

  linkItem.appendChild(a);
  contenedor.appendChild(linkItem);
}

function limpiarInputs() {
  document.getElementById("tituloEnlace").value = "";
  document.getElementById("urlEnlace").value = "";
}
