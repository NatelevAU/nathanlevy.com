// src/components/GameBoard.tsx
import React, { useEffect } from 'react';
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

const Cell = styled.div<{ isSnake: boolean; isFood: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${props => (props.isSnake ? 'green' : props.isFood ? 'red' : 'white')};
`;

const GameBoard: React.FC = () => {
  const { gameState, changeDirection } = useSnakeGame();

  const handleKeyPress = (event: KeyboardEvent) => {
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
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <Board>
      {Array.from({ length: 20 * 20 }, (_, i) => {
        const x = i % 20;
        const y = Math.floor(i / 20);
        const isSnake = gameState.snake.some(([sx, sy]) => sx === x && sy === y);
        const isFood = gameState.food[0] === x && gameState.food[1] === y;
        return <Cell key={i} isSnake={isSnake} isFood={isFood} />;
      })}
    </Board>
  );
};

export default GameBoard;
