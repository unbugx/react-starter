import React, { FC } from 'react';
import { Paper, ThemeProvider } from '@material-ui/core';
import * as themes from 'themes';

// types
import { IBlockProps } from './types';

// components
import * as blocks from 'components/blocks';

function BlockComponent({ id, type, elements, ...restProps }: IBlockProps) {
  // TODO Do we need come up how to use ts for dynamic component (type guard/generic types)?
  const Component = blocks[type] as any;

  return (
    <Paper elevation={0} square>
      <Component id={id} elements={elements} {...restProps} />
    </Paper>
  );
}

export const Block: FC<IBlockProps & { theme?: keyof typeof themes}> = ({ theme, ...restProps }) => {
  if (!theme) {
    return <BlockComponent {...restProps} />;
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <BlockComponent {...restProps} />
    </ThemeProvider>
  );
};
