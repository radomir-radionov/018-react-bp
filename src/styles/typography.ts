import { css } from "styled-components";

const H1 = css`
  font-weight: 600;
  font-size: 52px;
  line-height: 56px;
`;

const H2 = css`
  font-weight: 600;
  font-size: 44px;
  line-height: 50px;
`;

const H3 = css`
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
`;

const H4 = css`
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
`;

const BODY1 = css`
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
`;

const BODY2 = css`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

const BODY3 = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const BODY_MOBILE = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;

const LINK = css`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-decoration-line: underline;
`;

const BUTTON = css`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;

const typography = {
  FONT_FAMILY_MONTSERRAT: "Montserrat, Sans-Serif",
  H1,
  H2,
  H3,
  H4,
  BODY1,
  BODY2,
  BODY3,
  BODY_MOBILE,
  LINK,
  BUTTON,
};

export default typography;
