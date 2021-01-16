import React from 'react';
import { CardMedia } from '@material-ui/core';

// types
import { IElementImage } from 'components/elements/types';

export interface IImageElementProps extends React.ComponentProps<typeof CardMedia> {
  element: IElementImage,
}
