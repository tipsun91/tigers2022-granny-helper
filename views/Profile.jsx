/* eslint-disable jsx-a11y/aria-role */
const React = require('react');

const Layout = require('./Layout');
const NavMenu = require('./NavMenu')

module.exports = function Profile({ user }) {
  return (
    <Layout>
      <NavMenu user={user} />
      <div className="">
        <h1 className="h1_center">
          Доброго времени суток, {user.name}!</h1>
        <h3 className="role">{user.role}</h3>
      </div>
    </Layout>
  );
};  
