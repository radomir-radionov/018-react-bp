import { Question } from "modules";
import { questionsAndAnswersData } from "./data";
import { Title, QuestionsAndAnswersStyled, QuestionsWrapper } from "./styles";

const QuestionsAndAnswers = () => {
  return (
    <QuestionsAndAnswersStyled>
      <Title>Вопросы и ответы</Title>
      <QuestionsWrapper>
        {questionsAndAnswersData.map(({ question, answer }, index) => (
          <Question
            key={index + Date.now()}
            question={question}
            answer={answer}
          />
        ))}
      </QuestionsWrapper>
    </QuestionsAndAnswersStyled>
  );
};

export default QuestionsAndAnswers;
