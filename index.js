$(document).ready(function() {

  $('#container').hide().fadeIn('slow');

});

// renderMap callback used to render Google Maps API

var renderMap = (coords) => {

  var hr = {lat: 61.2096778, lng: -149.8932988};
  coords = coords || hr;

  var map = new google.maps.Map(document.getElementById('map-container'), {
    zoom: 10,
    center: coords
  });

  var marker = new google.maps.Marker({
    position: hr,
    map: map
  });

};

window.renderMap = renderMap;