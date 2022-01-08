let heatmap;

function initMap() {
  //Obtiene el mapa
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 12.4440922, lng: -86.6299234 },
    mapTypeId: "satellite",
  });
  //Hace que se vean los puntos de calor en el mapa
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
  });
}

// Datos del mapa de calor: 5 Puntos
function getPoints() {
  return [
    new google.maps.LatLng(13.705243, -89.24231),
    new google.maps.LatLng(13.696674, -89.197927),
    new google.maps.LatLng(14.692511, -87.86136),
    new google.maps.LatLng(12.022747, -86.252007),
    new google.maps.LatLng(8.103289, -80.596013),
  ];
}
