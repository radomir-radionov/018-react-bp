import {
  CreateOrder_2_1,
  CreateOrder_2_2,
  CreateOrder_2_3,
  CreateOrder_2_4,
} from "assets";

export const defineDisabled = (
  isFirstInputChoosed: boolean,
  value: string,
  isSecondInputChoosed: boolean,
  secondValue: string
): boolean => {
  let disabled: boolean = false;

  if (isFirstInputChoosed && value.length === 0) {
    disabled = true;
  }

  if (isSecondInputChoosed && secondValue.length === 0) {
    disabled = true;
  }

  return disabled;
};

export const cardsData = [
  {
    title: "Один человек",
    image: CreateOrder_2_1,
    insertInput: false,
  },
  {
    title: "Два человека",
    image: CreateOrder_2_2,
    insertInput: false,
  },
  {
    title: "Три человека",
    image: CreateOrder_2_3,
    insertInput: false,
  },
  {
    title: "Другое количество",
    image: CreateOrder_2_4,
    insertInput: true,
  },
];

export const smallCardsData = [
  {
    title: "До 2 часов",
    insertInput: false,
  },
  {
    title: "3 часа",
    insertInput: false,
  },
  {
    title: "4 часа",
    insertInput: false,
  },
  {
    title: "Другое время",
    insertInput: true,
  },
];
