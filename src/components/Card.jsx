import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  cardClass = () => {
    const { cardRare, cardTrunfo } = this.props;
    if (cardTrunfo === true) return 'trunfo';
    if (cardRare === 'normal' || cardRare === '') return 'card';
    if (cardRare === 'raro') return 'raroCard';
    if (cardRare === 'muito raro') return 'muitoRaro';
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, deleteButton } = this.props;
    return (
      <div className="card-container">
        <div className={ this.cardClass() }>
          <h3 data-testid="name-card" className="cardName">{ cardName }</h3>
          <div className="card-information">
            { cardImage ? (<img
              src={ cardImage }
              alt={ cardName }
              data-testid="image-card"
            />)
              : (<img src="https://www.auctus.com.br/wp-content/uploads/2017/09/sem-imagem-avatar.png" alt={ cardName } />) }
            { cardTrunfo && (
              <div className="trunfo-card">
                <span data-testid="trunfo-card"> Super Trunfo</span>
              </div>) }
          </div>
          <p
            data-testid="description-card"
            className="description"
          >
            { cardDescription }
          </p>
          <span
            data-testid="attr1-card"
            className="atributes"
          >
            {`Namoradas: ${cardAttr1}` }
          </span>
          <span
            data-testid="attr2-card"
            className="atributes"
          >
            {`Masculinidade: ${cardAttr2}` }
          </span>
          <span
            data-testid="attr3-card"
            className="atributes"
          >
            {`DST's contraídas: ${cardAttr3}` }
          </span>
          <div className="rare-card">
            <span data-testid="rare-card">{ cardRare }</span>
          </div>
        </div>
        { deleteButton && (
          <button
            data-testid="delete-button"
            className="delete-button"
            type="button"
            onClick={ deleteButton }
          >
            Deletar Carta

          </button>) }
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
