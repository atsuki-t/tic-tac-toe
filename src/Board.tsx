import React, { useState } from 'react';
import Square from './Square';

const Board: React.FC = () => {
  // let squares: ('X' | 'O' | '')[] = Array(9).fill('');
  const [squares, setSquares] = useState(Array(9).fill(''))

  const renderSquare = (number: number) => {
    return <Square circleAndCross={squares[number]} onClick={() => handleClick(number)} />
  }

  const handleClick = (i: number) => {
    squares[i] = 'X';
    setSquares(squares);
  }

  let status: string = 'Next player: X';

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;