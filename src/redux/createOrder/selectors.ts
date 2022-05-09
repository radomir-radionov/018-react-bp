import { createSelector } from "@reduxjs/toolkit";
import { ICreateOrderStateType } from "./slice";

const createOrderSelector = (state: any) => state.createOrder;

export const workTypesSelector = createSelector(
  createOrderSelector,
  (createOrder: ICreateOrderStateType) => createOrder.workTypes
);

export const additionalWorkTypesSelector = createSelector(
  createOrderSelector,
  (createOrder: ICreateOrderStateType) => createOrder.additionalWorkType
);

export const employeeSelector = createSelector(
  createOrderSelector,
  (createOrder: ICreateOrderStateType) => createOrder.employee
);

export const additionalEmployeeSelector = createSelector(
  createOrderSelector,
  (createOrder: ICreateOrderStateType) => createOrder.additionalEmployee
);

export const durationSelector = createSelector(
  createOrderSelector,
  (createOrder: ICreateOrderStateType) => createOrder.duration
);

export const additionalDurationSelector = createSelector(
  createOrderSelector,
  (createOrder: ICreateOrderStateType) => createOrder.additionalDuration
);

export const dateSelector = createSelector(
  createOrderSelector,
  (createOrder: ICreateOrderStateType) => createOrder.date
);
