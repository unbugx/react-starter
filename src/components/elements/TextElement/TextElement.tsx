import React, { FC } from 'react';
import { Typography } from '@material-ui/core';

// types
import { ITextElementProps } from './types';

export const TextElement: FC<ITextElementProps> = ({
  element: {
    value,
  },
  ...typographyProps
}) => (
  <Typography {...typographyProps}>
    {value.content}
  </Typography>
);
