import { ICustomFile } from "components/ImageUploader/types";
import { ICreateOrderStateType } from "./slice";

export interface ICreateOrderDataNormalized {
  address: string;
  city: string;
  longitude: number;
  latitude: number;
  types_of_work: string[];
  number_employees: number;
  desired_time_end_work: string;
  start_time: Date;
  price: number;
  description: string;
  files: ICustomFile[];
  work_sphere: number[];
}

export const createOrderDataNormalizer = (
  createOrderState: ICreateOrderStateType,
  address: string,
  city: string,
  lat: number,
  lon: number
): ICreateOrderDataNormalized => {
  const {
    workTypes,
    additionalWorkType,
    numberOfEmployees,
    additionalEmployees,
    numberOfDuration,
    additionalDuration,
    dateOrder,
    startTime,
    descriptionOrder,
    orderFiles,
    cost,
  } = createOrderState;
  const typesOfWork: string[] = [...workTypes, additionalWorkType];
  const employees: number = additionalEmployees
    ? +additionalEmployees
    : numberOfEmployees;
  const duration: number = additionalDuration
    ? +additionalDuration
    : numberOfDuration;

  return {
    address,
    city,
    longitude: lon,
    latitude: lat,
    types_of_work: typesOfWork,
    number_employees: employees,
    desired_time_end_work: `${duration}`,
    start_time: startTime || dateOrder,
    price: cost,
    description: descriptionOrder,
    files: orderFiles,
    work_sphere: [0],
  };
};
