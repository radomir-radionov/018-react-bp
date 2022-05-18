import axios from "axios";

export const getAddressInfo = async (lat: string, lon: string) => {
  const {
    data: { address },
  } = await axios.get(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
  );

  return { addressInfo: address };
};
