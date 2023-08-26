import React, { useEffect, useState } from 'react';

import Row from './row.jsx';

export default function Board() {
	const [boardStates, setBoardStates] = useState([
		[' ', ' ', ' '],
		[' ', ' ', ' '],
		[' ', ' ', ' '],
	]);

	const [currentPlayer, setCurrentPlayer] = useState('X');

	const [outcome, declareOutcome] = useState(null);

	const [color, setColor] = useState('initialColor');

	const checkForOutcome = () => {
		const winConditions = [
			// Rows
			[boardStates[0][0], boardStates[0][1], boardStates[0][2]],
			[boardStates[1][0], boardStates[1][1], boardStates[1][2]],
			[boardStates[2][0], boardStates[2][1], boardStates[2][2]],
			// Columns
			[boardStates[0][0], boardStates[1][0], boardStates[2][0]],
			[boardStates[0][1], boardStates[1][1], boardStates[2][1]],
			[boardStates[0][2], boardStates[1][2], boardStates[2][2]],
			// Diagonals
			[boardStates[0][0], boardStates[1][1], boardStates[2][2]],
			[boardStates[0][2], boardStates[1][1], boardStates[2][0]],
		];

		// Check if any of the win conditions are met
		for (const condition of winConditions) {
			if (condition.every((element) => element === 'X')) {
				declareOutcome('Winner: X');
				setColor('green'); // Set the color to indicate the winning player
				return;
			} else if (condition.every((element) => element === 'O')) {
				declareOutcome('Winner: O');
				setColor('green'); // Set the color to indicate the winning player
				return;
			}
		}

		// Check for a draw (no empty cells left)
		if (boardStates.flat().every((element) => element !== ' ')) {
			declareOutcome('Draw');
		}
	};

	useEffect(() => {
		checkForOutcome();
	}, [boardStates]);

	const updateBoardState = (rowIndex, boxIndex) => {
		const boxState = boardStates[rowIndex][boxIndex];
		if (boxState === 'X' || boxState === 'O') {
			return;
		}
		// console.log('the index in updateRowState is ' + index);
		const newBoardStates = [...boardStates];
		newBoardStates[rowIndex][boxIndex] = boardStates[rowIndex][boxIndex] = currentPlayer;
		setBoardStates(newBoardStates);
		setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
	};

	const resetGame = () => {
		setBoardStates([
			[' ', ' ', ' '],
			[' ', ' ', ' '],
			[' ', ' ', ' '],
		]);
		declareOutcome(null);
		setCurrentPlayer('X');
	};

	const rowMaker = (row, rowIndex) => {
		return <Row key={rowIndex} rowStates={row} color={color} onUpdateBoxState={(boxIndex, boxState) => updateBoardState(rowIndex, boxIndex, boxState)} />;
	};

	return (
		<div className='ticTacToe'>
			<div className='currentPlayer'>Current Player: {currentPlayer}</div>
			{boardStates.map((row, rowIndex) => rowMaker(row, rowIndex))}
			<button className='reset-button' onClick={resetGame}>
				Reset Game
			</button>
			{outcome && <div className='outcome'>{outcome}</div>}
		</div>
	);
}
