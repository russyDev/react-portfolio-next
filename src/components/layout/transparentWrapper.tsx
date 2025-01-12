"use client"
import React, { FC, ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';

type Props = {
  children: ReactNode;
  move?: boolean;
};
export const TransparentWrapper: FC<Props> = ({ children, move }) => {
  const [init, setInit] = useState(!move);

  useEffect(() => {
    setTimeout(() => {
      setInit(true);
    }, 0);
  }, []);

  return (
    <div
      className={classNames('content', {
        'content-visible': init,
        'content-hidden': !init,
      })}
    >
      {children}
    </div>
  );
};
