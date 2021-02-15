import { PlainAction, ActionWithPayload } from './Action';

export const GridActionTypes = {
  ResetGrid: 'RESET_GRID',
  ResizeGrid: 'RESIZE_GRID',
  SetGrid: 'SET_GRID',
  ToggleCell: 'TOGGLE_CELL'
};

export class ResetGridAction extends ActionWithPayload<[number, number]> {
  public readonly type = GridActionTypes.ResetGrid;
  constructor(payload: [number, number]) {
    super(payload);
  }
}

export class SetGridAction extends ActionWithPayload<boolean[][]> {
  public readonly type = GridActionTypes.SetGrid;
  constructor(payload: boolean[][]) {
    super(payload);
  }
}

export class ToggleCellAction extends ActionWithPayload<[number, number]> {
  public readonly type = GridActionTypes.ToggleCell;
  constructor(payload: [number, number]) {
    super(payload);
  }
}