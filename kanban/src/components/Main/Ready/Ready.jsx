import React from "react";
import "./Ready.css";

class Ready extends React.Component {
  constructor(props) {
    super(props);
    this.selectRef = React.createRef();
  }

  handleClick = () => {
    this.selectRef.current.classList.toggle("activeSelect");
  };

  handleSelect = (e) => {
    const { cards } = this.props;
    const selectedId = e.target.selectedOptions[0].id;

    let newCards = [...cards];
    let bufCardsArray = newCards.map((cardsItem) => {
      if (cardsItem.id == selectedId) {
        cardsItem.status = "ready";
        console.log(typeof selectedId);
      }
    });
    this.setState({ cards: bufCardsArray });
  };

  checkPointer = () => {
    const { cards } = this.props;
    let counter = null;
    cards.forEach((cardsItem) => {
      if (cardsItem.status === "backlog") {
        counter++;
      }
    });

    if (counter) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const { cards } = this.props;

    return (
      <div className="ready">
        <div className="ready__title">Ready</div>
        <ul className="ready__cards">
          {cards.map((readyItem) => {
            if (readyItem.status === "ready") {
              return (
                <li key={readyItem.id} className="ready__cards-item">
                  {readyItem.name}
                </li>
              );
            }
          })}
        </ul>

        <button
          onClick={this.handleClick}
          className={`ready__button ${this.checkPointer ? "pointer" : ""}`}
        >
          + Add card
        </button>
        <select
          className="ready__select"
          ref={this.selectRef}
          onChange={this.handleSelect}
        >
          <option></option>
          {cards.map((backlogItem) => {
            if (backlogItem.status === "backlog") {
              return (
                <option
                  key={backlogItem.id}
                  id={backlogItem.id}
                  className="backlog__cards-item"
                >
                  {backlogItem.name}
                </option>
              );
            }
          })}
        </select>
      </div>
    );
  }
}

export default Ready;
