/* eslint-disable jsx-a11y/aria-role */
const React = require('react');

const Layout = require('./Layout');

module.exports = function Profile({ user }) {
  return (
    <Layout>
      <div className="">
        <p>{user.name}</p>
        <p>{user.role}</p>
      </div>
    </Layout>
  );
};
