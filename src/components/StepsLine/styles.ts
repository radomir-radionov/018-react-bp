import styled from "styled-components";
import { colors, typography } from "styles";

export const StepsLineStyled = styled.div`
  position: relative;
  max-width: 870px;
  height: 16px;
  border-radius: 8px;
  background-color: ${colors.AUTUMN_4};
`;

export const StepLine = styled.div<{
  $maxSteps: number;
  $step: number;
  $content: string;
}>`
  position: absolute;
  width: ${({ $maxSteps, $step }) => `${(100 / $maxSteps) * $step}%`};
  height: 16px;
  border-radius: 8px;
  background-color: ${colors.AUTUMN_2};

  &:before {
    content: "${({ $content }) => $content}";
    position: absolute;
    right: 15px;
    bottom: 25px;
    ${typography.BODY1};
  }
`;
