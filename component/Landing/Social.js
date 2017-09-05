import React from 'react';

const TwitterScript = `
  <a
  className="twitter-timeline"
  data-lang="th"
  href="https://twitter.com/ywcth"
  >
  Tweets by ywcth
  </a>
  <script
  async
  src="https://platform.twitter.com/widgets.js"
  charSet="utf-8"
  />
`;

const FacebookScript = `
  <div
  className="fb-page"
  data-href="https://www.facebook.com/ywcth/"
  data-tabs="timeline"
  data-small-header="false"
  data-adapt-container-width="true"
  data-hide-cover="false"
  data-show-facepile="true"
  >
  <blockquote
    cite="https://www.facebook.com/ywcth/"
    className="fb-xfbml-parse-ignore"
  >
    <a href="https://www.facebook.com/ywcth/">
      Young Webmaster Camp
    </a>
  </blockquote>
  </div>
`;

const Social = () => {
  return (
    <div>
      <div className="facebook">
        <div
          className="fb-page"
          data-href="https://www.facebook.com/ywcth/"
          data-tabs="timeline"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/ywcth/"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/ywcth/">
              Young Webmaster Camp
            </a>
          </blockquote>
        </div>
      </div>
      <div className="twitter">
        <a
          className="twitter-timeline"
          data-lang="th"
          href="https://twitter.com/ywcth"
        >
        Tweets by ywcth
        </a>
        <script
          async
          src="://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
      </div>
    </div>
  );
};

export default Social;
