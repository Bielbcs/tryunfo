import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends React.Component {
  hasTrunfo = () => {
    const { verifyTrunfo, cardTrunfo, onInputChange } = this.props;
    if (!verifyTrunfo) {
      return (
        <label htmlFor="cardTrunfo" className="checkbox">
          <span>Trunfo?</span>
          <input
            type="checkbox"
            name="cardTrunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
      );
    }
    return (
      <p>Você já tem um Super Trunfo em seu baralho</p>
    );
  };

  render() {
    const { cardName, onInputChange, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      isSaveButtonDisabled, onSaveButtonClick } = this.props;
    return (
      <div className="form">
        <form action="" className="form-container" autoComplete="off">
          <p>Personalização</p>
          <label htmlFor="cardName">
            <input
              placeholder="Nome"
              type="text"
              name="cardName"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
            <span>*</span>
          </label>

          <label htmlFor="cardDescription" className="centralized">
            <textarea
              name="cardDescription"
              placeholder="Descrição"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
            <span>*</span>
          </label>

          <label htmlFor="cardImage">
            <input
              type="text"
              name="cardImage"
              placeholder="Imagem"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
            <span>*</span>
          </label>

          <p>Atributos</p>
          <label htmlFor="cardAttr1" className="atributes-container">
            <input
              type="number"
              placeholder="Força"
              name="cardAttr1"
              data-testid="attr1-input"
              value={ cardAttr1 === '0' ? '' : cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr2" className="atributes-container">
            <input
              type="number"
              placeholder="Velocidade"
              name="cardAttr2"
              data-testid="attr2-input"
              value={ cardAttr2 === '0' ? '' : cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardAttr3" className="atributes-container">
            <input
              type="number"
              placeholder="Inteligência"
              name="cardAttr3"
              data-testid="attr3-input"
              value={ cardAttr3 === '0' ? '' : cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardRare" className="centralized">
            <span>Raridade:</span>
            <br />
            <select
              name="cardRare"
              className="rare-input"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
            <span>*</span>

          </label>

          { this.hasTrunfo() }

          <button
            type="submit"
            className="save-button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar

          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
