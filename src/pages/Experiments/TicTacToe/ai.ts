import { calculateWinner, WinInfo } from './gameUtils';

/**
 * ai.ts
 *
 * Implements an optimal Tic Tac Toe algorithm using the Minimax algorithm with Alpha-Beta pruning.
 * This algorithm ensures the best possible outcome by evaluating all possible future game states.
 * When multiple optimal moves exist, it randomly selects one to increase unpredictability.
 */

export type Player = 'X' | 'O';
export type Cell = Player | null;
export type Board = Cell[][];

// Initialize an empty board
export const initializeBoard = (): Board => {
  return [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
};

// Check for a winner or a draw
export const checkWinner = (board: Board): Player | 'Draw' | null => {
  const result: WinInfo | null = calculateWinner(board.flat());

  // If no winner yet and board is not full, game is still ongoing
  if (result === null) {
    if (board.some(row => row.some(cell => cell === null))) {
      return null;
    }
    return 'Draw';
  }

  return result.winner;
};

// Get available moves
export const getAvailableMoves = (board: Board): { row: number; col: number }[] => {
  const moves: { row: number; col: number }[] = [];
  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === null) {
        moves.push({ row: i, col: j });
      }
    });
  });
  return moves;
};

// Alpha-Beta Pruning Algorithm
export const calculateAIMove = (board: Board, player: Player): { row: number; col: number } => {
  const opponent: Player = player === 'X' ? 'O' : 'X';

  // Minimax function with alpha-beta pruning
  const minimax = (
    currentBoard: Board,
    depth: number,
    isMaximizing: boolean,
    alpha: number,
    beta: number,
  ): number => {
    const result = checkWinner(currentBoard);

    // Terminal states
    if (result === player) return Infinity - depth; // Win (prefer winning sooner)
    if (result === opponent) return -Infinity + depth; // Loss (prefer losing later)
    if (result === 'Draw') return 0; // Draw

    const moves = getAvailableMoves(currentBoard);

    if (isMaximizing) {
      let maxEval = -Infinity;
      for (const move of moves) {
        currentBoard[move.row][move.col] = player;
        const evalScore = minimax(currentBoard, depth + 1, false, alpha, beta);
        currentBoard[move.row][move.col] = null;
        maxEval = Math.max(maxEval, evalScore);
        alpha = Math.max(alpha, evalScore);
        if (beta <= alpha) break; // Beta cutoff
      }
      return maxEval;
    } else {
      let minEval = Infinity;
      for (const move of moves) {
        currentBoard[move.row][move.col] = opponent;
        const evalScore = minimax(currentBoard, depth + 1, true, alpha, beta);
        currentBoard[move.row][move.col] = null;
        minEval = Math.min(minEval, evalScore);
        beta = Math.min(beta, evalScore);
        if (beta <= alpha) break; // Alpha cutoff
      }
      return minEval;
    }
  };

  // Find all moves with the best score
  const bestMoves: { move: { row: number; col: number }; score: number }[] = [];
  let bestScore = -Infinity;

  for (const move of getAvailableMoves(board)) {
    board[move.row][move.col] = player;
    const score = minimax(board, 0, false, -Infinity, Infinity);
    board[move.row][move.col] = null;

    if (score > bestScore) {
      // Found a better move, clear previous moves and start new list
      bestScore = score;
      bestMoves.length = 0;
      bestMoves.push({ move, score });
    } else if (score === bestScore) {
      // Found an equally good move, add it to the list
      bestMoves.push({ move, score });
    }
  }

  // Randomly select one of the best moves
  const randomIndex = Math.floor(Math.random() * bestMoves.length);
  return bestMoves[randomIndex].move;
};
