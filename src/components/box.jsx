import React from 'react';

export default function Box(props) {
  // const boxStyle = {
  //   backgroundColor: props.color,
  // };

  return (
    <div className="box" id={crypto.randomUUID()}>
      <button
        className="button"
        onClick={props.onClick}
        style={{ width: '100px', height: '100px' }}
      >
        <p>{props.boxState}</p>
      </button>
    </div>
  );
}

//{ boxState, onClick }
