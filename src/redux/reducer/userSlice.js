import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userDetails: (state, action) => {
      state.token = action.payload;
    },
    clearUserDetails: (state) => {
      state.token = "";
    },
  },
});
export const { userDetails, clearUserDetails } = UserSlice.actions;

export default UserSlice.reducer;
