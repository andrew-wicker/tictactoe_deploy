import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import Box from './box.jsx';

export default function Row(props) {
	const boxMaker = (boxState, index) => <Box key={index} boxState={boxState} onClick={() => props.onUpdateBoxState(index)} />;

	return <div className='boxRowDiv'>{props.rowStates.map(boxMaker)}</div>;
}
