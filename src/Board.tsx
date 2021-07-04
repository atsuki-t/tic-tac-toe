import React, { useState } from 'react';
import Square from './Square';

const Board: React.FC = () => {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [xIsNext, setxIsNext] = useState(false);

  const renderSquare = (number: number) => {
    return <Square circleAndCross={squares[number]} number={number} onClick={() => handleClick(number)} />
  }

  const handleClick = (i: number) => {
    const newSquares = squares.slice();
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    newSquares[i] = xIsNext ? '×' : '○';
    setxIsNext(!xIsNext);
    setSquares(newSquares);
  }

  const calculateWinner = (squares: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const reset = () => {
    setSquares(Array(9).fill(''));
    setxIsNext(false);
  }

  const statusFunction = () => {
    if (calculateWinner(squares)) {
      return `勝者: ${calculateWinner(squares)}`
    } else {
      if (squares.some(element => element === '')) {
        return `次のプレイヤー: ${xIsNext ? '×' : '○'}`;
        
      } else {
        return '引き分け';
      }
    }
  }

  const status: string = statusFunction()

  return (
    <div>
      <div className="status">{status}</div>
      <div className="d-flex justify-content-center">
        <div>
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
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button onClick={reset} className="fs-2 bg-white">ゲームをリセットする</button>
      </div>
    </div>
  );
}

export default Board;