import {
  CreateOrder_1,
  CreateOrder_2,
  CreateOrder_3,
  CreateOrder_4,
} from "assets";

export const defineDisabled = (
  isAdditionalInputChoosed: boolean,
  value: string,
  workTypes: string[]
): boolean => {
  if (
    (isAdditionalInputChoosed && value.length >= 3) ||
    (!isAdditionalInputChoosed && workTypes.length !== 0)
  ) {
    return false;
  }

  return true;
};

export const checkboxesData = [
  {
    title: "Перенести груз",
    image: CreateOrder_1,
    insertInput: false,
  },
  {
    title: "Перевезти вещи*",
    image: CreateOrder_2,
    insertInput: false,
  },
  {
    title: "Убрать мусор",
    image: CreateOrder_3,
    insertInput: false,
  },
  {
    title: "Другая работа",
    image: CreateOrder_4,
    insertInput: true,
  },
];
