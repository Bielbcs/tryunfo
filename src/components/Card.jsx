import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, deleteButton } = this.props;
    return (
      <div className="card-container">
        <div className="card">
          <h3 data-testid="name-card">{ cardName }</h3>
          <div className="card-information">
            <img src={ cardImage } alt={ cardName } data-testid="image-card" />
            { cardTrunfo && (<span data-testid="trunfo-card">Super Trunfo</span>) }
          </div>
          <p data-testid="description-card">{ cardDescription }</p>
          <span data-testid="attr1-card">{ cardAttr1 }</span>
          <span data-testid="attr2-card">{ cardAttr2 }</span>
          <span data-testid="attr3-card">{ cardAttr3 }</span>
          <span data-testid="rare-card">{ cardRare }</span>
          { deleteButton && (
            <button
              type="button"
              data-testid="delete-button"
              onClick={ deleteButton }
            >
              Deletar Carta

            </button>) }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
