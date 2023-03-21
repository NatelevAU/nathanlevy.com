// src/components/GameBoard.tsx
import React, { useEffect } from 'react';
import { useCallback } from 'react';
import styled from 'styled-components';

import { Direction } from './types';
import useSnakeGame from './useSnakeGame';

const Board = styled.div`
  display: grid;
  grid-template-rows: repeat(20, 1fr);
  grid-template-columns: repeat(20, 1fr);
  gap: 1px;
  background-color: black;
  width: 400px;
  height: 400px;
`;

const Cell = styled.div<{ isSnake: boolean; isFood: boolean; isWall: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${props =>
    props.isSnake ? 'green' : props.isFood ? 'red' : props.isWall ? 'black' : 'white'};
`;

const GameInfo = styled.div`
  margin-bottom: 1rem;
`;

const GameOver = styled.div`
  color: red;
  margin-top: 1rem;
`;

const StartAgainButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
`;

const DeleteHighScoreButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
`;

const GameBoard: React.FC = () => {
  const { gameState, gameStats, changeDirection, resetGame, deleteHighScore } = useSnakeGame();

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        changeDirection(Direction.Up);
        break;
      case 'ArrowDown':
        changeDirection(Direction.Down);
        break;
      case 'ArrowLeft':
        changeDirection(Direction.Left);
        break;
      case 'ArrowRight':
        changeDirection(Direction.Right);
        break;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div>
      <GameInfo>
        <div>Score: {gameStats.currentScore}</div>
        <div>High Score: {gameStats.highScore}</div>
      </GameInfo>
      <Board>
        {Array.from({ length: 20 * 20 }, (_, i) => {
          const x = i % 20;
          const y = Math.floor(i / 20);
          const isWall = x === 0 || x === 19 || y === 0 || y === 19;
          const isSnake = !isWall && gameState.snake.some(([sx, sy]) => sx === x && sy === y);
          const isFood = gameState.food[0] === x && gameState.food[1] === y;
          return <Cell key={i} isSnake={isSnake} isFood={isFood} isWall={isWall} />;
        })}
      </Board>
      {gameState.isGameOver && (
        <div>
          <GameOver>Game Over!</GameOver>
          <StartAgainButton onClick={resetGame}>Start Again</StartAgainButton>
          <DeleteHighScoreButton onClick={deleteHighScore}>Delete High Score</DeleteHighScoreButton>
        </div>
      )}
    </div>
  );
};

export default GameBoard;
