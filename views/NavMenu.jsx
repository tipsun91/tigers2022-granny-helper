const React = require('react');

module.exports = function NavMenu({ user }) {
  return (
    <header className="header">
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Бабушка Helper</a>
          <form className="d-flex" role="search">
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
            <button className="btn btn-outline-success" type="submit">Выйти</button>
            <button className="btn btn-outline-success" type="submit">Ddfsd</button>
          </form>
        </div>
      </nav>
    </header>
  );
};
