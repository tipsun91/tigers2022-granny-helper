const React = require('react');
const Layout = require('./Layout')
// const upload = require("../public/load");
const qwe = require
module.exports = function Load({ title }) {
    return(
        <Layout title={title}>
        {/*<script  src="public/load.js"></script>*/}
        <div className="container">
            <div className="card">
                <form action="/load" method="post" encType="multipart/form-data">
                    <input type="file" id="file" name="filedata" className="btn" />
                    {/*<button className="btn" type="file">Открыть</button>*/}
                    <input type="submit"  id='upload' value="Загрузить" className="btn primary" />
                </form>
            </div>
        </div>

        </Layout>
    )
}







