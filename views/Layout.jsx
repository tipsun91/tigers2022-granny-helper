/* eslint-disable jsx-a11y/aria-role */
const React = require('react');

module.exports = function Layout({ children, title }) {
  return (
    <html lang="en">

      <head>
        <meta charSet="UTF-8" />
        {/*<link rel="stylesheet" href="/css/index.css" /> */}
        {/*  <script defer src="loading.js"></script>*/}
          <script  src="load.js"></script>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
          <link rel="stylesheet" href="stylesheet/styles.css"/>
        <script defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossorigin="anonymous"
        />
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
