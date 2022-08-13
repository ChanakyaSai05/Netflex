import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: "",
  reducers: {
    set_data: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { set_data } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
