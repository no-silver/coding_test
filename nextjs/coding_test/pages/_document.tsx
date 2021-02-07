// eslint-disable-next-line no-use-before-define
import React from 'react';
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { RenderPageResult } from 'next/dist/next-server/lib/utils';
import { ServerStyleSheets as MaterialServerStyleSheets } from '@material-ui/core';

export default class CustomDocument extends NextDocument {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const materialUiSheets = new MaterialServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> => originalRenderPage({
      enhanceApp: (App) => (props) => materialUiSheets.collect(<App {...props} />),
    });

    const initialProps = await NextDocument.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [
        <React.Fragment key="styles">
          {initialProps.styles}
          {materialUiSheets.getStyleElement()}
        </React.Fragment>,
      ],
    };
  }

  render(): React.ReactElement {
    return (
      <Html lang="ja-JP">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
