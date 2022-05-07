import { Fragment, useState } from "react";
import { useWindowSize } from "utils/hooks/useWindowSize";
import { typesOfWorkData, workImagesData } from "./data";
import {
  InputText,
  Label,
  RadioInput,
  TextImage,
  TypeOfWork,
  TypesOfWorkStyled,
  VerticalLine,
  WorkImage,
  Wrapper,
} from "./styles";

const TypesOfWork = () => {
  const [checkedIndex, setCheckedIndex] = useState<number>(0);
  const { width } = useWindowSize();
  const isMobile: boolean = Boolean(width && width <= 1400);

  const changeTypesOfWorkHandler = (event: any) => {
    setCheckedIndex(+event.currentTarget.id);
  };

  return (
    <TypesOfWorkStyled>
      <Wrapper>
        {typesOfWorkData.map(({ id, title }, index) => (
          <Fragment key={id}>
            <TypeOfWork key={id} $active={checkedIndex === index}>
              <RadioInput type="radio" id={id} name="types" />
              <Label htmlFor={id} id={id} onClick={changeTypesOfWorkHandler}>
                <VerticalLine />
                <InputText>{title}</InputText>
              </Label>
            </TypeOfWork>
            {isMobile && index === checkedIndex && (
              <WorkImage $imageIndex={checkedIndex}>
                <TextImage>{workImagesData[checkedIndex].text}</TextImage>
              </WorkImage>
            )}
          </Fragment>
        ))}
      </Wrapper>
      {!isMobile && (
        <WorkImage $imageIndex={checkedIndex}>
          <TextImage>{workImagesData[checkedIndex].text}</TextImage>
        </WorkImage>
      )}
    </TypesOfWorkStyled>
  );
};

export default TypesOfWork;
