import React, { FC } from 'react';
import { Card, CardActions, CardContent, Grid } from '@material-ui/core';

// types
import { ICoverProps } from './types';

// hooks
import { useStyles } from './hooks';

// components
import { ImageElement } from 'components/elements/ImageElement/ImageElement';
import { TextElement } from 'components/elements/TextElement/TextElement';
import { ButtonElement } from 'components/elements/ButtonElement/ButtonElement';

export const Cover: FC<ICoverProps> = ({
  elements,
  isReverse,
}) => {
  const classes = useStyles();
  const { image, text, primary, secondary } = elements;

  return (
    <Card square>
      <Grid
        container
        direction={isReverse ? 'row-reverse' : 'row'}
        justify='space-between'
        alignItems='center'
        spacing={0}
      >
        <Grid item sm={6} xs={12}>
          <ImageElement element={image} className={classes.media} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <CardContent>
            <TextElement element={text} variant='body2' component='p' color='textSecondary' />
          </CardContent>
          <CardActions>
            <ButtonElement element={primary} variant='contained' size='small' color='primary' disableElevation />
            <ButtonElement element={secondary} variant='contained' size='small' color='secondary' disableElevation />
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};
