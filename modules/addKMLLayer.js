// export function addKmlLayer(map, url) {
//   const kmlLayer = new google.maps.KmlLayer({
//     url: url,
//     map: map,
//     preserveViewport: true
//   });

// export function addKmlLayer(map, url, onPlacemarkClick = null) {
//   const kmlLayer = new google.maps.KmlLayer({
//     url: url,
//     map: map,
//     preserveViewport: true
//   });

//   if (onPlacemarkClick) {
//     google.maps.event.addListener(kmlLayer, 'click', function (event) {
//       onPlacemarkClick(event);
//     });
//   }
// }

function addKmlLayer(map, url, onPlacemarkClick) {
  const kmlLayer = new google.maps.KmlLayer({
    url,
    map,
    preserveViewport: true,
  });

  if (onPlacemarkClick) {
    google.maps.event.addListener(kmlLayer, 'click', function (event) {
      onPlacemarkClick(event);
    });
  }
}

// Expose to global
window.addKmlLayer = addKmlLayer;
