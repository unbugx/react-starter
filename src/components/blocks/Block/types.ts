import * as blocks from 'components/blocks';

// types
import { TBlockElements } from 'components/blocks/types';

export interface IBlockProps {
  id: string,
  type: keyof typeof blocks,
  elements: TBlockElements,
}
