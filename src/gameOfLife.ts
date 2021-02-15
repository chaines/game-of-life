import { SetGridAction } from "./actions/grid";
import { DispatchType } from "./store";

export const checkNeighbors = (board: readonly boolean[][], i: number, j: number): boolean => {
  let neighbors = 0;
  if(board[i-1]) {
    if(board[i-1][j-1]) neighbors++;
    if(board[i-1][j])   neighbors++;
    if(board[i-1][j+1]) neighbors++;
  }
  if(board[i][j-1]) neighbors++;
  if(board[i][j+1]) neighbors++;
  if(board[i+1]) {
    if(board[i+1][j-1]) neighbors++;
    if(board[i+1][j]) neighbors++;
    if(board[i+1][j+1]) neighbors++;
  }
  if(board[i][j])
    return neighbors === 2 || neighbors === 3;
  else
    return neighbors === 3;
};


export const gameLoop = (board: readonly boolean[][]): boolean[][] => {
  const newBoard = copyGrid(board);
  const height = board.length;
  const width = board[0].length;
  for(let i = 0; i < height; i++) {
    for(let j = 0; j < width; j++) {
      newBoard[i][j] = checkNeighbors(board, i, j);
    }
  }
  return newBoard;
};


export const randomizeGrid = (board: readonly boolean[][]): boolean[][] => {
  const newBoard = board.map((row) => {
    return row.map((cell) => {
      return !!Math.floor(Math.floor(Math.random()*3)/2); //Magic numbers bad, but this creates a nice board.
    });
  });
  return newBoard;
};


export const copyGrid = (board: readonly boolean[][]): boolean[][] => {
  const newBoard = [];
  for(let i = 0; i < board.length; i++) {
    newBoard[i] = [];
    for(let j = 0; j < board[i].length; j++) {
      newBoard[i][j] = board[i][j];
    }
  }
  return newBoard;
}

export const compareGrids = (board1: readonly boolean[][], board2: readonly boolean[][]): boolean => {
  if(board1.length !== board2.length) return false;
  if(board1[0].length !== board2[0].length) return false;
  for(let i = 0; i < board1.length; i++) {
    for(let j = 0; j < board1[0].length; j++) {
      if(board1[i][j] !== board2[i][j]) return false;
    }
  }
  return true;
}
