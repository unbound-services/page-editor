import React, { ReactNode } from 'react';
import { CommonModalOuter } from '../common/modal/common-modal-outer';

export const useModal = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return {
    modalOpen,
    setModalOpen,
    ModalOuterComponent: CommonModalOuter,
  };
}
