import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./Reducers";

export default configureStore({
  reducer: {
    form: formReducer
  }
});
