import { createSlice } from "@reduxjs/toolkit";

let lastId=0;

/* createSlice way of implementations */

const slice = createSlice({
  name: "project",
  initialState: [],
  reducers: {
    //action =>action handler
    projectAdded: (projects, action) => {
      projects.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
  },
});

export const { projectAdded } = slice.actions;

export default slice.reducer;
