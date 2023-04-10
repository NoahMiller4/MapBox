/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    MapBox

    Noah Miller

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

'use strict'


const locat = document.querySelector('.location');
const mapBox = document.querySelector('.map');

function getLocation(position) {
    console.log(position);
    const {latitude, longitude } = position.coords;

    locat.addEventListener('click', () => {
        map.flyTo({
            center: [longitude, latitude],
            essential: true
        })
    })
    marker.setLngLat([longitude, latitude]).addTo(map)
}

function errorHandler() {
    mapBox.innerHTML = "Cannot display your location"
    mapBox.style.height = "0"
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLocation, errorHandler);
} else {
    mapBox.innerHTML =  "Geolocation is not supported by your browser"
}

const marker = new mapboxgl.Marker({
    color: '#3898ff'
});