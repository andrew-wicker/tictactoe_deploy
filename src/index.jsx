import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
// import Row from './components/row.jsx';
import Board from './components/board.jsx';

const App = () => {
  return (
    <div className="rootDiv">
      <div id="ticTacToeDiv">
        <h1>Tic Tac Toe</h1>
      </div>

      {/* <div className="ticTacToe"> */}
      <Board />
      {/* <Row />
        <Row />
        <Row /> */}
      {/* </div> */}
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
