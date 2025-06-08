function addKmlLayer(map, url) {
  return new google.maps.KmlLayer({
    url: url,
    map: map,
    preserveViewport: true
  });
}
