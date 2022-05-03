import { Button } from "components";
import { MODAL_TYPES } from "modules/Modal/modalTypes";
import { modalActionTypes } from "redux/modal";
import { useDispatch } from "react-redux";

const Modals = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(
      modalActionTypes.openModal({ modalType: MODAL_TYPES.EXAMPLE_MODAL })
    );
  };

  return (
    <>
      <Button onClick={onClickHandler}>Open Modal</Button>
    </>
  );
};

export default Modals;
