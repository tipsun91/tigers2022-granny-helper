/* eslint-disable react/no-array-index-key */
const React = require('react');
const Layout = require('./Layout');

module.exports = function Auth({ errors }) {
  return (
    <Layout title="Авторизация">
      <h1>Авторизация</h1>

      <main className="form-wrapper mb-3" role="main">

        {errors && (
          <div className="errors-wrapper container">
            <span>Your entry could not be saved:</span>
            <ul className="errors">
              {errors.map((error, index) => (
                <li className="error" key={index}>{error.message}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-3">
          <form method="post" action="/auth">
            <div className="mb-3">
              <label htmlFor="name_input" className="form-label">Имя</label>
              <input className="form-control" id="name_input" name="name" type="text" value="" />
            </div>

            <div className="mb-3">
              <label htmlFor="password_input" className="form-label">Пароль</label>
              <input className="form-control" id="password_input" name="password" type="password" value="" />
            </div>

            <input type="submit" value="Авторизоваться" className="btn btn-primary" />
          </form>
        </div>
      </main>

    </Layout>
  );
};
