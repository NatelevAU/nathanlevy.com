import { Box, Button, Typography } from '@mui/material';
import React from 'react';

import { Square, WinInfo } from './gameUtils';

interface GameBoardProps {
  squares: Square[];
  xIsNext: boolean;
  onSquareClick: (i: number) => void;
  onReset: () => void;
  calculateWinner: (squares: Square[]) => WinInfo;
  isSinglePlayer?: boolean;
}

const GameBoard: React.FC<GameBoardProps> = ({
  squares,
  xIsNext,
  onSquareClick,
  onReset,
  calculateWinner,
  isSinglePlayer = false,
}) => {
  const handleSquareClick = (i: number) => {
    // Prevent user clicks during AI's turn in single player mode
    if (isSinglePlayer && !xIsNext) {
      return;
    }
    onSquareClick(i);
  };

  const renderSquare = (i: number) => (
    <Button
      variant="outlined"
      onClick={() => handleSquareClick(i)}
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
      : `Next player: ${xIsNext ? 'X' : 'O'}${isSinglePlayer && !xIsNext ? ' (AI)' : ''}`;

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

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
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
      <Button variant="contained" onClick={onReset}>
        Reset Game
      </Button>
    </Box>
  );
};

export default GameBoard;
