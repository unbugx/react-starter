import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

// types
import { ITextGridProps } from './types';

// components
import { Text } from 'components/blocks/Text/Text';
import { Container } from 'components/UI/Container/Container';

// hooks
import { useStyles } from './hooks';

export const TextGrid: FC<ITextGridProps> = ({
  elements,
}) => {
  const classes = useStyles();

  return (
    <Container padding>
      <Grid
        container
        direction='row'
        alignItems='flex-start'
        spacing={4}
      >
        {elements.map((item) => (
          <Grid
            key={item.id}
            item
            md={elements.length <= 2 ? 6 : 3}
            xl={3}
            xs={12}
            className={classes.item}
          >
            <Text {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
