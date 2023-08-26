import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import Box from './box.jsx';

export default function Row(props) {
  const boxMaker = (boxState, index) => (
    <Box
      key={index}
      boxState={boxState}
      onClick={() => props.onUpdateBoxState(index)}
    />
  );

  return <div className="boxRowDiv">{props.rowStates.map(boxMaker)}</div>;
}

// boxStates = [" ", ' ', ' '];

// boxStates.map(boxMaker)

// boxMaker(' ')

// <Box properties = {
//   key: 0,
//   boxState: ' ',
//   onClick: () => updateBoxState(index);
// }

// // Moved to Board.jsx
// const [boxStates, setBoxStates] = useState([' ', ' ', ' ']);

// // Moved to Board.jsx
// const updateBoxState = (index) => {
//   console.log('the index in updateBoxState is ' + index);
//   const newBoxStates = [...boxStates];
//   newBoxStates[index] = boxStates[index] === 'X' ? 'O' : 'X';
//   setBoxStates(newBoxStates);
// };
