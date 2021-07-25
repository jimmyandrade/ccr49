import React from 'react';
import Document, {Html, Head, Main, NextScript, DocumentContext} from "next/document";
import {ServerStyleSheets} from "@material-ui/core";
import { theme } from "../theme";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={"pt-br"}>
        <Head>
          <meta name={"theme-color"} content={theme.palette.primary.main} />
          <link
            href={"https://fonts.googleapis.com"}
            rel={"preconnect"}
          />
          <link
            href={"https://fonts.gstatic.com"}
            crossOrigin={"crossOrigin"}
            rel={"preconnect"}
          />
          <link
            href={"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=optional"}
            rel={"stylesheet"}
          />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
  };
};

export default MyDocument;