import * as yup from "yup";

export interface IFormData {
  password: string;
  confirmPassword: string;
}

export const schema = yup
  .object({
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords does not match"),
  })
  .required();
