import { AttentionBlackSVG } from "assets";
import { AttentionStyled, Description, IconWrapper } from "./styles";

interface IProps {
  description: string;
}

const Attention = ({ description }: IProps) => {
  return (
    <AttentionStyled>
      <IconWrapper>
        <AttentionBlackSVG />
      </IconWrapper>
      <Description>{description}</Description>
    </AttentionStyled>
  );
};

export default Attention;
