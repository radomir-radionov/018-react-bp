import axios from "axios";

export const postAddress = async (value: string) => {
  const { data } = await axios.post(
    `https://nominatim.openstreetmap.org/search?q=${value}&limit=5&format=json`
  );

  return { data };
};
