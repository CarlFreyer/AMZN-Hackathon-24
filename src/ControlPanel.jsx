import * as React from 'react';

function ControlPanel(props) {
  const {floorLevel, minFloor, maxFloor, onChangeFloor, zoom} = props;

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
      </div>
    );
  }else{
    return(<></>)
  }
  
}

export default React.memo(ControlPanel);