import * as yup from "yup";

export interface IFormData {
  phone: string;
}

export const schema = yup
  .object({
    phone: yup.string().required(),
  })
  .required();
