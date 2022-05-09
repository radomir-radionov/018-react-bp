import { CheckOrangeSVG } from "assets";
import styled from "styled-components";
import { colors, typography } from "styles";

export const Wrapper = styled.div`
  position: relative;
  width: 240px;
  height: 48px;
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 10;

  &[type="checkbox"]:checked ~ div {
    border: 1px solid ${colors.AUTUMN_2};
    background-color: ${colors.AUTUMN_4};
  }

  &[type="checkbox"]:checked ~ div svg {
    display: block;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid ${colors.NIGHT_2};
  border-radius: 8px;
  background-color: ${colors.DAY};
`;

export const CheckOrangeIcon = styled(CheckOrangeSVG)`
  display: none;
  position: absolute;
  top: 7px;
  left: 10px;
`;

export const Text = styled.p`
  ${typography.BODY2};
`;

export const AdditionalInput = styled.input`
  width: 100%;
  padding: 18px 8px;
  outline: none;
  margin-top: 8px;
  border: 1px solid ${colors.AUTUMN_2};
  border-radius: 8px;
  transition-duration: 0.3s;
`;
