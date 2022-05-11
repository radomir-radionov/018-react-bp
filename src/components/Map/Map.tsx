import { useEffect, useState } from "react";
import { Marker, TileLayer } from "react-leaflet";
import { DEFAULT_COORDS, getCurrentLocation } from "utils/getCurrentLocation";
import { MapContainerStyled, Wrapper } from "./styles";
import SearchContainer from "./SearchContainer/SearchContainer";

const Map = () => {
  const [position, setPosition] = useState<[number, number]>(DEFAULT_COORDS);

  useEffect(() => {
    const coords: [number, number] = getCurrentLocation();
    setPosition(coords);
  }, []);

  return (
    <Wrapper>
      <MapContainerStyled center={position} zoom={13} scrollWheelZoom={false}>
        <SearchContainer setPosition={setPosition} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}></Marker>
      </MapContainerStyled>
    </Wrapper>
  );
};

export default Map;
