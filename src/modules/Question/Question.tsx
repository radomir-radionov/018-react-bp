import { useState } from "react";
import {
  Answer,
  CloseIcon,
  Header,
  QuestionStyled,
  QuestionTitle,
} from "./styles";

interface IProps {
  question: string;
  answer: string;
}

const Question = ({ question, answer }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <QuestionStyled $isOpen={isOpen}>
      <Header>
        <QuestionTitle onClick={toggleHandler}>{question}</QuestionTitle>
        <CloseIcon onClick={toggleHandler} $isOpen={isOpen} />
      </Header>
      {isOpen && <Answer>{answer}</Answer>}
    </QuestionStyled>
  );
};

export default Question;
