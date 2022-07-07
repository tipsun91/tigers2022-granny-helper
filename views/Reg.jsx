/* eslint-disable react/no-array-index-key */
const React = require('react');
const Layout = require('./Layout');

module.exports = function Reg({ errors }) {
  return (
    <Layout title="Регистрация">
      {/* <h1>Регистрация</h1> */}

      <main className="form-wrapper md-3" role="main">

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

        <div className="md-3 shadow bg-white rounded">
          <h1 className='font-monospace'>Регистрация</h1>
          <form method="post" action="/reg">
            <label htmlFor="name_input">Имя:</label>
            <br />
            <input id="name_input" name="user[name]" type="text" value="" />

            <div className="form-check">
              <label className="form-check-label" for="flexRadioDefault1">Бабушка: </label>
              <input className="form-check-input" type="radio" name="user[role]" value="gm" id="flexRadioDefault1" checked />
            </div>

            <div className="form-check">
              <label className="form-check-label" for="flexRadioDefault2">Внук: </label>
              <input className="form-check-input" type="radio" name="user[role]" value="gs" id="flexRadioDefault2" />
            </div>

            <label htmlFor="password_input">Пароль:</label>
            <br />
            <input id="password_input" name="user[password]" type="password" value="" />
            <br />
            <input type="submit" value="Зарегистрироваться" className="btn btn-primary" />
          </form>
        </div>
      </main>

    </Layout>
  );
};
