/* eslint-disable jsx-a11y/aria-role */
const React = require('react');

module.exports = function Layout({ children, title }) {
  return (
    <html lang="en">

      <head>
        <meta charSet="UTF-8" />
        {/* <link rel="stylesheet" href="/css/index.css" /> */}
        <script defer src="/js/client.js" />
        <link
          // href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          // rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anonymous"
        />
        <script defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="css/style.css" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600&family=Josefin+Sans:ital,wght@0,300;0,700;1,700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

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
