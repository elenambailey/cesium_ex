var map = L.map('map').setView([51, 0], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

fetch('/data/airports.geojson') // wherever our data is!
   .then(response => response.json()) // this waits until the 'promise' is 'fulfilled' and then converts the data
   .then(data => {
    L.geoJSON(data).addTo(map);
   })
    .catch(error => console.error('Error: ', error));