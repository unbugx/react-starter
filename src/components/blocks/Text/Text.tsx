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
import { Container } from 'components/UI/Container/Container';

export const Text: FC<ITextProps> = ({
  elements,
}) => {
  const classes = useStyles();
  const { image, title, text, primary, secondary } = elements;

  return (
    <Card square elevation={0} data-aos='fade-up'>
      <div
        className={classes.imageWrap}
      >
        <ImageElement element={image} className={classes.image} />
      </div>
      <CardContent className={classes.text}>
        <TextElement element={title} variant='h5' component='h2' gutterBottom />
        <TextElement element={text} variant='body1' component='p' color='textSecondary' />
      </CardContent>
      <CardActions className={classes.actions} style={{ justifyContent: primary.ui.align }}>
        <ButtonElement element={primary} variant='contained' size='large' color='primary' disableElevation />
        <ButtonElement element={secondary} variant='contained' size='large' color='secondary' disableElevation />
      </CardActions>
    </Card>
  );
};

export const TextBlock: FC<ITextProps> = (props) => {
  const classes = useStyles();

  return (
    <Container padding>
      <div className={classes.wrap}>
        <Text {...props} />
      </div>
    </Container>
  );
};
