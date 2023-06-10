import { createSlice } from "@reduxjs/toolkit";
import { formListData } from "constants/index";
interface IFormSlice {
  data: {
    key: string;
    value: string;
    data: string;
  }[];
}

const initialState: IFormSlice = {
  data: formListData,
};

const FormSlice = createSlice({
  name: "FormSlice",
  initialState,
  reducers: {
    handleDataChange: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { handleDataChange } = FormSlice.actions;

export default FormSlice.reducer;
