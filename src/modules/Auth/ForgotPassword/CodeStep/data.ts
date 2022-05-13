import * as yup from "yup";

export interface IFormData {
  code: string;
}

export const schema = yup
  .object({
    code: yup.string().required(),
  })
  .required();
