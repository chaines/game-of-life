import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ResetGridAction } from '../actions/grid';
import { ResizeGridAction, UpdateWaitTimeAction } from '../actions/settings';
import { useTypedSelector } from '../reducers';
import Grid from './Grid';
import Toolbar from './Toolbar';

import './App.scss';

export interface AppProps {

}

const App: FunctionComponent<AppProps> = (props) => {
  const [gridWidth, gridHeight] = useTypedSelector(state => [state.settings.gridWidth, state.settings.gridHeight]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(new ResetGridAction([gridWidth, gridHeight]));
  }, [])
  
  return (
    <div>
      <Toolbar />
      <Grid />
    </div>
  );
}

export default App;