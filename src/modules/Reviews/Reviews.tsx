import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Review } from "modules";
import { colors } from "styles";
import {
  ReviewsWrapper,
  ShowReviewButton,
  SliderReviewsStyled,
} from "./styles";
import { reviewsData } from "./data";
import { useWindowSize } from "utils/hooks/useWindowSize";
import { BUTTON_VARIANTS } from "components/Button/types";

const SliderReviews = () => {
  const [showAllReviews, setShowAllReviews] = useState<boolean>(false);
  const { width } = useWindowSize();
  const isMobile: boolean = Boolean(width && width <= 1100);

  const showAllReviewsHandler = () => {
    setShowAllReviews(!showAllReviews);
  };

  return (
    <>
      {!isMobile ? (
        <SliderReviewsStyled
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            renderBullet: (_index, className) => `<span
        class="${className}"
        style="width: 56px; height: 16px; border-radius: 4px; background-color: ${colors.AUTUMN_2};"></span>`,
          }}
        >
          {reviewsData.map(({ first, second }, index) => (
            <SwiperSlide key={index + first.name}>
              <ReviewsWrapper>
                <Review
                  name={first.name}
                  location={first.location}
                  title={first.title}
                  description={first.description}
                  avatar={first.avatar}
                />
                <Review
                  name={second.name}
                  location={second.location}
                  title={second.title}
                  description={second.description}
                  avatar={second.avatar}
                />
              </ReviewsWrapper>
            </SwiperSlide>
          ))}
        </SliderReviewsStyled>
      ) : (
        <>
          {!showAllReviews
            ? reviewsData.map(({ first, second }, index) => (
                <React.Fragment key={index + first.name}>
                  {index < 1 && (
                    <ReviewsWrapper>
                      <Review
                        name={first.name}
                        location={first.location}
                        title={first.title}
                        description={first.description}
                        avatar={first.avatar}
                      />
                      <Review
                        name={second.name}
                        location={second.location}
                        title={second.title}
                        description={second.description}
                        avatar={second.avatar}
                      />
                    </ReviewsWrapper>
                  )}
                </React.Fragment>
              ))
            : reviewsData.map(({ first, second }, index) => (
                <ReviewsWrapper key={index + first.name}>
                  <Review
                    name={first.name}
                    location={first.location}
                    title={first.title}
                    description={first.description}
                    avatar={first.avatar}
                  />
                  <Review
                    name={second.name}
                    location={second.location}
                    title={second.title}
                    description={second.description}
                    avatar={second.avatar}
                  />
                </ReviewsWrapper>
              ))}
          <ShowReviewButton
            onClick={showAllReviewsHandler}
            variant={BUTTON_VARIANTS.SECONDARY}
          >
            {showAllReviews ? "Скрыть" : "Показать все отзывы"}
          </ShowReviewButton>
        </>
      )}
    </>
  );
};

export default SliderReviews;
