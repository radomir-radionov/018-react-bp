import styled from "styled-components";
import { colors, typography } from "styles";

export const ChooseWorkStepStyled = styled.div`
  padding-top: 48px;
`;

export const Title = styled.p`
  margin-bottom: 24px;
  ${typography.H2};
`;

export const Description = styled.p`
  margin-bottom: 20px;
  ${typography.BODY2};
`;

export const StepsLineWrapper = styled.div`
  padding-top: 68px;
`;

export const WhatText = styled.p`
  margin: 48px 0 32px;
  ${typography.H4};
`;

export const CheckboxesWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;

  & > div {
    margin-right: 20px;
  }

  @media (max-width: 1150px) {
    flex-wrap: wrap;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  margin-top: 64px;

  & button:first-of-type {
    margin-right: 48px;
  }
`;

export const Remark = styled.p`
  ${typography.BODY2};

  @media (max-width: 1250px) {
    display: none;
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const ErrorMessage = styled.p`
  margin-left: 8px;
  ${typography.BODY2};
  color: ${colors.AUTUMN_1};
`;
