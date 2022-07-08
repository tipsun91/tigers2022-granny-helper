const React = require('react');

const Layout = require('./Layout');

module.exports = function StartPage() {
  return (
    <Layout>
      <div className="start_container">
        <div className="start_content">
          <div className='start_title'>
            <h1 className='h1 reg_content h1_center'>Granny Helper</h1>
          </div>
          <div className='start_img'>
            {/* <img className='start_img' src="/img/wat.jpeg" alt="img" /> */}
          </div>
          <div className='start_btn'>
            <button className="reg_content btn_log" type="button" id="start1"><a href='/auth'>Вход</a></button>
            <button className="reg_content btn_reg" type="button" id="start2"><a href='/reg'>Регистрация</a></button>
          </div>
        </div>
      </div>
    </Layout >
  );
};
