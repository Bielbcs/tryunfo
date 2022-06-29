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
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: 'https://besthqwallpapers.com/Uploads/5-4-2019/86291/thumb2-blue-abstract-background-neon-blue-background-abstraction-creative-blue-backgrounds.jpg',
      cardTrunfo: false,
      cardRare: '',
      cardList: [],
    };
  }

  resetState = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: 'https://besthqwallpapers.com/Uploads/5-4-2019/86291/thumb2-blue-abstract-background-neon-blue-background-abstraction-creative-blue-backgrounds.jpg',
      cardRare: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardTrunfo: false,
    });
  }

  catchCard = () => {
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3, cardTrunfo } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };
    const { cardList } = this.state;
    const newCardList = [...cardList, card];
    this.setState({ cardList: newCardList });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    this.catchCard();
    this.resetState();
  }

  verifyTrunfo = () => {
    const { cardList } = this.state;
    const newArray = [];
    cardList.forEach((item) => {
      newArray.push(item.cardTrunfo);
    });
    if (newArray.some((item2) => item2)) return true;
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
  };

  deleteButton = (event) => {
    const { cardList } = this.state;
    const cardName = event.target.parentNode.firstChild.textContent;
    const newArray = cardList.filter((item) => item.cardName !== cardName);
    this.setState({ cardList: newArray });
  };

  render() {
    const { cardName, cardImage, cardTrunfo, cardRare, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardList } = this.state;
    return (
      <div className="general-container">
        <div className="cardForm-container">
          <div className="form">
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
              verifyTrunfo={ this.verifyTrunfo() }
              isSaveButtonDisabled={ this.isSaveButtonDisabled() }
              onSaveButtonClick={ (event) => this.onSaveButtonClick(event) }
              onInputChange={ (event) => this.onInputChange(event) }
            />
          </div>
          <div className="card-preview">
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
        </div>
        <div className="card-list">
          {cardList.map((item) => (<Card
            key={ item.cardName }
            cardName={ item.cardName }
            cardImage={ item.cardImage }
            cardTrunfo={ item.cardTrunfo }
            cardRare={ item.cardRare }
            cardDescription={ item.cardDescription }
            cardAttr1={ item.cardAttr1 }
            cardAttr2={ item.cardAttr2 }
            cardAttr3={ item.cardAttr3 }
            deleteButton={ (event) => this.deleteButton(event) }
          />))}
        </div>
      </div>
    );
  }
}

export default App;
