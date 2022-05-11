import axios from "axios";

export const postAddress = async (value: string) => {
  const { data } = await axios.post(
    `https://nominatim.openstreetmap.org/search?q=${value}&limit=5&format=json`
  );

  // const {
  //   data: { address },
  // } = await axios.get(
  //   `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${data[0].lat}&lon=${data[0].lon}`
  // );

  return { data };
};
