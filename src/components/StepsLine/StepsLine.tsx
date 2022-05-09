import { StepLine, StepsLineStyled } from "./styles";

interface IProps {
  maxSteps?: number;
  step: number;
}

const StepsLine = ({ maxSteps = 5, step }: IProps) => {
  return (
    <StepsLineStyled>
      <StepLine
        $maxSteps={maxSteps}
        $step={step}
        $content={`Шаг ${step}`}
      ></StepLine>
    </StepsLineStyled>
  );
};

export default StepsLine;
