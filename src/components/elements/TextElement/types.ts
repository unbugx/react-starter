import React from 'react';
import { Typography } from '@material-ui/core';

// types
import { IElementText } from 'components/elements/types';

export interface ITextElementProps extends React.ComponentProps<typeof Typography> {
  element: IElementText,
  component?: React.ElementType,
}
