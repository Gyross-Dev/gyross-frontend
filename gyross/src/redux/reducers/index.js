import { combineReducers } from "redux";
import vendorAuth from "./vendor/Auth.vendor.reducer";
import nameLocation from "./vendor/Name-Location.reducer";
import vendorProfile from "./vendor/Profile.vendor.reducer";
import authentication from "../auth/auth.reducer";

const rootReducer = combineReducers({
  vendorAuth,
  nameLocation,
  vendorProfile,
  authentication,
});

export default rootReducer;
