/* eslint-disable jsx-a11y/aria-role */
const React = require('react');

const Layout = require('./Layout');

module.exports = function Home({ text }) {
  return (
    <Layout>
      <h1>Wellcome!</h1>

      <select id="langs">
        <option value="rus" selected>Русский</option>
        <option value="eng">English</option>
      </select>

      <input type="file" id="file" />

      <div id="log">{text}</div>

      <button type="button" id="start">Начать обработку</button>
    </Layout>
  );
};
