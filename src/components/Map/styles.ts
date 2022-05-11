import { MapContainer } from "react-leaflet";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  max-width: 870px;
`;

export const MapContainerStyled = styled(MapContainer)`
  max-width: 870px;
  height: 450px;
`;
