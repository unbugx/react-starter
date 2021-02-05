import React, { FC } from 'react';
import cx from 'classnames';
import { Container as MuiContainer } from '@material-ui/core';

// types
import { IContainerProps } from './types';

// hooks
import { useStyles } from './hooks';

export const Container: FC<IContainerProps> = ({
  children,
  className,
  padding,
}) => {
  const classes = useStyles();

  return (
    <MuiContainer maxWidth={false} className={cx(className, { [classes.padding]: padding })}>
      <>
        {children}
      </>
    </MuiContainer>
  );
};
