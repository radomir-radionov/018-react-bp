import { Header } from "modules";
import Buttons from "./Buttons";
import Inputs from "./Inputs";
import Headers from "./Headers";
import Modals from "./Modals";
import { Header1, PresentationStyled } from "./styles";

const Presentation = () => {
  return (
    <PresentationStyled>
      <Header />
      <Header1>Presentation Page</Header1>
      <Headers />
      <Buttons />
      <Inputs />
      <br />
      <Modals />
    </PresentationStyled>
  );
};

export default Presentation;
