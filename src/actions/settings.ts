import { PlainAction, ActionWithPayload } from './Action';
import { ResetGridAction } from './grid';

export const SettingsActionTypes = {
  ResizeGrid: 'RESIZE_GRID',
  UpdateWaitTime: 'UPDATE_WAIT_TIME'
};


export class ResizeGridAction extends ActionWithPayload<[number, number]> {
  public readonly type = SettingsActionTypes.ResizeGrid;
  constructor(payload: [number, number]) {
    super(payload);
  }
}


export class UpdateWaitTimeAction extends ActionWithPayload<number> {
  public readonly type = SettingsActionTypes.UpdateWaitTime;
  constructor(payload: number) {
    super(payload);
  }
}
