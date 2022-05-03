import { ExampleModal } from "modules";

interface ModalTypesProps {
  EXAMPLE_MODAL: string;
}

export const MODAL_TYPES: ModalTypesProps = {
  EXAMPLE_MODAL: "EXAMPLE_MODAL",
};

export const MODALS_MAPPING = {
  [MODAL_TYPES.EXAMPLE_MODAL]: ExampleModal,
};

export type TModalType = string;

export interface IModalInfo {
  [key: string]: any;
}

export interface IModalSelectorData {
  modalInfo: {
    [key: string]: IModalInfo;
  };
  modalTypeArray: TModalType[];
}
