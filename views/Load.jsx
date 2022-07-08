const React = require('react');
const Layout = require('./Layout');

module.exports = function Load() {
  return(
      <Layout title='Загрузка файла'>
      <div className="container">
          <div className="card">
              <form action="/load" method="post" encType="multipart/form-data">
                  <input type="file" name="image" className="btn" />
                  <input type="submit" value="Send" />
              </form>
          </div>
      </div>
      </Layout>
  )
};
