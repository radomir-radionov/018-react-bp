import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICreateOrderStateType {
  workTypes: string[];
  additionalWorkType: string;
  employee: string;
  additionalEmployee: string;
  duration: string;
  additionalDuration: string;
  date: string;
}

const initialState: ICreateOrderStateType = {
  workTypes: [],
  additionalWorkType: "",
  employee: "Один человек",
  additionalEmployee: "",
  duration: "До 2 часов",
  additionalDuration: "",
  date: "Сейчас",
};

const createOrderSlice = createSlice({
  name: "CREATE_ORDER",
  initialState,
  reducers: {
    setWorkTypes: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction<{ workTypes: string[] }>
    ) => {
      state.workTypes = payload.workTypes;
    },
    setAdditionalWorkType: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction<{ workType: string }>
    ) => {
      state.additionalWorkType = payload.workType;
    },
    setEmployee: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction<{ employee: string }>
    ) => {
      state.employee = payload.employee;
    },
    setAdditionalEmployee: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction<{ employee: string }>
    ) => {
      state.additionalEmployee = payload.employee;
    },
    setDuration: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction<{ duration: string }>
    ) => {
      state.duration = payload.duration;
    },
    setAdditionalDuration: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction<{ duration: string }>
    ) => {
      state.additionalDuration = payload.duration;
    },
    setDate: (
      state: ICreateOrderStateType,
      { payload }: PayloadAction<{ date: string }>
    ) => {
      state.date = payload.date;
    },
  },
});

export const createOrderActions = createOrderSlice.actions;

export default createOrderSlice.reducer;
