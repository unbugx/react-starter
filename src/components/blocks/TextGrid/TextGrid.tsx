import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

// types
import { ITextGridProps } from './types';

// components
import { Text } from 'components/blocks/Text/Text';

// hooks
import { useStyles } from './hooks';

export const TextGrid: FC<ITextGridProps> = ({
  elements,
}) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction='row'
      justify='space-between'
      alignItems='flex-start'
      spacing={4}
    >
      {elements.map((item) => (
        <Grid
          key={item.id}
          item
          md={elements.length <= 2 ? 6 : 4}
          xl={3}
          xs={12}
          classes={{
            root: classes.root,
          }}
        >
          <Text {...item} />
        </Grid>
      ))}
    </Grid>
  );
};
