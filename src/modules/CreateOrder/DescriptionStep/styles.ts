import styled from "styled-components";
import { typography } from "styles";

export const DescriptionStepStyled = styled.div`
  padding-top: 16px;
`;

export const StepsLineWrapper = styled.div`
  padding-top: 68px;
`;

export const WhatText = styled.p`
  margin: 48px 0 32px;
  ${typography.H4};
`;

export const Description = styled.p`
  margin-bottom: 32px;
  max-width: 730px;
  ${typography.BODY2};
`;

export const UploaderWrapper = styled.div`
  width: 730px;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  margin: 64px 0;

  & button:first-of-type {
    margin-right: 48px;
  }
`;
