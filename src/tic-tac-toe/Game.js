import { React, useState } from 'react';
import './Game.css';

const Square = (props) => {
    
    return (
        <button className='square' onClick={props.onClickEvent}>
            {props.value}
        </button>
    )
}

const Board = () => {

    const initialSquares = Array(9).fill(null);
    const [squares, setSquares] = useState(initialSquares);
    const [xIsNext, setXIsNext] = useState(true);

    const handleClickEvent = (i) => {
        // copy of squares state array
        const newSquares = [...squares];

        const winnerDeclared = Boolean(calculateWinner(newSquares));
        const squareFilled = Boolean(newSquares[i]);
        if(winnerDeclared || squareFilled) {
            return;
        }

        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }

    const renderSquare = (i) => {
        return (
            <Square value={squares[i]} onClickEvent={() => handleClickEvent(i)}/>
        )
    }

    const resetGame = () => {
        const newSquares = [...squares];
        newSquares.fill(null);
        setSquares(newSquares);
        setXIsNext(true);
    }

    const winner = calculateWinner(squares);
    var status = winner ? `Winner: ${winner}` : `Next player is: ${xIsNext ? 'X' : 'O'}`;

    var squareCompleted = true;
    for(let item of squares) {
        if(item === null) squareCompleted = false;
    }
    if(squareCompleted && winner === null) status = 'Draw, no winner';

    return (
        <div style={{
            backgroundColor: 'skyblue',
            margin: 20,
            padding: 20
        }}>
            <div className='status'>{status}</div>
            <div className='board-row'>
                {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
            </div>
            <div className="reset-btn">
                <button onClick={resetGame}>Reset game</button>
            </div>
        </div>
    )
}

const Game = () => {
    return (
        <div className='game'>
            Tic Tac Toe
            <Board />
        </div>
    )
}

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for(let line of lines) {
        const [a, b, c] = line;
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}

export default Game;