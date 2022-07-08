const React = require('react');

module.exports = function NavMenu({ user }) {
  return (
    <header className="header">
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Бабушка Helper</a>
          <form className="d-flex" role="search">

            <button className="btn btn-outline-success" type="submit"><a href="/load">Загрузить</a></button>
            <button className="btn btn-outline-success" type="submit"><a href="/">Выйти</a></button>
          </form>
        </div>
      </nav>
    </header>
  );
};
