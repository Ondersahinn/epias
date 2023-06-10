import { combineReducers } from "redux";
import formSlice from "./slice/formSlice";
import dragSlice from "./slice/dragSlice";

const rootReducer = combineReducers({
  form: formSlice,
  drag: dragSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
