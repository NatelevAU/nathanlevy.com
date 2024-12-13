import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { Board, calculateAIMove } from './ai';
import GameBoard from './GameBoard';
import GameSettings from './GameSettings';
import { calculateWinner, Square } from './gameUtils';

const TicTacToe: React.FC = () => {
  const [squares, setSquares] = useState<Square[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [isSinglePlayer, setIsSinglePlayer] = useState(false);
  const [playerSymbol, setPlayerSymbol] = useState<'X' | 'O'>('X');

  // Convert 1D array to 2D board
  const to2DBoard = (squares: Square[]): Board => {
    return [
      [squares[0], squares[1], squares[2]],
      [squares[3], squares[4], squares[5]],
      [squares[6], squares[7], squares[8]],
    ];
  };

  // Convert 2D position to 1D index
  const toIndex = (row: number, col: number): number => {
    return row * 3 + col;
  };

  useEffect(() => {
    if (isSinglePlayer && !calculateWinner(squares)) {
      const isPlayerTurn = xIsNext ? playerSymbol === 'X' : playerSymbol === 'O';
      if (!isPlayerTurn) {
        // Add a small delay to make AI moves feel more natural
        const timer = setTimeout(() => {
          const board = to2DBoard(squares);
          const aiMove = calculateAIMove(board, playerSymbol === 'X' ? 'O' : 'X');
          const moveIndex = toIndex(aiMove.row, aiMove.col);
          handleSquareClick(moveIndex);
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [isSinglePlayer, xIsNext, squares, playerSymbol]);

  const handleSquareClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const handleGameStart = (singlePlayer: boolean, symbol: 'X' | 'O') => {
    setIsSinglePlayer(singlePlayer);
    setPlayerSymbol(symbol);
    setGameStarted(true);
    handleReset();
    // If player chose O, AI (X) goes first
    if (singlePlayer && symbol === 'O') {
      const board = to2DBoard(Array(9).fill(null));
      const aiMove = calculateAIMove(board, 'X');
      const moveIndex = toIndex(aiMove.row, aiMove.col);
      setTimeout(() => {
        const newSquares = Array(9).fill(null);
        newSquares[moveIndex] = 'X';
        setSquares(newSquares);
        setXIsNext(false);
      }, 500);
    }
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
      {!gameStarted ? (
        <GameSettings onGameStart={handleGameStart} />
      ) : (
        <GameBoard
          squares={squares}
          xIsNext={xIsNext}
          onSquareClick={handleSquareClick}
          onReset={handleReset}
          calculateWinner={calculateWinner}
          isSinglePlayer={isSinglePlayer}
          playerSymbol={playerSymbol}
        />
      )}
    </Box>
  );
};

export default TicTacToe;
