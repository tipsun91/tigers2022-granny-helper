/* eslint-disable jsx-a11y/aria-role */
const React = require('react');

module.exports = function Layout({ children, title }) {
  return (
    <html lang="en">

      <head>
        <meta charSet="UTF-8" />
        {/* <link rel="stylesheet" href="/css/index.css" /> */}
        <script defer src="/js/client.js" />
        <title>{title}</title>
      </head>

      <body>
        <div className="container">
          {children}
        </div>
      </body>

    </html>
  );
};
