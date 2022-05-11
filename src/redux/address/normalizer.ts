export interface IAddressNormalized {
  address: string;
  lat: number;
  lon: number;
}

export const addressNormalizer = (data: any): IAddressNormalized[] => {
  const newData = data.map((item: any) => {
    return {
      address: item.display_name,
      lat: item.lat,
      lon: item.lon,
    };
  });

  return newData;
};
