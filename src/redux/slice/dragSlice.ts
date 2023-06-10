import { createSlice } from "@reduxjs/toolkit";

interface IDragSlice {
  horizantal: Array<number>;
  verticelTop: Array<number>;
  verticelBottom: Array<number>;
}

const initialState: IDragSlice = {
  horizantal: [],
  verticelBottom: [],
  verticelTop: [],
};

const DragSlice = createSlice({
  name: "DragSlice",
  initialState,
  reducers: {
    handleHorizantalDragChange: (state, action) => {
      state.horizantal = action.payload;
    },
    handleVerticalTopDragChange: (state, action) => {
      state.verticelTop = action.payload;
    },
    handleVerticalBottomDragChange: (state, action) => {
      state.verticelBottom = action.payload;
    },
  },
});

export const {
  handleHorizantalDragChange,
  handleVerticalBottomDragChange,
  handleVerticalTopDragChange,
} = DragSlice.actions;

export default DragSlice.reducer;
