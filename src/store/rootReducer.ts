import { addressReducer } from "redux/address";
import { createOrderReducer } from "redux/createOrder";
import { modalReducer } from "redux/modal";

const rootReducer = {
  address: addressReducer,
  createOrder: createOrderReducer,
  modal: modalReducer,
};

export default rootReducer;
