import React, { FC } from 'react';
import { Button } from '@material-ui/core';

// types
import { IButtonElementProps } from './types';

export const ButtonElement: FC<IButtonElementProps> = ({
  element: {
    value,
  },
  ...buttonProps
}) => (
  // TODO add rel="noopener noreferrer" for external href
  <Button {...buttonProps} href={value.url}>
    {value.content}
  </Button>
);
