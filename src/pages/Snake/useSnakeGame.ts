// src/hooks/useSnakeGame.ts
import { useCallback, useEffect, useState } from 'react';

import { Direction, GameState, Position, Snake } from './types';

const initialGameState: GameState = {
  snake: [
    [10, 10],
    [10, 11],
    [10, 12],
  ],
  food: [5, 5],
  direction: Direction.Right,
  isGameOver: false,
};

const useSnakeGame = () => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const generateFood = useCallback((snake: Snake): Position => {
    let newFood: Position;
    do {
      newFood = [Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)];
    } while (snake.some(([x, y]) => x === newFood[0] && y === newFood[1]));
    return newFood;
  }, []);

  const moveSnake = useCallback((snake: Snake, direction: Direction): Snake => {
    const head = snake[0].slice() as Position;
    switch (direction) {
      case Direction.Up:
        head[1]--;
        break;
      case Direction.Down:
        head[1]++;
        break;
      case Direction.Left:
        head[0]--;
        break;
      case Direction.Right:
        head[0]++;
        break;
    }
    return [head, ...snake.slice(0, -1)];
  }, []);

  const hasCollided = useCallback((snake: Snake): boolean => {
    const [headX, headY] = snake[0];
    return (
      headX < 0 ||
      headX >= 20 ||
      headY < 0 ||
      headY >= 20 ||
      snake.slice(1).some(([x, y]) => x === headX && y === headY)
    );
  }, []);

  const updateGameState = useCallback(() => {
    setGameState(state => {
      const newSnake = moveSnake(state.snake, state.direction);
      const hasEatenFood = newSnake[0][0] === state.food[0] && newSnake[0][1] === state.food[1];

      if (hasEatenFood) {
        newSnake.push(state.snake[state.snake.length - 1]);
      }

      const newFood = hasEatenFood ? generateFood(newSnake) : state.food;

      return {
        snake: newSnake,
        food: newFood,
        direction: state.direction,
        isGameOver: hasCollided(newSnake),
      };
    });
  }, [moveSnake, hasCollided, generateFood]);

  useEffect(() => {
    if (!gameState.isGameOver) {
      const intervalId = setInterval(updateGameState, 100);
      return () => clearInterval(intervalId);
    }
  }, [gameState.isGameOver, updateGameState]);

  const changeDirection = (newDirection: Direction) => {
    setGameState(state => {
      const isOppositeDirection =
        (state.direction === Direction.Up && newDirection === Direction.Down) ||
        (state.direction === Direction.Down && newDirection === Direction.Up) ||
        (state.direction === Direction.Left && newDirection === Direction.Right) ||
        (state.direction === Direction.Right && newDirection === Direction.Left);

      return {
        ...state,
        direction: isOppositeDirection ? state.direction : newDirection,
      };
    });
  };

  return {
    gameState,
    changeDirection,
  };
};

export default useSnakeGame;
