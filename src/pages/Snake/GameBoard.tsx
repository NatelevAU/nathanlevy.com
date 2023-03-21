// src/components/GameBoard.tsx
import React from 'react';
import styled from 'styled-components';

const Board = styled.div`
  display: grid;
  grid-template-rows: repeat(20, 1fr);
  grid-template-columns: repeat(20, 1fr);
  gap: 1px;
  background-color: black;
  width: 400px;
  height: 400px;
`;

const Cell = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const GameBoard: React.FC = () => {
  return (
    <Board>
      {Array.from({ length: 20 * 20 }, (_, i) => (
        <Cell key={i} />
      ))}
    </Board>
  );
};

export default GameBoard;
