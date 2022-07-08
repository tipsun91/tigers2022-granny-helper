const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');

module.exports = function CardList({ cards, title, user }){
  return (
    <Layout title={title} user={user}>
      <div class="container pt-5">
        <h1>{title}</h1>
        { user && <div>Hello, {user}</div> }
        <div className="row">
          { cards.map( (card) => <Card card={card} key={card.id} /> ) }
        </div>
      </div>
    </Layout>
  )
}
