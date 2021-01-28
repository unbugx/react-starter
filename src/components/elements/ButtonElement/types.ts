import React from 'react';
import { Button } from '@material-ui/core';

// types
import { IElementButton } from 'components/elements/types';

export interface IButtonElementProps extends React.ComponentProps<typeof Button> {
  element: IElementButton,
  color: 'primary' | 'secondary',
}
