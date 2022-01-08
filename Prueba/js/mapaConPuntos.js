//Genera el mapa
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 12.4440922, lng: -86.6299234 },
  });
  agregarMarcadores(map);
}

// Los datos de los marcadores, consisten en un nombre, Lat y Lng
const clientes = [
  ["Avianca", 13.705243, -89.24231],
  ["Grupo Bimbo", 13.696674, -89.197927],
  ["Walmart", 14.692511, -87.86136],
  ["Ternova", 12.022747, -86.252007],
  ["Movistar", 8.103289, -80.596013],
];

// SVG para el icono del marcador en el mapa
const svgMarker = {
  path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
  fillColor: "blue",
  fillOpacity: 1,
  strokeWeight: 0,
  rotation: 0,
  scale: 1.5,
};

// Agrega los marcadores al mapa.
function agregarMarcadores(map) {
  // Recorre el array de clientes
  for (let i = 0; i < clientes.length; i++) {
    const cliente = clientes[i];
    // Crea los puntos en el mapa para cada cliente
    new google.maps.Marker({
      position: { lat: cliente[1], lng: cliente[2] },
      map,
      icon: svgMarker,
      title: cliente[0],
    });
  }
}
