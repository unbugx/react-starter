export type HtmlProps = {
  title?: string;
  description?: string;
  children: string;
  state: State;
  style: string;
  scripts: string[];
  env: EnvVariables;
}
