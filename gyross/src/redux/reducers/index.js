import { combineReducers } from "redux";
import VendorAuth from "./vendor/Auth.vendor.reducer";
import NameLocation from "./vendor/Name-Location.reducer";

const rootReducer = combineReducers({
  Vendor: VendorAuth,
  nameLocation: NameLocation,
});

export default rootReducer;
