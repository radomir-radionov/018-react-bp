export interface ICostOfWork {
  cost: number;
  currency: "BYN" | "PLN";
}

export const getCostOfWork = (
  numberOfEmployees: number,
  additionalEmployees: string,
  numberOfDuration: number,
  additionalDuration: string,
  currency = "BYN"
): ICostOfWork => {
  const employees: number = additionalEmployees
    ? +additionalEmployees
    : numberOfEmployees;
  const duration: number = additionalDuration
    ? +additionalDuration
    : numberOfDuration;
  const workingHours: number = employees * duration;

  switch (currency) {
    case "BYN": {
      return { cost: workingHours * 10, currency };
    }
    case "PLN": {
      return { cost: workingHours * 5, currency };
    }
    default:
      return { cost: 0, currency: "BYN" };
  }
};
