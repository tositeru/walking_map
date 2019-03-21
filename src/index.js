import olDynamic from './js/ol-dynamic'

async function main() {
  try {
    const ol = await olDynamic.imports([
      'Map',
      'View',
      'layer',
      'source',
      'Feature',
      'Geolocation',
      'interaction',
      'style',
      'geom/Point'])
    const raster = new ol.layer.Tile({
      source: new ol.source.OSM(),
    });

    const source = new ol.source.Vector();
    const vector = new ol.layer.Vector({
      source,
      style: new ol.style.Style({
        fill: new ol.style.Fill({
          color: 'rgba(255, 255, 255, 0.2)',
        }),
        image: new ol.style.Circle({
          fill: new ol.style.Fill({
            color: '#ffcc33',
          }),
          radius: 7,
        }),
        stroke: new ol.style.Stroke({
          color: '#ffcc33',
          width: 2,
        }),
      }),
    });
    const view = new ol.View.default({
      center: [-11000000, 4600000],
      maxZoom: 28,
      minZoom: 3,
      zoom: 17,
    });

    const map = new ol.Map.default({
      layers: [raster, vector],
      target: 'map',
      view,
    });

    const modify = new ol.interaction.Modify({source});
    map.addInteraction(modify);

    let draw;
    let snap; // global so we can remove them later
    const typeSelect = document.getElementById('type');

    function addInteractions() {
      draw = new ol.interaction.Draw({
        source,
        type: typeSelect.value,
      });
      map.addInteraction(draw);
      snap = new ol.interaction.Snap({source});
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

    const positionFeature = new ol.Feature.default();
    positionFeature.setStyle(new ol.style.Style({
      image: new ol.style.Circle({
        fill: new ol.style.Fill({
          color: '#33CC99',
        }),
        radius: 6,
        stroke: new ol.style.Stroke({
          color: '#fff',
          width: 2,
        }),
      }),
    }));

    addInteractions();
    
    const geolocation = new ol.Geolocation.default({
      projection: view.getProjection(),
      trackingOptions: {
        enableHighAccuracy: true,
      },
    });

    geolocation.setTracking(true); // here the browser may ask for confirmation
    geolocation.on('change:position', () => {
      const coordinates = geolocation.getPosition();
      positionFeature.setGeometry(coordinates ?
        new ol.geom.Point.default(coordinates) : null);
    
      view.animate({
        center: coordinates,
        duration: 1000,
      });
      // console.log(geolocation.getPosition(), new Point(coordinates));
    });
    
    const accuracyFeature = new ol.Feature.default();
    geolocation.on('change:accuracyGeometry', () => {
      accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
    });

    new ol.layer.Vector({
      map,
      source: new ol.source.Vector({
        features: [accuracyFeature, positionFeature],
      }),
    });
  } catch (error) {
    console.error(error)
  }
}

main()

