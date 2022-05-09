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

export const smallCardsData = [
  {
    title: "Сейчас",
    insertInput: false,
  },
  {
    title: "Сегодня",
    insertInput: false,
  },
  {
    title: "Завтра",
    insertInput: false,
  },
  {
    title: "Другая дата",
    insertInput: true,
  },
];
