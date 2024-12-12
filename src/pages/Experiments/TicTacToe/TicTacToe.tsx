import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';

type Square = 'X' | 'O' | null;
type WinInfo = { winner: Square; lines: number[][] } | null;

const TicTacToe: React.FC = () => {
  const [squares, setSquares] = useState<Square[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares: Square[]): WinInfo => {
    const lines = [
      [0, 1, 2], // horizontal top
      [3, 4, 5], // horizontal middle
      [6, 7, 8], // horizontal bottom
      [0, 3, 6], // vertical left
      [1, 4, 7], // vertical middle
      [2, 5, 8], // vertical right
      [0, 4, 8], // diagonal top-left to bottom-right
      [2, 4, 6], // diagonal top-right to bottom-left
    ];

    const winningLines: number[][] = [];
    let winner: Square = null;

    for (const line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        winningLines.push(line);
        winner = squares[a];
      }
    }

    return winningLines.length > 0 ? { winner, lines: winningLines } : null;
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
        width: 70,
        height: 70,
        m: 0.25,
        fontSize: '1.5rem',
        fontWeight: 'bold',
      }}
    >
      {squares[i]}
    </Button>
  );

  const winInfo = calculateWinner(squares);
  const isDraw = !winInfo && squares.every(square => square !== null);
  const status = winInfo
    ? `Winner: ${winInfo.winner}`
    : isDraw
      ? 'Game is a draw!'
      : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const renderWinningLines = () => {
    if (!winInfo) return null;

    return winInfo.lines.map((line, lineIndex) => {
      const [a] = line;
      const row = Math.floor(a / 3);
      const col = a % 3;
      const isHorizontal = Math.abs(line[0] - line[1]) === 1;
      const isVertical = Math.abs(line[0] - line[1]) === 3;
      const isDiagonal = Math.abs(line[0] - line[1]) === 4 || Math.abs(line[0] - line[1]) === 2;

      if (isHorizontal) {
        return (
          <Box
            key={lineIndex}
            sx={{
              position: 'absolute',
              backgroundColor: '#2e7d32',
              height: '3px',
              width: '213px',
              top: `${row * 70.5 + 35}px`,
              left: '0',
            }}
          />
        );
      }

      if (isVertical) {
        return (
          <Box
            key={lineIndex}
            sx={{
              position: 'absolute',
              backgroundColor: '#2e7d32',
              width: '3px',
              height: '224px',
              left: `${col * 70.5 + 35}px`,
              top: '-0.5px',
            }}
          />
        );
      }

      if (isDiagonal) {
        return (
          <Box
            key={lineIndex}
            sx={{
              position: 'absolute',
              backgroundColor: '#2e7d32',
              height: '3px',
              width: '300px',
              top: '106px',
              left: '-43px',
              transformOrigin: 'center',
              transform: a === 0 ? 'rotate(45deg)' : 'rotate(-45deg)',
            }}
          />
        );
      }

      return null;
    });
  };

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
        p: 2,
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
        Tic Tac Toe
      </Typography>
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          color: 'black',
          fontWeight: winInfo || isDraw ? 'bold' : 'normal',
        }}
      >
        {status}
      </Typography>
      <Box
        sx={{
          mb: 2,
          position: 'relative',
          width: '213px',
          height: '213px',
        }}
      >
        {renderWinningLines()}
        <Box>
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
      </Box>
      <Button variant="contained" onClick={resetGame}>
        Reset Game
      </Button>
    </Box>
  );
};

export default TicTacToe;
