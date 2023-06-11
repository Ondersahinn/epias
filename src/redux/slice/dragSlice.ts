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
      localStorage.setItem('horizantal',JSON.stringify(action.payload))
      state.horizantal = action.payload;
    },
    handleVerticalTopDragChange: (state, action) => {
      localStorage.setItem('verticelTop',JSON.stringify(action.payload))
      state.verticelTop = action.payload;
    },
    handleVerticalBottomDragChange: (state, action) => {
      localStorage.setItem('verticelBottom',JSON.stringify(action.payload))
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
