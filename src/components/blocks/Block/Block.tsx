import React, { FC, useMemo } from 'react';
import { Paper, ThemeProvider, useTheme } from '@material-ui/core';
import * as themes from 'themes';

// types
import { IBlockProps } from './types';

// components
import * as blocks from 'components/blocks';
import { createTheme } from 'themes/colorized';

function BlockComponent({ id, type, elements, ...restProps }: IBlockProps) {
  // TODO Do we need come up how to use ts for dynamic component (type guard/generic types)?
  const Component = blocks[type] as any;

  return (
    <Paper elevation={0} square>
      <Component id={id} elements={elements} {...restProps} />
    </Paper>
  );
}

export const Block: FC<IBlockProps & { theme?: keyof typeof themes, paletteVariant?: number}> = ({
  theme,
  paletteVariant,
  ...restProps
}) => {
  const mainTheme = useTheme();
  const colorizedTheme = useMemo(() =>
    (paletteVariant ? createTheme(mainTheme, '1', paletteVariant) : {}),
  [mainTheme, paletteVariant],
  );

  if (paletteVariant) {
    return (
      <ThemeProvider theme={colorizedTheme}>
        <BlockComponent {...restProps} />
      </ThemeProvider>
    );
  }

  if (theme) {
    return (
      <ThemeProvider theme={themes[theme]}>
        <BlockComponent {...restProps} />
      </ThemeProvider>
    );
  }

  return <BlockComponent {...restProps} />;
};
