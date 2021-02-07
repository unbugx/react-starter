/* eslint-disable react/no-danger */
import React, { FC } from 'react';
import serialize from 'serialize-javascript';

// types
import { IHtmlProps } from './types';

export const Html: FC<IHtmlProps> = ({
  children,
  title,
  description,
  state,
  style,
  scripts,
  env,
  dehydratedState,
  muiCss,
}) => (
  <html lang='en'>
    <head>
      <base href={`${env.APP_BASE_PATH}/`} />
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
      {style && <style id='css' dangerouslySetInnerHTML={{ __html: style }} />}
      <style id='jss-server-side' dangerouslySetInnerHTML={{ __html: muiCss }} />
    </head>
    <body>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.APP_STATE=${serialize(state, { isJSON: true })};
            window.APP_BASE_PATH='${env.APP_BASE_PATH}'
            window.REACT_QUERY_STATE=${serialize(dehydratedState, { isJSON: true })};
          `,
        }}
      />
      <div id='app' dangerouslySetInnerHTML={{ __html: children }} />
      {scripts && scripts.map((script) => <script key={script} src={script} />)}
    </body>
  </html>
);
