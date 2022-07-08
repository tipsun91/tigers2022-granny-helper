const React = require('react');

module.exports = function Card({ card }) {
  return (
    <div className="card col-12 col-md-6 col-lg-4 mb-4" style={{ width: '18rem' }} key={card.id}>
      <img src="..." class="card-img-top" alt="Picture"></img>
      <div className="card-body">
        <h5 className="card-title">{card.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div className="card-body">
        <a href={`/stars/${card.id}`} className="card-link">Card link</a>
        <a href="#" className="card-link">Распознать текст</a>
        <a href="#" className="card-link">Воспроизвести текст</a>
      </div>
    </div>
  );
};
