/* eslint-disable jsx-a11y/aria-role */
const React = require('react');
const NavMenu = require('./NavMenu');
const Layout = require('./Layout');

module.exports = function Home({ text, user }) {
  return (
    <Layout>
      <NavMenu user={user} />
      

    </Layout>
  );
};
