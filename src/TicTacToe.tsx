import React from 'react';
import Board from './Board';

const TicTacToe: React.FC = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

export default TicTacToe;
