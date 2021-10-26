import React from 'react';
import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

// Data to be used by the LineLayer
const data = [
  {
    sourcePosition: [-122.41669, 37.7853],
    targetPosition: [-122.41669, 37.781],
  },
];

function App() {
  return (
    <DeckGL initialViewState={INITIAL_VIEW_STATE} controller>
      <LineLayer id="line-layer" data={data} />
      <StaticMap mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN} />
    </DeckGL>
  );
}

export default App;
