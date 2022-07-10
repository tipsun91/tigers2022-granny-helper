/* eslint-disable jsx-a11y/aria-role */
const React = require('react');
const NavMenu = require('./NavMenu');
const Layout = require('./Layout');

module.exports = function HomeGranson({ text, user }) {
  return (
    <Layout>
      <NavMenu user={user} />
      <h1>Картинки</h1>
    </Layout>
  );
};
