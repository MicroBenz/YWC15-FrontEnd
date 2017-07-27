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
          <title>Young Webmaster Camp 15</title>
          <meta name="description" content="Page description. No longer than 155 characters." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@publisher_handle" />
          <meta name="twitter:title" content="Page Title" />
          <meta name="twitter:description" content="Page description less than 200 characters" />
          <meta name="twitter:creator" content="@author_handle" />
          <meta name="twitter:image" content="http://www.example.com/image.jpg" />

          <meta property="og:title" content="Title Here" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="http://www.example.com/" />
          <meta property="og:image" content="http://example.com/image.jpg" />
          <meta property="og:description" content="Description Here" />
          <meta property="og:site_name" content="Site Name, i.e. Moz" />
          <meta property="fb:admins" content="Facebook numeric ID" />

          <link rel="stylesheet" href="/static/libs/bulma/bulma.min.css" />
          <link rel="stylesheet" href="/static/libs/font-awesome/css/font-awesome.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Rajdhani:300" rel="stylesheet" />
        </Head>
        <body style={{ width: '100%', height: '100%' }}>
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
