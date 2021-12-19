/* eslint-disable react/no-danger */
import React, { FC } from 'react'
import serialize from 'serialize-javascript'

// types
import type { HtmlProps } from 'components/app/Html/Html.types'

export const Html: FC<HtmlProps> = ({
  children,
  title,
  description,
  state,
  style,
  css,
  scripts,
  env,
}) => (
  <html lang="en">
    <head>
      <base href={`${env.APP_BASE_PATH}/`} />
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      {style && <style id="css" dangerouslySetInnerHTML={{ __html: style }} />}
      {css && css.map((cssUrl) => <link href={cssUrl} rel="stylesheet" />)}
    </head>
    <body>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.APP_STATE=${serialize(state, { isJSON: true })};
            window.APP_BASE_PATH='${env.APP_BASE_PATH}'
          `,
        }}
      />
      <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
      {scripts && scripts.map((script) => <script key={script} src={script} />)}
    </body>
  </html>
)
