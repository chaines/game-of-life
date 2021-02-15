export abstract class PlainAction {
  public abstract readonly type: string;
  constructor() {
    return Object.assign({}, this);
  }
}

export abstract class ActionWithPayload<P extends any> extends PlainAction {
  constructor(public readonly payload: P) {
    super();
  }
}