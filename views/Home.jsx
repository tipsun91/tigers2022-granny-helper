/* eslint-disable jsx-a11y/aria-role */
const React = require('react');
const NavMenu = require('./NavMenu');
const Layout = require('./Layout');

module.exports = function Home({ text, user }) {
  return (
    <Layout>
      <NavMenu user={user} />
      <div className="container">
        <img className='start_img' src="img/wat.jpeg" alt="img" />
        <div className="card">
          <form action="/load" method="get" encType="multipart/form-data">
            <input type="file" id="file" className="filedata" />
          </form>
        </div>
      </div>
      <script src="../public/load.js" />

    </Layout>
  );
};
