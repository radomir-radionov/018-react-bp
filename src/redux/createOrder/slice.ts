import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICustomFile } from "components/ImageUploader/types";
import { ICostOfWork } from "utils/getCostOfWork";

export interface ICreateOrderStateType {
  workTypes: string[];
  additionalWorkType: string;
  employeeType: string;
  additionalEmployees: string;
  numberOfEmployees: number;
  durationType: string;
  additionalDuration: string;
  numberOfDuration: number;
  dateType: string;
  startTime: Date;
  dateOrder: Date;
  descriptionOrder: string;
  orderFiles: ICustomFile[];
  cost: number;
  currency: string;
}

const initialState: ICreateOrderStateType = {
  workTypes: [],
  additionalWorkType: "",
  employeeType: "Один человек",
  numberOfEmployees: 1,
  additionalEmployees: "",
  durationType: "До 2 часов",
  additionalDuration: "",
  numberOfDuration: 2,
  dateType: "Сейчас",
  startTime: new Date(),
  dateOrder: new Date(),
  descriptionOrder: "",
  orderFiles: [],
  cost: 0,
  currency: "",
};

const createOrderSlice = createSlice({
  name: "CREATE_ORDER",
  initialState,
  reducers: {
    setWorkTypes: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction<string[]>
    ) => {
      state.workTypes = payload;
    },
    setAdditionalWorkType: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction<string>
    ) => {
      state.additionalWorkType = payload;
    },
    setEmployeeType: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction<string>
    ) => {
      state.employeeType = payload;
    },
    setNumberOfEmployees: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction<number>
    ) => {
      state.numberOfEmployees = payload;
    },
    setAdditionalEmployees: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction<string>
    ) => {
      state.additionalEmployees = payload;
    },
    setDurationType: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction<string>
    ) => {
      state.durationType = payload;
    },
    setAdditionalDuration: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction<string>
    ) => {
      state.additionalDuration = payload;
    },
    setNumberOfDuration: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction<number>
    ) => {
      state.numberOfDuration = payload;
    },
    setDateType: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction<string>
    ) => {
      state.dateType = payload;
    },
    setStartTime: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction<Date>
    ) => {
      state.startTime = payload;
    },
    setDateOrder: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction<Date>
    ) => {
      state.dateOrder = payload;
    },
    setDescriptionOrder: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction<string>
    ) => {
      state.descriptionOrder = payload;
    },
    setOrderFiles: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction<ICustomFile[]>
    ) => {
      state.orderFiles = payload;
    },
    setCostOfWork: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction<ICostOfWork>
    ) => {
      state.cost = payload.cost;
      state.currency = payload.currency;
    },
    createOrderRequest: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction
    ) => {},
  },
});

export const createOrderActions = createOrderSlice.actions;

export default createOrderSlice.reducer;
