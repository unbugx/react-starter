import React, { FC } from 'react';
import { ThemeProvider } from '@material-ui/core';
import * as themes from 'themes';

// types
import { IBlockProps } from './types';

// components
import { Container } from 'components/UI/Container/Container';
import * as blocks from 'components/blocks';

// hooks
import { useStyles } from './hooks';

function BlockComponent({ id, type, elements, ...restProps }: IBlockProps) {
  const classes = useStyles();
  // TODO Do we need come up how to use ts for dynamic component (type guard/generic types)?
  const Component = blocks[type] as any;

  return (
    <div className={classes.root}>
      <Container>
        <Component id={id} elements={elements} {...restProps} />
      </Container>
    </div>
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
