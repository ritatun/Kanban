import React from "react";
import "./Finished.css";

class Finished extends React.Component {
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
        cardsItem.status = "finished";
      }
    });
    this.setState({ cards: bufCardsArray });
    console.log("select");
  };

  render() {
    const { cards } = this.props;

    return (
      <div className="finished">
        <div className="finished__title">Finished</div>
        <ul className="finished__cards">
          {cards.map((finishedItem) => {
            if (finishedItem.status === "finished") {
              return (
                <li key={finishedItem.id} className="finished__cards-item">
                  {finishedItem.name}
                </li>
              );
            }
          })}
        </ul>

        <button onClick={this.handleClick} className="finished__button">
          + Add card
        </button>
        <select
          className="finished__select"
          ref={this.selectRef}
          onChange={this.handleSelect}
        >
          <option></option>
          {cards.map((progressItem) => {
            if (progressItem.status === "progress") {
              return (
                <option
                  key={progressItem.id}
                  id={progressItem.id}
                  className="progress__cards-item"
                >
                  {progressItem.name}
                </option>
              );
            }
          })}
        </select>
      </div>
    );
  }
}

export default Finished;
