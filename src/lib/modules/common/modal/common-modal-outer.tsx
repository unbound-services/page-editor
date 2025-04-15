import React, { PropsWithChildren } from "react";
import "./common-modal-outer.scss";

type ModalComponent = {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

type ICommonModalOuter = PropsWithChildren<ModalComponent>

export const CommonModalOuter
  = ({children, modalOpen, setModalOpen}: ICommonModalOuter) => {
  
  console.log({modalOpen});

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  
  return <>{modalOpen
    ? (
      <div onClick={() => setModalOpen(false)} className="common-modal__outer">
        <div onClick={stopPropagation} className="common-modal__inner">
          {children}
        </div>
      </div>
    )
    : <></>
    }</>
};

