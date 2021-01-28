import { IElementButton, IElementImage, IElementText } from 'components/elements/types';

export interface ICoverProps {
  id: string,
  isReverse: boolean,
  elements: {
    image: IElementImage,
    text: IElementText,
    primary: IElementButton,
    secondary: IElementButton,
  }
}
