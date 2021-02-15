import React, { FunctionComponent, useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { SetGridAction } from '../actions/grid';
import { gameLoop, randomizeGrid } from '../gameOfLife';
import useInterval from '../hooks/useInterval';
import { useTypedSelector } from '../reducers';

import './Toolbar.scss';

export interface ToolbarProps {

};

const Toolbar: FunctionComponent<ToolbarProps> = () => {
  const grid = useTypedSelector(state => state.grid.raw);
  const waitTime = useTypedSelector(state => state.settings.waitTime);
  const [isRunning, setRunning] = useState(false);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const runGame = () => {
    setCount(count + 1);
    dispatch(new SetGridAction(gameLoop(grid)));
  }
  useInterval(runGame, isRunning ? waitTime: null);
  return (
    <div id='toolbar'>
      <button onClick={() => dispatch(new SetGridAction(randomizeGrid(grid)))}>Randomize Grid</button>
      <button onClick={() => setRunning(!isRunning)}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={runGame}>Step</button>
      <br />
      Count: {count}
    </div>
  );
};

export default Toolbar;