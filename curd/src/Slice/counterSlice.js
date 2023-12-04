import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    productDataAction: (state, action) => {
      state.value = action.payload;
    },

    deleteDataAction: (state, action) => {
      let del = state.value.filter((item) => item.id !== action.payload);
      state.value = del;
    },
    editDataAction: (state, action) => {
      // const index = state.value.findIndex(
      //   (item) => (item.id = action.payload.id)
      // );

      // if (index !== -1) {
      //   state[index] = action.payload;
      // } else {
      //   console.log("no object of this id is found");
      // }

      let edit = state.value.map((item) => {
        if (item.id == action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
      state.value = edit;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  editDataAction,
  decrement,
  productDataAction,
  deleteDataAction,
} = counterSlice.actions;

export default counterSlice.reducer;
