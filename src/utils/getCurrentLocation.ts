// default: Belarus coords
export const DEFAULT_COORDS: [number, number] = [53.893009, 27.567444];

export const getCurrentLocation = (): [number, number] => {
  if ("geolocation" in navigator) {
    /* geolocation is available */

    navigator.geolocation.getCurrentPosition(({ coords }) => {
      return [coords.latitude, coords.longitude];
    });
  }

  /* geolocation IS NOT available */
  return DEFAULT_COORDS;
};
