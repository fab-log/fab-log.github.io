// This array contains the coordinates for all bus stops between MIT and Harvard
/* const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
]; */

const busStops = [
	[7.2177671956741865, 51.44325697840824, "Am Steinknapp"],
	[7.225142182477071, 51.44636757730474, "Immenweg"],
	[7.22992698609481, 51.448413670125866, "Königsallee/Markstraße"],
	[7.231628460779371, 51.451986235842185, "Wiemelhauser Straße"],
	[7.22858684387497, 51.45506734835227, "Bruchstraße"],
	[7.228312901927623, 51.45930692921864, "Förderstraße"],
	[7.228860695827742, 51.46288149433191, "Trimonte"],
	[7.233170869653092, 51.463725701741, "Wasserstraße"],
	[7.229941860296237, 51.46776689329508, "Aral Forschung"],
	[7.227923690874583, 51.4709277492004, "Querenburger Straße"],
	[7.225300111605436, 51.47462710580467, "Oskar-Hoffmann-Straße"],
	[7.2229794068721995, 51.47752497293492, "Buddenbergplatz"],
	[7.223225434153573, 51.479571584884724, "Bochum Hauptbahnhof"]
]

// MBTA data: https://api-v3.mbta.com/vehicles?filter%5Broute%5D=1&include=trip

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoiZmFibG9nIiwiYSI6ImNsczBvYjJpcjAzdTEybW1rbjByNDA4ZTkifQ.90-0zpdDQ2X7A3K4xgAzdA';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12', // 'mapbox://styles/mapbox/streets-v11', // 'mapbox://styles/mapbox/light-v11'
  center: [7.228860695827742, 51.46288149433191],
  zoom: 13,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
const bus = document.createElement('div');
bus.className = 'marker';
var marker = new mapboxgl.Marker(bus)
.setLngLat([7.2177671956741865, 51.44325697840824])
.addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(() => {
    /* let stops = document.querySelectorAll(".stop");
    stops.forEach(e => {
      e.remove();
    }); */
    if (counter >= busStops.length) {counter = 0; return}
    marker.setLngLat([busStops[counter][0], busStops[counter][1]]);
    let stop = document.createElement("div");
    stop.classList.add("stop");
    stop.style.top = `${bus.getBoundingClientRect().y - 9}px`;
    stop.style.left = `${bus.getBoundingClientRect().x + 20}px`;
    stop.innerHTML = `(${counter + 1}) ` + busStops[counter][2];
    document.body.appendChild(stop);
    counter += 1;
    move();
  }, 2000)
  
}