/* eslint-disable jsx-a11y/aria-role */
const React = require('react');

module.exports = function Layout({ children, title }) {
  return (
    <html lang="en">

      <head>
        <meta charSet="UTF-8" />
        {/*<link rel="stylesheet" href="/css/index.css" /> */}
        {/* <script defer src="/js/application.js" /> */}
        <title>{title}</title>
      </head>

      <body>
        <div className="container">
          <header role="banner">
            <a className="title" href="/">Karaoke</a>
            <a href="/new" className="signup button">Sign up to Karaoke</a>
          </header>
          {children}
          <footer role="siteinfo">
            <span className="legal">Important Legal Information</span>
          </footer>
        </div>
      </body>

    </html>
  );
};
