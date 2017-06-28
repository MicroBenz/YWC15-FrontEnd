import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render () {
    return (
     <html>
       <Head>
         <link rel="stylesheet" href="/static/libs/bulma/bulma.css" />
         <link rel="stylesheet" href="/static/libs/font-awesome/css/font-awesome.min.css" />
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}
