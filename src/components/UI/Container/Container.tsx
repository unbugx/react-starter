import React, { FC } from 'react';
import { Container as MuiContainer } from '@material-ui/core';

// types
import { IContainerProps } from './types';

// hooks
import { useStyles } from './hooks';

export const Container: FC<IContainerProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <MuiContainer
      maxWidth={false}
      classes={{
        root: classes.root,
      }}
    >
      <>
        {children}
      </>
    </MuiContainer>
  );
};
