import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAddressNormalized } from "./normalizer";

export interface IInitState {
  foundAddresses: IAddressNormalized[];
  address: string;
  lat: number;
  lon: number;
}

const initialState: IInitState = {
  foundAddresses: [],
  address: "",
  lat: 0,
  lon: 0,
};

const addressSlice = createSlice({
  name: "ADDRESS",
  initialState,
  reducers: {
    getAddressRequest: (
      state: IInitState,
      { payload }: PayloadAction<{ value: string }>
    ) => {},
    setAddresses: (
      state: IInitState,
      { payload }: PayloadAction<{ data: IAddressNormalized[] }>
    ) => {
      state.foundAddresses = payload.data;
    },
    setAddress: (
      state: IInitState,
      { payload }: PayloadAction<IAddressNormalized>
    ) => {
      state.address = payload.address;
      state.lat = payload.lat;
      state.lon = payload.lon;
      state.foundAddresses = [];
    },
    resetAddress: () => initialState,
  },
});

export const addressActions = addressSlice.actions;

export default addressSlice.reducer;
