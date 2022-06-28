import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardTrunfo: false,
      cardRare: '',
    };
  }

  isSaveButtonDisabled = () => {
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;

    const maxValuePerAttribute = 90;
    const maxValue = 210;

    const tests1 = [cardName, cardDescription, cardImage, cardRare];
    const tests2 = [cardAttr1, cardAttr2, cardAttr3];

    if (tests1.some((test) => test === '')) return true;
    if (tests2.some((test) => test > maxValuePerAttribute
      || test < 0)) return true;
    if (parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10)
      + parseInt(cardAttr3, 10) > maxValue) return true;
  };

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.type === 'checkbox'
      ? event.target.checked : event.target.value });
  }

  render() {
    const { cardName, cardImage, cardTrunfo, cardRare, cardDescription, cardAttr1,
      cardAttr2, cardAttr3 } = this.state;
    return (
      <div className="general-container">
        <Form
          className="teste"
          cardName={ cardName }
          cardImage={ cardImage }
          cardTrunfo={ cardTrunfo }
          cardRare={ cardRare }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
          // onSaveButtonClick={ onSaveButtonClick }
          onInputChange={ (event) => this.onInputChange(event) }
        />
        <Card
          cardName={ cardName }
          cardImage={ cardImage }
          cardTrunfo={ cardTrunfo }
          cardRare={ cardRare }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
        />
      </div>
    );
  }
}

export default App;
