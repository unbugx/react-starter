import { EnhancedStore } from '@reduxjs/toolkit';
// @ts-ignore
import { InsertCSS } from 'isomorphic-style-loader/StyleContext';

export interface IAppProps {
  store: EnhancedStore<RootState>;
  insertCss: InsertCSS;
}
