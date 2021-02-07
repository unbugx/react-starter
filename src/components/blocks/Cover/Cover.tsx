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
    <Card square elevation={0}>
      <Grid
        className={classes.wrap}
        container
        direction={isReverse ? 'row-reverse' : 'row'}
        justify='space-between'
        alignItems='center'
        spacing={0}
      >
        <Grid item md={6} xs={12} className={classes.imageWrap}>
          <ImageElement element={image} className={classes.image} />
        </Grid>
        <Grid item md={6} xs={12} data-aos={isReverse ? 'fade-right' : 'fade-left'}>
          <CardContent className={classes.text}>
            <TextElement element={text} variant='body1' component='p' color='textSecondary' />
          </CardContent>
          <CardActions className={classes.actions}>
            <ButtonElement element={primary} variant='contained' size='large' color='primary' disableElevation />
            <ButtonElement element={secondary} variant='contained' size='large' color='secondary' disableElevation />
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};
