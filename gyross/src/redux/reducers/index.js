import { combineReducers } from "redux";
import VendorAuth from "./vendor/Auth.vendor.reducer";
import NameLocation from "./vendor/Name-Location.reducer";
import vendorProfile from "./vendor/Profile.vendor.reducer";

const rootReducer = combineReducers({
  Vendor: VendorAuth,
  nameLocation: NameLocation,
  vendorProfile: vendorProfile,
});

export default rootReducer;
