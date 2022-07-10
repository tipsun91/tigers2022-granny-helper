const React = require('react');

module.exports = function NavMenu({ user }) {
  return (
    <header className="header">
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Granny Helper</a>
          <form className="d-flex" role="search">

            <button className="btn_nav btn-outline-success" type="submit"><a href="/load">Загрузить</a></button>
            <button className="btn_nav btn-outline-success" type="submit"><a href="/">Выйти</a></button>
          </form>
        </div>
      </nav>
    </header>
  );
};
