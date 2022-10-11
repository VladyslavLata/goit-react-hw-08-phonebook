import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import * as SC from './Modal.styled';

const modalEl = document.getElementById('modal');

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const closeModalPressEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('onClick', closeModalPressEsc);
    return () => window.removeEventListener('onClick', closeModalPressEsc);
  }, [onClose]);

  const closeModalClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <SC.Backdrop onClick={closeModalClickBackdrop}>
      <SC.ModalWrap>{children}</SC.ModalWrap>
    </SC.Backdrop>,
    modalEl
  );
};
