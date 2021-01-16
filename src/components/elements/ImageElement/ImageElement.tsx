import React, { FC } from 'react';

// types
import { IImageElementProps } from './types';
import { CardMedia } from '@material-ui/core';

export const ImageElement: FC<IImageElementProps> = ({
  element: {
    value,
  },
  ...cardMediaProps
}) => (
  <CardMedia image={value.url} {...cardMediaProps} />
);
