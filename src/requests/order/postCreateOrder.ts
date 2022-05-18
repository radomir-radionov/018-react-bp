import { ICreateOrderDataNormalized } from "redux/createOrder/normalizer";
import { axiosPrivate } from "../interceptors";

export const postCreateOrder = async (body: ICreateOrderDataNormalized) => {
  const data = await axiosPrivate.post(`/order`, { data: body });

  console.log("CreateOrder result", data);

  // return data;
};
