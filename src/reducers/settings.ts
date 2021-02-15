import { ActionWithPayload } from "../actions/Action"
import { ResizeGridAction, SettingsActionTypes, UpdateWaitTimeAction } from "../actions/settings"
import { MAX_HEIGHT, MAX_WIDTH, MIN_HEIGHT, MIN_WIDTH } from "../config/settings";

export interface SettingsState {
  gridWidth: number,
  gridHeight: number,
  cellSize: number,
  waitTime: number
}

export const DEFAULT_SETTINGS: SettingsState = {
  gridWidth: 150,
  gridHeight: 100,
  cellSize: 10,
  waitTime: 10
}

export const settingsReducer = (state: SettingsState = DEFAULT_SETTINGS, action: ActionWithPayload<any>): SettingsState => {
  switch(action.type) {
    case SettingsActionTypes.ResizeGrid: return resizeGrid(state, action);
    case SettingsActionTypes.UpdateWaitTime: return updateWaitTime(state, action);
    default: return state;
      
  }
}

const resizeGrid = (state: SettingsState, {payload: [newWidth, newHeight]}: ResizeGridAction): SettingsState => {
  const newState: SettingsState = {...state};
  console.log('Resizing grid', newWidth, newHeight);
  newState.gridWidth = Math.min(Math.max(newWidth, MIN_WIDTH), MAX_WIDTH);
  newState.gridHeight = Math.min(Math.max(newHeight, MIN_HEIGHT), MAX_HEIGHT);
  return newState;
}

const updateWaitTime = (state: SettingsState, {payload}: UpdateWaitTimeAction): SettingsState => {
  const newState = {...state};
  newState.waitTime = payload;
  return newState;
}