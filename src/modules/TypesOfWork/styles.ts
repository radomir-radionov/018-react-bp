import styled from "styled-components";
import { colors, typography } from "styles";
import { workImagesData } from "./data";

export const TypesOfWorkStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 376px;

  & > div {
    margin-bottom: 20px;
  }

  & > div:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 1400px) {
    width: 100%;
  }
`;

export const TypeOfWork = styled.div<{ $active: boolean }>`
  & span {
    color: ${({ $active }) => ($active ? colors.AUTUMN_2 : colors.NIGHT_1)};
  }

  & div {
    background-color: ${({ $active }) =>
      $active ? colors.AUTUMN_2 : colors.NIGHT_4};
  }
`;

export const RadioInput = styled.input`
  display: none;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const InputText = styled.span`
  margin-left: 16px;
  ${typography.H4};
`;

export const VerticalLine = styled.div`
  width: 16px;
  height: 56px;
  border-radius: 4px;
`;

export const WorkImage = styled.div<{ $imageIndex: number }>`
  width: 80%;
  max-width: 1100px;
  padding: 270px 16px 16px;
  border-radius: 8px;
  background-image: ${({ $imageIndex }) =>
    `url(${workImagesData[$imageIndex].image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 1800px) {
    width: 60%;
  }

  @media (max-width: 1400px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const TextImage = styled.p`
  width: fit-content;
  margin: 0 auto;
  padding: 12px 24px;
  border-radius: 4px;
  background-color: ${colors.DAY};
  ${typography.BODY2};
  color: ${colors.NIGHT_1};
`;
