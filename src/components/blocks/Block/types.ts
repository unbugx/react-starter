import * as blocks from 'components/blocks';

// types
import { ITextProps } from 'components/blocks/Text/types';
import { ITextGridProps } from 'components/blocks/TextGrid/types';
import { ICoverProps } from 'components/blocks/Cover/types';

export type IBlockProps = {
  type: keyof typeof blocks,
} & (ITextProps | ITextGridProps | ICoverProps);
