import { CloseSVG } from "assets";
import styled from "styled-components";
import { colors, typography } from "styles";

export const QuestionStyled = styled.div<{ $isOpen: boolean }>`
  margin-bottom: 16px;
  padding-bottom: ${({ $isOpen }) => ($isOpen ? "32px" : "0")};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const QuestionTitle = styled.p`
  ${typography.H4};
  color: ${colors.AUTUMN_2};
  cursor: pointer;
  transition-duration: 0.3s;

  &:hover {
    color: ${colors.AUTUMN_1};
  }

  @media (max-width: 970px) {
    & {
      ${typography.BODY2};
      font-weight: bold;
    }
  }
`;

export const Answer = styled.p`
  max-width: 572px;
  ${typography.BODY2};
`;

export const CloseIcon = styled(CloseSVG)<{ $isOpen: boolean }>`
  cursor: pointer;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(0deg)" : "rotate(45deg)")};
  transition-duration: 0.3s;

  & path {
    fill: ${colors.AUTUMN_2};
  }

  &:hover {
    path {
      fill: ${colors.AUTUMN_1};
    }
  }

  @media (max-width: 970px) {
    width: 23px;
    height: 23px;
  }
`;
