import { CheckWhitePNG } from "assets";
import styled from "styled-components";
import { colors } from "styles";

export const CheckboxStyled = styled.input<{ $error?: string }>`
  cursor: pointer;

  &[type="checkbox"]:before {
    content: "";
    position: relative;
    top: -5px;
    left: -4px;
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid;
    border-color: ${colors.AUTUMN_2};
    border-radius: 4px;
    background-color: ${colors.DAY};
  }

  &[type="checkbox"]:checked:before {
    background-color: ${colors.AUTUMN_2};
    background-image: url(${CheckWhitePNG});
    background-repeat: no-repeat;
    background-position: center;
  }
`;
