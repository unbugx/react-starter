/* eslint-disable no-unused-vars */

type Dispose = () => void
type InsertCssItem = () => Dispose
type GetCSSItem = () => string
type GetContent = () => string

interface Style {
  [key: string]: InsertCssItem | GetCSSItem | GetContent | string
  _insertCss: InsertCssItem
  _getCss: GetCSSItem
  _getContent: GetContent
}

declare module 'isomorphic-style-loader/useStyles' {
  function useStyles(...styles: unknown): void
  export default useStyles;
}

declare module 'isomorphic-style-loader/StyleContext' {
  import { Context } from 'react';

  type RemoveGlobalCss = () => void
  type InsertCSS = (...styles: Style[]) => RemoveGlobalCss | void
  interface StyleContextValue {
    insertCss: InsertCSS
  }

  const StyleContext: Context<StyleContextValue>;

  export { StyleContext as default, InsertCSS };
}
