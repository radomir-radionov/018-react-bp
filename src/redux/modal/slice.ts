import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IModalInfo, TModalType } from "modules/Modal/modalTypes";

interface IStateType {
  modalInfo: object;
  modalType: string;
  isValid: boolean;
  apiError: any | null;
}

const modalInitialState: IStateType = {
  modalInfo: {},
  modalType: "",
  isValid: false,
  apiError: null,
};

const modalSlice = createSlice({
  name: "MODAL",
  initialState: modalInitialState,
  reducers: {
    openModal: (
      state: IStateType,
      action: PayloadAction<{ modalType: TModalType; modalInfo?: IModalInfo }>
    ) => {
      const { modalType, modalInfo } = action.payload;
      state.modalType = modalType;
      state.modalInfo = modalInfo || {};
    },
    closeModal: (state) => {
      state.modalType = "";
    },
    closeAllModals: () => modalInitialState,
    // request in modalSlice just for example
    exampleRequest: () => {},
  },
});

export const modalActionTypes = modalSlice.actions;

export default modalSlice.reducer;
