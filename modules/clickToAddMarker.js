function enableClickToAddMarker(map) {
  map.addListener("click", function (event) {
    const marker = new google.maps.Marker({
      position: event.latLng,
      map: map,
      title: "New Marker",
    });

    const infoWindow = new google.maps.InfoWindow({
      content: "<b>New marker added here!</b>",
    });

    marker.addListener("click", function () {
      infoWindow.open(map, marker);
    });
  });
}

// Export to global if needed (non-module)
window.enableClickToAddMarker = enableClickToAddMarker;
