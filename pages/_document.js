import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import config from '../config';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html lang="th">
        <Head>
          <link rel="stylesheet" href="/static/libs/bulma/bulma.css" />
          <link
            rel="stylesheet"
            href="/static/libs/font-awesome/css/font-awesome.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.fbAsyncInit = function() {
                FB.init({
                  appId: '${config.facebookAppsID}',
                  cookie: true,
                  xfbml: true,
                  version: 'v2.10'
                });
                FB.AppEvents.logPageView();
              };

              (function(d, s, id){
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {return;}
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
            `
            }}
          />
        </body>
      </html>
    );
  }
}
