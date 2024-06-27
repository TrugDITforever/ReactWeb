import { createSlice } from "@reduxjs/toolkit";
export const userinfo = createSlice({
  name: "userinfo",
  initialState: {
    name: "",
    email: "",
    address: "",
  },
  reducers: {
      updateUser: (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.address = action.payload.address;
      },
      clearUser: (state) => {
        state.name = "";
        state.email = "";
        state.address = "";
      },
      updatename: (state, action) => {
        state.name = action.payload.name;
      },
      updatememail: (state, action) => {
        state.email = action.payload.email;
      },
      updateadress: (state, action) => {
        state.address = action.payload.address;
      },
  },
});
export const { updateUser, clearUser, updateadress, updatememail, updatename } =
  userinfo.actions;
export default userinfo.reducer;
