"use client"
import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import './slideMenu.css';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right';
  children: React.ReactNode;
  width?: number;
};

export const SlideMenu: React.FC<Props> = ({
  isOpen,
  onClose,
  children,
  position = 'left',
  width = 400,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      const timeoutId = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Check if the click happened inside any element with .skip-outside
      const skipOutsideElements = document.querySelectorAll('.skip-outside');
      const isClickInsideSkipOutside = Array.from(skipOutsideElements).some((el) =>
        el.contains(target),
      );

      if (menuRef.current && !menuRef.current.contains(target) && !isClickInsideSkipOutside) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      const timeoutId = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timeoutId);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className={classNames('slide-menu__wrapper', { open: shouldRender })}>
      <div
        className={classNames('slide-menu', {
          open: isOpen,
          leftSide: position === 'left',
          rightSide: position === 'right',
        })}
        style={{ width: `${width}px`, right: `-${width}px` }}
        ref={menuRef}
      >
        {shouldRender && <div className="slide-menu__content h-full">{children}</div>}
      </div>
    </div>
  );
};
