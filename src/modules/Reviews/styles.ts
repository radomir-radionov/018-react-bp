import { Button } from "components";
import styled from "styled-components";
import { Swiper } from "swiper/react";

export const SliderReviewsStyled = styled(Swiper)`
  width: 100%;
  padding-bottom: 100px;
`;

export const ReviewsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1);
  gap: 50px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ShowReviewButton = styled(Button)`
  margin-top: 20px;
`;
