import { combineReducers } from "redux";
import formSlice from "./slice/formSlice";

const rootReducer = combineReducers({
  form: formSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
