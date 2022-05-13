import * as yup from "yup";

export interface IFormData {
  phone: string;
  password: string;
  remember: boolean;
}

export const schema = yup
  .object({
    phone: yup.string().required(),
    password: yup.string().required(),
    remember: yup.boolean().oneOf([true]).required(),
  })
  .required();
