import { ALIGN } from 'constants/index';

export interface IElement {
  value: TElementValue,
  interface: IElementInterface,
}

export interface IElementText extends IElement {
  value: IElementTextValue,
}

export interface IElementTextValue {
  content: string,
}

export interface IElementButton extends IElement {
  value: IElementButtonValue,
}

export interface IElementButtonValue {
  content: string,
  url: string,
}

export interface IElementImage extends IElement {
  value: IElementImageValue,
}

export interface IElementImageValue {
  url: string,
}

export type TElementValue = IElementTextValue | IElementButtonValue | IElementImageValue;

export interface IElementInterface {
  align: ALIGN,
  visibility: boolean,
}
