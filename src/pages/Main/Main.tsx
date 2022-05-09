import { SAI_background_1, SAI_background_2 } from "assets";
import pageRoutes from "constants/pageRoutes";
import {
  Footer,
  HandWorkerContainer,
  Header,
  HowWeAreWorkingCards,
  HowWeSearchCards,
  QuestionsAndAnswers,
  Reviews,
  SubmitApplicationInfo,
  TypesOfWork,
  WorkAdvantagesCards,
} from "modules";
import { useNavigate } from "react-router-dom";
import { colors } from "styles";
import {
  MainStyled,
  ReviewsWrapper,
  ReviewsTitle,
  TypesOfWorkWrapper,
  TypesOfWorkTitle,
} from "./styles";

const Main = () => {
  const navigate = useNavigate();

  const goToCreateOrder = () => {
    navigate(pageRoutes.CREATE_ORDER_CHOOSE_WORK);
  };

  return (
    <MainStyled>
      <Header />
      <HandWorkerContainer />
      <TypesOfWorkWrapper>
        <TypesOfWorkTitle>Виды погрузочных услуг</TypesOfWorkTitle>
        <TypesOfWork />
      </TypesOfWorkWrapper>
      <HowWeAreWorkingCards />
      <WorkAdvantagesCards />
      <SubmitApplicationInfo
        title="Вам нужна помощь грузчиков? Оставьте заявку!"
        description="Расскажите какую работу нужно выполнить, и мы уже через 15 минут найдем для вас грузчиков, которые сами с вами свяжутся"
        bgImage={SAI_background_1}
        buttonText="Оставить заявку"
        textColor={colors.DAY}
        onClick={goToCreateOrder}
      />
      <HowWeSearchCards />
      <ReviewsWrapper>
        <ReviewsTitle>Истории клиентов</ReviewsTitle>
        <Reviews />
      </ReviewsWrapper>
      <SubmitApplicationInfo
        title="Оставьте заявку, чтобы найти грузчика"
        description="Команда профессионалов выполнит любую вашу задачу.  Быстро, качественно, выгодно"
        bgImage={SAI_background_2}
        buttonText="Оставить заявку"
        textColor={colors.NIGHT_1}
        onClick={goToCreateOrder}
      />
      <QuestionsAndAnswers />
      <Footer />
    </MainStyled>
  );
};

export default Main;
