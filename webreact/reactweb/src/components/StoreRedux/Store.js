import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../StoreRedux/userSlicer";
export default configureStore({
  reducer: {
    userinfo: userReducer,
  },
});
