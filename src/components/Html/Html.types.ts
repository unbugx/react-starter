export type HtmlProps = {
  title?: string;
  description?: string;
  children: string;
  state: RootState;
  style: string;
  scripts: string[];
  env: EnvVariables;
}
