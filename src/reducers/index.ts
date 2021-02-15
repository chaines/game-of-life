import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { gridReducer } from "./grid";
import { settingsReducer } from "./settings";


export const rootReducer = combineReducers({
  settings: settingsReducer,
  grid: gridReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;