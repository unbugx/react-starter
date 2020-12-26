import { DehydratedState } from 'react-query/hydration';

export interface IHtmlProps {
  title?: string;
  description?: string;
  children: string;
  state: RootState;
  style: string;
  scripts: string[];
  env: EnvVariables;
  dehydratedState: DehydratedState;
}
