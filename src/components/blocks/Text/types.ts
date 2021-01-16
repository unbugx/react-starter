import { IElementButton, IElementImage, IElementText } from 'components/elements/types';

export interface ITextProps {
  id: string,
  elements: {
    image: IElementImage,
    title: IElementText,
    text: IElementText,
    primary: IElementButton,
    secondary: IElementButton,
  }
}
