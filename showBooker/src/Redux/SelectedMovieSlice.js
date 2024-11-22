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
    clearDispatch:(state)=>{
      console.log("clear state");
      for (const key in state) {
        if (state.hasOwnProperty(key)) {
          delete state[key]; 
        }
      }
    }
  },
});

export const { nameDispatch, showDispatch ,clearDispatch} = selectingSlice.actions;
export default selectingSlice;
