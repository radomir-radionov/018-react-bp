import { modalReducer } from "redux/modal";
import { createOrderReducer } from "redux/createOrder";

const rootReducer = {
  createOrder: createOrderReducer,
  modal: modalReducer,
};

export default rootReducer;
