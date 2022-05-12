import * as yup from "yup";

export interface IFormData {
  name: string;
  phone: string;
  password: string;
  remember: boolean;
  agreement: boolean;
}

export const schema = yup
  .object({
    name: yup
      .string()
      .required("*Имя - обязательное поле")
      .matches(/^[а-яё]+|[a-z]+$/, "*Только буквы"),
    phone: yup.string().required(),
    password: yup.string().required(),
    remember: yup.boolean().oneOf([true]).required(),
    agreement: yup.boolean().oneOf([true]).required(),
  })
  .required();
