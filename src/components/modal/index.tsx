"use client"
import React, { FC, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '../icons';

type Props = {
  open: boolean;
  children: React.ReactNode;
  onClose?: () => void;
  title?: string;
};

export const Modal: FC<Props> = ({ open, children, onClose, title }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (modalRef.current && !modalRef.current.contains(target) && onClose) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose]);

  const onCloseHandler = () => {
    if (onClose) {
      onClose();
    }
  };

  if (!open) {
    return null;
  }

  return (
    <>
      {createPortal(
        <div className="fixed z-1 top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center">
          <div
            className="modal bg-white w-full max-w-4xl max-h-[90%] rounded overflow-auto px-4"
            ref={modalRef}
          >
            <div className="modal-header px-5 flex justify-between bg-white sticky top-0 py-4">
              <span className="modal-title text-primaryDark text-base font-semibold">{title}</span>
              <span className="close" onClick={onClose}>
                <CloseIcon className="cursor-pointer fill-primaryDark" onClick={onCloseHandler} />
              </span>
            </div>
            <div className="modal-body py-2 px-5">{children}</div>
          </div>
        </div>,
        document.getElementById('portal-root') as HTMLElement,
      )}
    </>
  );
};
