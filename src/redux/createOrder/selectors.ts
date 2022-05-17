import { createSelector } from "@reduxjs/toolkit";
import { ICreateOrderStateType } from "./slice";

const createOrderSelector = (state: any) => state.createOrder;

export const createOrderStateSelector = createSelector(
  createOrderSelector,
  (createOrder: ICreateOrderStateType) => createOrder
);

export const workTypesSelector = createSelector(
  createOrderSelector,
  (createOrder: ICreateOrderStateType) => createOrder.workTypes
);

export const additionalWorkTypesSelector = createSelector(
  createOrderSelector,
  (createOrder: ICreateOrderStateType) => createOrder.additionalWorkType
);

export const employeeTypeSelector = createSelector(
  createOrderSelector,
  (createOrder: ICreateOrderStateType) => createOrder.employeeType
);

export const numberOfEmployeesSelector = createSelector(
  createOrderSelector,
  (createOrder: ICreateOrderStateType) => createOrder.numberOfEmployees
);

export const additionalEmployeesSelector = createSelector(
  createOrderSelector,
  (createOrder: ICreateOrderStateType) => createOrder.additionalEmployees
);

export const durationTypeSelector = createSelector(
  createOrderSelector,
  (createOrder: ICreateOrderStateType) => createOrder.durationType
);

export const additionalDurationSelector = createSelector(
  createOrderSelector,
  (createOrder: ICreateOrderStateType) => createOrder.additionalDuration
);

export const dateTypeSelector = createSelector(
  createOrderSelector,
  (createOrder: ICreateOrderStateType) => createOrder.dateType
);

export const startTimeSelector = createSelector(
  createOrderSelector,
  (createOrder: ICreateOrderStateType) => createOrder.startTime
);

export const dateOrderSelector = createSelector(
  createOrderSelector,
  (createOrder: ICreateOrderStateType) => createOrder.dateOrder
);

export const descriptionOrderSelector = createSelector(
  createOrderSelector,
  (createOrder: ICreateOrderStateType) => createOrder.descriptionOrder
);

export const orderFilesSelector = createSelector(
  createOrderSelector,
  (createOrder: ICreateOrderStateType) => createOrder.orderFiles
);
