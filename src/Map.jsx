import { useState, useMemo, useRef, useCallback } from "react";
import { MapView } from '@aws-amplify/ui-react-geo';
import { Source, Layer, Popup } from 'react-map-gl';
import {dataLayer, lineLayer} from './mapStyle';
import mapShapes from "./mapShapes.json";
import studiersConfig from "./studiersConfig.json";
import ControlPanel from "./ControlPanel";
import Sidebar from "./Sidebar";

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
      feature.properties.studiers = studiers[feature.properties.type][feature.properties.name]['cout']
    }else if(zoom > 17 && feature.properties.type == "Building"){
      feature.properties.studiers = -1
    }else{
      feature.properties.studiers = studiers[feature.properties.type][feature.properties.name]['cout']
    }
    feature.properties.courses = studiers[feature.properties.type][feature.properties.name]['courses'].toString()
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
              const name = event.features[0].properties.type == "Room" ? event.features[0].properties.name  + " " + event.features[0].properties.building : event.features[0].properties.name;
              const courses = event.features[0].properties.courses;
              const count = event.features[0].properties.studiers;

              while (Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360;
              }
              setPopup({show: true, lng: event.lngLat.lng, lat: event.lngLat.lat, data: {courses: courses, studiers: count, name: name} })
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
        <Sidebar />
        <ControlPanel
              floorLevel={floor}
              minFloor={3}
              maxFloor={7}
              onChangeFloor={setFloor}
              zoom={zoom}
            />
        {popUp.show && (
          <div className="bottomPopups">
            <div class="box">
              <div><h1 class="label">Room/Building Name</h1><h1 class="value">{popUp.data.name}</h1></div>
              <div><h3 class="label">Percent of Studiers (Compared to rest of campus)</h3><h3 class="value">{popUp.data.studiers * 10}%</h3></div>
            </div>
            {popUp.data.courses.length != 0 && (
            <div class="box">
              <h2 class="label">Courses being studied</h2>
              <div class="courseList">
                {popUp.data.courses.split(',').map(course => (<h3>{course}</h3>))}
              </div>
            </div>)}
          </div>)}
      </div>
    </div>
  );
}