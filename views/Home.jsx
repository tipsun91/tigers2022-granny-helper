/* eslint-disable jsx-a11y/aria-role */
const React = require('react');

const Layout = require('./Layout');

module.exports = function Home({ children }) {
  return (
    <Layout>
      <h1>Wellcome!</h1>
    </Layout>
  );
};
