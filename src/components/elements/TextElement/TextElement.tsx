import React, { FC } from 'react';
import { Typography } from '@material-ui/core';

// types
import { ITextElementProps } from './types';

export const TextElement: FC<ITextElementProps> = ({
  element: {
    value,
    ui,
  },
  ...typographyProps
}) => (
  <Typography {...typographyProps} align={ui.align || 'left'}>
    {value.content}
  </Typography>
);
