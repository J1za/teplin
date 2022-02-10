import { combineReducers } from "redux";

import ModalReducer from "./modals";

const appReducer = combineReducers({
  ModalReducer,
});

export default appReducer;
