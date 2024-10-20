import { useState, useEffect, useMemo } from "react";
import { MapView } from '@aws-amplify/ui-react-geo';
import { Source, Layer } from 'react-map-gl';
import {dataLayer} from './mapStyle';
import mapShapes from "./mapShapes.json";
import ControlPanel from "./ControlPanel";

function filterByFloor(shapes, zoom, floor) {
  const features = shapes.features.filter(feature => {
    if (zoom <= 17){
      console.log(feature.properties.main)
      return feature.properties.main
    }else{
      console.log(feature.properties.floor)
      if(feature.properties.floor == floor)console.log(feature)
      return feature.properties.floor == floor
    }
  });
  return {type: 'FeatureCollection', features};
}

export default function Map() {
    const [floor, setFloor] = useState(3);
    const [shapes, setShapes] = useState(mapShapes);
    const [zoom, setZoom] = useState(16);

  const data = useMemo(() => {
    return filterByFloor(shapes, zoom, floor);
  }, [zoom, floor]);

  /*
    <Authenticator>
      {({ signOut }) => (
          <Button onClick={signOut}>Sign Out</Button>
      )}
    </Authenticator>
  */
  return (
    <div>
      <p>Test</p>
      <MapView 
        id="Map"
        initialViewState={{
          longitude: -75.37843741120489,
          latitude: 40.609000828213624,
          zoom: 17
        }}
        onMove={event => {setZoom(event.viewState.zoom)}}
        >
            {data && (
            <Source type="geojson" data={data}>
              <Layer {...dataLayer}/>
            </Source>
          )}
          <ControlPanel
            floorLevel={floor}
            minFloor={2}
            maxFloor={6}
            onChangeFloor={setFloor}
            zoom={zoom}
          />
      </MapView>
    </div>
  );
}