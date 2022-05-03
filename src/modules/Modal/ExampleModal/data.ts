import * as yup from "yup";

export interface IFormInputs {
  login: string;
}

export const exampleSchema = yup
  .object({
    login: yup.string().required(),
  })
  .required();
