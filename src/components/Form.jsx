import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form action="">
        <label htmlFor="name">
          Nome:
          <input type="text" name="name" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea name="description" data-testid="description-input" />
        </label>
        <label htmlFor="atribute1">
          Atributo 1:
          <input type="number" name="atribute1" data-testid="attr1-input" />
        </label>
        <label htmlFor="atribute2">
          Atributo 2:
          <input type="number" name="atribute2" data-testid="attr2-input" />
        </label>
        <label htmlFor="atribute3">
          Atributo 3:
          <input type="number" name="atribute3" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          Imagem:
          <input type="text" name="image" data-testid="image-input" />
        </label>
        <label htmlFor="rare">
          Raridade:
          <select name="rare" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="triunfo">
          Raridade
          <input type="checkbox" name="triunfo" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
