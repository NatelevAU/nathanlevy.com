// src/types.ts
export type Position = [number, number];
export type Snake = Position[];

export interface GameState {
  snake: Snake;
  food: Position;
  direction: Direction;
  isGameOver: boolean;
}

export enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
