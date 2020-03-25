function initMap() {
    //location: NYC
    const location = {lat: 40.704437, lng: -73.906243};
    //created map based on location
    const map = new google.maps.Map(document.querySelector('.map')
        , {
            center: location,
            zoom: 8
        });
    //marker, positioned on location
    const marker = new google.maps.Marker({position: location, map: map})
}