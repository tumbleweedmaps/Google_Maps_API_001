function initMap() {
    const noLabelsStyle = [
      {
        featureType: "all",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ visibility: "on" }],
      },
    ];

    const center = { lat: 43.4342, lng: -70.6246 };

    const map = new google.maps.Map(document.getElementById("map"), {
      center: center,
      zoom: 12,
      heading: 0,
      tilt: 45,
      mapTypeId: "terrain",
      mapId: "60dbabc0c2aa1d3b6de10662", // make sure 3D is enabled on this
      styles: noLabelsStyle
    });

    const marker = new google.maps.Marker({
      position: center,
      map: map,
      title: "My Location",
    });

    const infoWindow = new google.maps.InfoWindow({
      content: "<b>You're here!</b>",
    });

    const kmlLayer = new google.maps.KmlLayer({
      url: 'https://storage.googleapis.com/tumbleweed_kml/newIconsD.kml',
      map: map,
    });
  }