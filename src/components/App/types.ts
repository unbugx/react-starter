import { EnhancedStore } from '@reduxjs/toolkit';
import { InsertCSS } from 'isomorphic-style-loader/StyleContext';
import { DehydratedState } from 'react-query/hydration';
import { QueryClient } from 'react-query';

export interface IAppProps {
  store: EnhancedStore<RootState>;
  insertCss: InsertCSS;
  dehydratedState: DehydratedState;
  queryClient: QueryClient;
}
