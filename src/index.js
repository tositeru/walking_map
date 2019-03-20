import Feature from 'ol/Feature.js';
import Geolocation from 'ol/Geolocation.js';
import Point from 'ol/geom/Point.js';
import {Draw, Modify, Snap} from 'ol/interaction.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import Map from 'ol/Map.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';
import View from 'ol/View.js';


const raster = new TileLayer({
  source: new OSM(),
});

const source = new VectorSource();
const vector = new VectorLayer({
  source,
  style: new Style({
    fill: new Fill({
      color: 'rgba(255, 255, 255, 0.2)',
    }),
    image: new CircleStyle({
      fill: new Fill({
        color: '#ffcc33',
      }),
      radius: 7,
    }),
    stroke: new Stroke({
      color: '#ffcc33',
      width: 2,
    }),
  }),
});

const view = new View({
  center: [-11000000, 4600000],
  maxZoom: 28,
  minZoom: 3,
  zoom: 17,
});

const map = new Map({
  layers: [raster, vector],
  target: 'map',
  view,
});

const modify = new Modify({source});
map.addInteraction(modify);

let draw;
let snap; // global so we can remove them later
const typeSelect = document.getElementById('type');

/**
 *
 */
function addInteractions() {
  draw = new Draw({
    source,
    type: typeSelect.value,
  });
  map.addInteraction(draw);
  snap = new Snap({source});
  map.addInteraction(snap);
}

/**
 * Handle change event.
 */
typeSelect.onchange = () => {
  map.removeInteraction(draw);
  map.removeInteraction(snap);
  addInteractions();
};

addInteractions();

const positionFeature = new Feature();
positionFeature.setStyle(new Style({
  image: new CircleStyle({
    fill: new Fill({
      color: '#33CC99',
    }),
    radius: 6,
    stroke: new Stroke({
      color: '#fff',
      width: 2,
    }),
  }),
}));

const geolocation = new Geolocation({
  projection: view.getProjection(),
  trackingOptions: {
    enableHighAccuracy: true,
  },
});
geolocation.setTracking(true); // here the browser may ask for confirmation
geolocation.on('change:position', () => {
  const coordinates = geolocation.getPosition();
  positionFeature.setGeometry(coordinates ?
    new Point(coordinates) : null);

  view.animate({
    center: coordinates,
    duration: 1000,
  });
  // console.log(geolocation.getPosition(), new Point(coordinates));
});

const accuracyFeature = new Feature();
geolocation.on('change:accuracyGeometry', () => {
  accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
});

new VectorLayer({
  map,
  source: new VectorSource({
    features: [accuracyFeature, positionFeature],
  }),
});
