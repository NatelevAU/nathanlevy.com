export type Square = 'X' | 'O' | null;
export type WinInfo = { winner: Square; lines: number[][] } | null;

export const calculateWinner = (squares: Square[]): WinInfo => {
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
