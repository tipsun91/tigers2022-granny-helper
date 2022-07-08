/* eslint-disable jsx-a11y/aria-role */
const React = require('react');

const NavMenu = require('./NavMenu');

module.exports = function Layout({ children, title }) {
  return (
    <html lang="en">

      <head>
        <meta charSet="UTF-8" />
        <script src="load.js" />
        <script defer src="/js/client.js" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" />

        <link rel="stylesheet" href="/stylesheet/styles.css" />

        <link rel="stylesheet" href="/css/style.css" />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossOrigin="anonymous"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600&family=Josefin+Sans:ital,wght@0,300;0,700;1,700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        <title>{title}</title>
      </head>

      <body>

        <div className="">
          {children}
        </div>
      </body>

    </html>
  );
};
