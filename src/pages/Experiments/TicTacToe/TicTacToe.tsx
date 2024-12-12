import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';

type Square = 'X' | 'O' | null;

const TicTacToe: React.FC = () => {
  const [squares, setSquares] = useState<Square[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares: Square[]): Square => {
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

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i: number) => (
    <Button
      variant="outlined"
      onClick={() => handleClick(i)}
      sx={{
        width: 100,
        height: 100,
        m: 0.5,
        fontSize: '2rem',
        fontWeight: 'bold',
      }}
    >
      {squares[i]}
    </Button>
  );

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== null);
  const status = winner
    ? `Winner: ${winner}`
    : isDraw
      ? 'Game is a draw!'
      : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Tic Tac Toe
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {status}
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex' }}>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </Box>
          <Box sx={{ display: 'flex' }}>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </Box>
          <Box sx={{ display: 'flex' }}>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </Box>
        </Box>
        <Button variant="contained" onClick={resetGame}>
          Reset Game
        </Button>
      </Paper>
    </Box>
  );
};

export default TicTacToe;
