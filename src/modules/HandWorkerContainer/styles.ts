import styled from "styled-components";
import { MainBannerHandWorker_BG, MainBannerPoligon_BG } from "assets";
import { colors, typography } from "styles";
import { Button } from "components";

export const HandWorkerContainerStyled = styled.div`
  padding: 120px;
  background: url(${MainBannerPoligon_BG}) top left no-repeat,
    url(${MainBannerHandWorker_BG}) center right no-repeat;
  background-size: 56% 100%, 60%;

  @media (max-width: 1950px) {
    background-size: 56% 100%, 70%;
  }

  @media (max-width: 1700px) {
    background-size: 56% 100%, 90%;
  }

  @media (max-width: 1550px) {
    padding: 0;
    background-image: url(${MainBannerHandWorker_BG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const Information = styled.div`
  width: 50%;

  @media (max-width: 1550px) {
    width: 100%;
    margin-top: 500px;
    padding: 48px;
    background-color: ${colors.NIGHT_1};
  }

  @media (max-width: 600px) {
    margin-top: 342px;
    padding: 48px 16px;
    background-color: ${colors.NIGHT_1};
  }
`;

export const Title = styled.p`
  margin-bottom: 48px;
  ${typography.H1};
  color: ${colors.DAY};

  @media (max-width: 600px) {
    ${typography.H4};
  }
`;

export const Description = styled.p`
  max-width: 596px;
  margin-bottom: 48px;
  ${typography.BODY2};
  color: ${colors.DAY};
`;

export const ApplicationInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 596px;
  padding: 8px 8px 8px 24px;
  border: 1px solid ${colors.DAY};
  border-radius: 16px;
`;

export const ApplicationDescription = styled.p`
  ${typography.BODY2};
  color: ${colors.NIGHT_4};
`;

export const MobileButton = styled(Button)`
  width: 100%;
`;
