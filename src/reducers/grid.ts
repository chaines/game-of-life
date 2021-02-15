import { ActionWithPayload } from "../actions/Action"
import { GridActionTypes, ResetGridAction, SetGridAction, ToggleCellAction } from "../actions/grid";
import { ResizeGridAction, SettingsActionTypes } from "../actions/settings";
import { compareGrids, copyGrid } from "../gameOfLife";


export interface GridState {
  raw: boolean[][]
}

const DEFAULT_GRID_STATE: GridState = {
  raw: [[]]
}

export const gridReducer = (state: GridState = DEFAULT_GRID_STATE, action: ActionWithPayload<any>): GridState => {
  switch(action.type) {
    case SettingsActionTypes.ResizeGrid: return resetGrid(action);
    case GridActionTypes.ResetGrid: return resetGrid(action);
    case GridActionTypes.SetGrid: return setGrid(state, action);
    case GridActionTypes.ToggleCell: return toggleCell(state, action);
    default: return state;
  }
}

const setGrid = (state: GridState, {payload}: SetGridAction) => {
  return {raw: copyGrid(payload)}
}

const resizeGrid = (state: GridState, {payload: [newWidth, newHeight]}: ResizeGridAction): GridState => {
  return state;
}

const resetGrid = ({payload: [width, height]}: ResetGridAction): GridState => {
  const grid = [];
  for(let i = 0; i < height; i++) {
    grid[i] = [];
    for(let j = 0; j < width; j++) {
      grid[i][j] = false;
    }
  }
  return { raw: grid };
}

const toggleCell = (state: GridState, {payload: [i, j]}: ToggleCellAction): GridState => {
  const newGrid = copyGrid(state.raw);
  newGrid[i][j] = !newGrid[i][j];
  return { raw: newGrid };
}