import { ICustomFile } from "components/ImageUploader/types";

export const defineDisabled = (files: ICustomFile[]): boolean => {
  const bytes: number = 5242880; // 5MB
  const summ: number = files.reduce((acc, cur) => acc + cur.size, 0);

  return bytes < summ;
};
