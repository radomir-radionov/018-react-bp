import { createSelector } from "@reduxjs/toolkit";

const modal = (state: any) => state.modal;

export const modalTypeSelector = createSelector(
  modal,
  (modalData: any) => modalData.modalType
);
