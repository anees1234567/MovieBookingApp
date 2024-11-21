import { createSlice } from '@reduxjs/toolkit';

const selectingSlice = createSlice({
  name: 'selectedMovie',
  initialState: {},
  reducers: {
    nameDispatch: (state, action) => {
      state[action.payload.name] = {};
    },
    showDispatch: (state, action) => {
      if (!state[action.payload.name]) {
        state[action.payload.name] = {}; 
      }
      state[action.payload.name][action.payload.show] = {};
    },
  },
});

export const { nameDispatch, showDispatch } = selectingSlice.actions;
export default selectingSlice;
