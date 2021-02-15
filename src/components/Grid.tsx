import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { ToggleCellAction } from "../actions/grid";
import { useTypedSelector } from "../reducers";

import './Grid.scss';

interface GridProps {

}
const Grid: FunctionComponent<GridProps> = () => {
  const grid = useTypedSelector(state => state.grid.raw);
  const cellSize = useTypedSelector(state => state.settings.cellSize);
  const dispatch = useDispatch();

  return (
  <div className="grid">
    {grid.map((row, i) => (
      <div className="row" key={i}>
        {row.map((col, j) => (
          <div className={'cell ' + (col ? 'alive' : 'dead')} style={{width: cellSize, height: cellSize}} key={j} onClick={() => dispatch(new ToggleCellAction([i, j]))}></div>
        ))}
      </div>
    ))}
  </div>);
}

export default Grid;