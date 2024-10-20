import * as React from 'react';

function ControlPanel(props) {
  const {floorLevel, minFloor, maxFloor, onChangeFloor, zoom, edit, onEdit} = props;

  const onSelectFloor = evt => {
    const floor = evt.target.value;
    onChangeFloor(floor);
  };
  if(zoom > 17){
    return (
      <div className="control-panel">
        <fieldset className='radios'>
          {[...Array(((maxFloor - minFloor) + 1))].map((x, i) => {
            let floor= i + minFloor
            return(<label className='radioLabel'>
              <input
                type="radio"
                value={floor}
                checked={floor == floorLevel}
                onChange={onSelectFloor}
                className='radioButton'
              />
              <p>{floor}</p>
            </label>)
          })}
        </fieldset>
        <fieldset className='radios'>
          <label className='radioLabel'>
              <input
                type="checkbox"
                value="edit"
                checked={edit.active}
                onChange={(event) => onEdit({active: event.target.checked, show: false, lng: 0, lat:0, type: 1, data: {}})}
                className='radioButton'
              />
              <p>Add</p>
            </label>
        </fieldset>
      </div>
    );
  }else{
    return(<></>)
  }
  
}

export default React.memo(ControlPanel);