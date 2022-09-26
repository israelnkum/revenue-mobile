import { combineReducers } from "redux";
import loginReducer from "./login-reducer";
import claimReducer from "./claim-reducer";
import driverReducer from "./driver-reducer";
import commonReducer from "./common-reducer";

const appReducer = combineReducers({
  loginReducer,
  claimReducer,
  driverReducer,
  commonReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "REMOVE_AUTH") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
