export interface IHtmlProps {
  title?: string;
  description?: string;
  children: string;
  state: RootState;
  style: string;
  scripts: string[];
}
