import React from "react";
import "./InProgress.css";

class InProgress extends React.Component {
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
        cardsItem.status = "progress";
      }
    });
    this.setState({ cards: bufCardsArray });
    console.log("select");
  };

  render() {
    const { cards } = this.props;

    return (
      <div className="progress">
        <div className="progress__title">In progress</div>
        <ul className="progress__cards">
          {cards.map((progressItem) => {
            if (progressItem.status === "progress") {
              return (
                <li key={progressItem.id} className="progress__cards-item">
                  {progressItem.name}
                </li>
              );
            }
          })}
        </ul>

        <button onClick={this.handleClick} className="progress__button">
          + Add card
        </button>
        <select
          className="progress__select"
          ref={this.selectRef}
          onChange={this.handleSelect}
        >
          <option></option>
          {cards.map((readyItem) => {
            if (readyItem.status === "ready") {
              return (
                <option
                  key={readyItem.id}
                  id={readyItem.id}
                  className="ready__cards-item"
                >
                  {readyItem.name}
                </option>
              );
            }
          })}
        </select>
      </div>
    );
  }
}

export default InProgress;
