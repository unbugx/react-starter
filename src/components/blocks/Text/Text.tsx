import React, { FC } from 'react';
import { Card, CardContent, CardActions } from '@material-ui/core';

// types
import { ITextProps } from './types';

// hooks
import { useStyles } from './hooks';

// components
import { TextElement } from 'components/elements/TextElement/TextElement';
import { ButtonElement } from 'components/elements/ButtonElement/ButtonElement';
import { ImageElement } from 'components/elements/ImageElement/ImageElement';

export const Text: FC<ITextProps> = ({
  elements,
}) => {
  const classes = useStyles();
  const { image, title, text, primary, secondary } = elements;

  return (
    <Card square>
      <ImageElement element={image} className={classes.media} />
      <CardContent>
        <TextElement element={title} variant='h5' component='h2' gutterBottom />
        <TextElement element={text} variant='body2' component='p' color='textSecondary' />
      </CardContent>
      <CardActions>
        <ButtonElement element={primary} variant='contained' size='small' color='primary' disableElevation />
        <ButtonElement element={secondary} variant='contained' size='small' color='secondary' disableElevation />
      </CardActions>
    </Card>
  );
};
