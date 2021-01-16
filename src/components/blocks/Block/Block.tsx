import React, { FC } from 'react';
import * as blocks from 'components/blocks';

// types
import { IBlockProps } from './types';

export const Block: FC<IBlockProps> = ({
  id,
  type,
  elements,
}) => {
  // TODO Do we need come up how to use ts for dynamic component (type guard/generic types)?
  const Component = blocks[type] as any;

  return (
    <>
      <Component id={id} elements={elements} />
    </>
  );
};
