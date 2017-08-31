import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import { ServerStyleSheet } from 'styled-components';

import config from '../config';
import seo from '../seo.json';
import colors from '../utils/colors';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html lang="th">
        <Head>
          <title>{seo.title}</title>
          <link rel="stylesheet" href="/static/fonts/fonts.css" defer />
          <link rel="stylesheet" href="/static/libs/bulma/bulma.min.css" defer />
          <link rel="stylesheet" href="/static/libs/font-awesome/css/font-awesome.min.css" defer />
          <link rel="stylesheet" href="/static/libs/flatpickr/flatpickr.css" defer />
          <link rel="stylesheet" href="/static/libs/flatpickr/dark.css" defer />

          <meta name="description" content={seo.comingSoon.description} />
          <meta name="keywords" content={seo.comingSoon.keywords} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@ywcth" />
          <meta name="twitter:title" content={seo.comingSoon.title} />
          <meta name="twitter:description" content={seo.comingSoon.description} />
          <meta name="twitter:image" content="/static/img/social/banner.jpg" />

          <meta property="og:title" content={seo.comingSoon.title} />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="/static/img/social/banner.jpg" />
          <meta property="og:description" content={seo.comingSoon.description} />
          <meta property="og:site_name" content="Young Webmaster Camp 15" />

          <link rel="apple-touch-icon" sizes="57x57" href="/static/favicon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/favicon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/favicon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/favicon/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/static/favicon/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/static/favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#1f2833" />
          <meta name="msapplication-TileImage" content="/static/favicon/ms-icon-144x144.png" />
          <meta name="theme-color" content="#1f2833" />
          {styleTags}
        </Head>
        <body style={{ width: '100%', height: '100%', backgroundColor: colors.theme, color: colors.white, backgroundImage: "url('/static/img/bg/bg.png')", backgroundRepeat: 'repeat', backgroundSize: '70%' }}>
          {main}
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
