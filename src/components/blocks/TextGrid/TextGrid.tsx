import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

// types
import { ITextGridProps } from './types';
import { Text } from 'components/blocks/Text/Text';

export const TextGrid: FC<ITextGridProps> = ({
  elements,
}) => (
  <>
    <Grid
      container
      direction='row'
      justify='space-between'
      alignItems='flex-start'
      spacing={1}
    >
      {elements.map((item) => (
        <Grid item key={item.id} xs={6}>
          <Text {...item} />
        </Grid>
      ))}
    </Grid>
  </>
);
