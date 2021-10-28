import React from 'react';
import DeckGL from '@deck.gl/react';
import { GeoJsonLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: 174.841,
  latitude: -36.9141,
  zoom: 12,
  pitch: 0,
  bearing: 0,
};

function App() {
  const stops = fetch('data/stops-processed.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const features = Object.keys(data).map((key) => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [data[key].stop_lon, data[key].stop_lat],
        },
        properties: {
          name: data[key].stop_name,
        },
      }));

      return {
        type: 'FeatureCollection',
        features,
      };
    });

  return (
    <DeckGL initialViewState={INITIAL_VIEW_STATE} controller>
      <GeoJsonLayer id="test-layer" data={stops} getPointRadius={20} />
      <StaticMap mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN} />
    </DeckGL>
  );
}

export default App;
