/* eslint-disable jsx-a11y/aria-role */
const React = require('react');

const NavMenu = require('./NavMenu');

module.exports = function Layout({ children, title }) {
  return (
    <html lang="en">

      <head>
        <meta charSet="UTF-8" />

        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <script defer src="/js/bootstrap.bundle.min.js" />

        <script defer src="/js/client.js" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600&family=Josefin+Sans:ital,wght@0,300;0,700;1,700&family=Montserrat:wght@300;400;500;600;700&display=swap" />

        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/style.css" />
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
