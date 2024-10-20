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
      feature.properties.studiers = studiers[feature.properties.type][feature.properties.name]['count']
    }else if(zoom > 17 && feature.properties.type == "Building"){
      feature.properties.studiers = -1
    }else{
      feature.properties.studiers = studiers[feature.properties.type][feature.properties.name]['count']
    }
    feature.properties.courses = studiers[feature.properties.type][feature.properties.name]['courses'].toString()
  });
  return {type: 'FeatureCollection', features};
}

export default function Map() {
    const [floor, setFloor] = useState(4);
    const shapes = mapShapes;
    const [zoom, setZoom] = useState(16);
    const [studiers, setStudiers] = useState(studiersConfig);
    const [popUp, setPopup] = useState({active: false, show: false, lng: 0, lat:0, type: 0, data: ("<></>")});

  const data = useMemo(() => {
    return filterByFloor(shapes, zoom, floor, studiers);
  }, [zoom, floor]);

  console.log(Object.keys(studiers.Room))

  /*
    <Authenticator>
      {({ signOut }) => (
          <Button onClick={signOut}>Sign Out</Button>
      )}
    </Authenticator>
  */
 console.log(popUp)
  return (
    <div>
      <div className="map">
        <MapView
          initialViewState={{
            longitude: -75.37843741120489,
            latitude: 40.609000828213624,
            zoom: 17
          }}
          style={popUp.type == 1 && popUp.active == true ? {cursor: "crosshair"} : {cursor: "default"}}
          className="mapElement"
          interactiveLayerIds={['data', 'lines']}
          onMove={event => {setZoom(event.viewState.zoom)}}
          onClick={(event) => {
            if(popUp.active){
              console.log(event.features)
              if(event.features.length == 0){
                setPopup({active: false, show: false, lng: 0, lat:0, type:0, data:{type: "", name: ""}})
              }else{
                const name = event.features[0].properties.type == "Room" ? event.features[0].properties.name  + " " + event.features[0].properties.building : event.features[0].properties.name;
                const type = event.features[0].properties.type == "Building" ? "Floor" : this;
                const count = event.features[0].properties.studiers;
                console.log(name)
                setPopup({active: true, show: true, lng: event.lngLat.lng, lat:event.lngLat.lat, type: 1, data: {type: type, name: name, studiers: count}})
              }
            }else{
              if(event.features.length == 0){
                setPopup({active: false, show: false, lng: 0, lat:0, type:0, data: ("<></>")})
              }else{
                const name = event.features[0].properties.type == "Room" ? event.features[0].properties.name  + " " + event.features[0].properties.building : event.features[0].properties.name;
                const courses = event.features[0].properties.courses;
                const count = event.features[0].properties.studiers;
                setPopup({active: false, show: true, lng: event.lngLat.lng, lat: event.lngLat.lat, type: 0, data: {courses: courses, studiers: count, name: name} })
              }
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
        <Sidebar rooms={Object.keys(studiers.Room)} buildings={Object.keys(studiers.Building)} courses={studiers['Courses']} />
        <ControlPanel
              floorLevel={floor}
              minFloor={3}
              maxFloor={7}
              edit={popUp}
              onEdit={setPopup}
              onChangeFloor={setFloor}
              zoom={zoom}
            />
        {popUp.show && popUp.type == 0 &&(
          <div className="bottomPopups">
            <div className="box">
              <div><p className="label">Room/Building Name</p><h1 className="value">{popUp.data.name}</h1></div>
              <div><p className="label">Percent of Studiers (Compared to rest of campus)</p><h3 class="value">{popUp.data.studiers * 10}%</h3></div>
            </div>
            {popUp.data.courses.length != 0 && (
            <div className="box">
              <p className="label">Courses being studied</p>
              <div className="courseList">
                {popUp.data.courses.split(',').map(course => (<h3>{course}</h3>))}
              </div>
            </div>)}
          </div>)}
        {popUp.show && popUp.type == 1 &&(
          <div className="bottomPopups">
            <div className="box">
              <div><p className="label">Room/Building Name</p><h1 className="value">{popUp.data.name}</h1></div>
              <div><p className="label">Percent of Studiers (Compared to rest of campus)</p><h3 className="value">{popUp.data.studiers * 10}%</h3></div>
            </div>
            <div className="box">
              <p>{popUp.data.type}</p>
              <p className="label">Add Study Location</p>
              <div className="courseList">
                <div className="select-field">
                  <label htmlFor={buildings} className="label">{"What course are you studying for?"}</label>
                  <select key={"courses"} label={"courses"} id={"courses"} className="select">
                    {studiers.Courses && studiers.Courses.map(course => (<option value={course}>{course}</option>))}
                  </select>
                </div>
                <button className="filter-button">Add</button>
              </div>
            </div>
          </div>)}
      </div>
    </div>
  );
}