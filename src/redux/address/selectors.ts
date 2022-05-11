import { createSelector } from "@reduxjs/toolkit";
import { IInitState } from "./slice";

const addressSelector = (state: any) => state.address;

export const foundAddressesSelector = createSelector(
  addressSelector,
  (address: IInitState) => address.foundAddresses
);

export const choosedAddressSelector = createSelector(
  addressSelector,
  (address: IInitState) => address.address
);
