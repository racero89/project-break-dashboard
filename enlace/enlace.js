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

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.classList.add("btn-eliminar");
  btnEliminar.addEventListener("click", function () {
    eliminarEnlace(enlace.url);
    contenedor.removeChild(linkItem);
  });

  linkItem.appendChild(a);
  linkItem.appendChild(btnEliminar);
  contenedor.appendChild(linkItem);
}

function eliminarEnlace(url) {
  let enlaces = JSON.parse(localStorage.getItem("enlaces")) || [];
  enlaces = enlaces.filter((enlace) => enlace.url !== url);
  localStorage.setItem("enlaces", JSON.stringify(enlaces));
}

function limpiarInputs() {
  document.getElementById("tituloEnlace").value = "";
  document.getElementById("urlEnlace").value = "";
}
