import { useState, useMemo, useRef, useCallback } from "react";
import { MapView } from '@aws-amplify/ui-react-geo';
import { Source, Layer, Popup } from 'react-map-gl';
import {dataLayer, lineLayer} from './mapStyle';
import mapShapes from "./mapShapes.json";
import studiersConfig from "./studiersConfig.json";
import ControlPanel from "./ControlPanel";

function filterByFloor(shapes, zoom, floor, studiers) {
  const features = shapes.features.filter(feature => {
    if (zoom <= 17){
      return feature.properties.main
    }else{
      return feature.properties.floor == floor
    }
  })
  features.forEach(feature => {
    if(zoom <= 17){
      feature.properties.studiers = studiers[feature.properties.type][feature.properties.name]
    }else if(zoom > 17 && feature.properties.type == "Building"){
      feature.properties.studiers = -1
    }else{
      feature.properties.studiers = studiers[feature.properties.type][feature.properties.name]
    }
  });
  console.log(features)
  return {type: 'FeatureCollection', features};
}

export default function Map() {
    const [floor, setFloor] = useState(4);
    const shapes = mapShapes;
    const [zoom, setZoom] = useState(16);
    const [studiers, setStudiers] = useState(studiersConfig);
    const [popUp, setPopup] = useState({show: false, lng: 0, lat:0, data: ("<></>")});

  const data = useMemo(() => {
    return filterByFloor(shapes, zoom, floor, studiers);
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
      <div className="map">
        <MapView
          initialViewState={{
            longitude: -75.37843741120489,
            latitude: 40.609000828213624,
            zoom: 17
          }}
          className="mapElement"
          interactiveLayerIds={['data', 'lines']}
          onMove={event => {setZoom(event.viewState.zoom)}}
          onClick={(event) => {
            console.log(event)
            if(event.features.length == 0){
              setPopup({show: false, lng: 0, lat:0, data: ("<></>")})
            }else{
              const coordinates = event.features[0].geometry.coordinates.slice();
              const name = event.features[0].properties.name;

              while (Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360;
              }
              setPopup({show: true, lng: event.lngLat.lng, lat: event.lngLat.lat, data: name })
            }
            
          }}
          >
              {data && (
              <Source type="geojson" data={data}>
                <Layer {...dataLayer}/>
                <Layer {...lineLayer}/>
              </Source>
            )}
        </MapView>
        <ControlPanel
              floorLevel={floor}
              minFloor={3}
              maxFloor={7}
              onChangeFloor={setFloor}
              zoom={zoom}
            />
        {popUp.show && (
          <div className="bottomPopups">
            <div>
              {popUp.data}
            </div>
            <div>

            </div>
          </div>)}
      </div>
    </div>
  );
}