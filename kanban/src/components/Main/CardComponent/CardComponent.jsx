import React from "react";
import "./CardComponent.css";

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.selectRef = React.createRef();
    this.inputRef = React.createRef();
    this.submitRef = React.createRef();
  }

  handleBacklogClick = (e) => {
    const { refProp } = this.props;

    refProp.current.classList.toggle("isActive");
    e.target.classList.toggle("isHidden");
    this.submitRef.current.classList.toggle("isActive");
  };

  handleClick = () => {
    this.selectRef.current.classList.toggle("activeSelect");
  };

  handleSelect = (e) => {
    const { cards, title } = this.props;
    const selectedId = e.target.selectedOptions[0].id;

    let newCards = [...cards];
    let bufCardsArray = newCards.map((cardsItem) => {
      if (cardsItem.id == selectedId) {
        cardsItem.status = title;
        console.log(typeof selectedId);
      }
    });
    this.setState({ cards: bufCardsArray });
  };

  checkPointer = () => {
    const { cards, selectedTitle } = this.props;
    let counter = null;
    cards.forEach((cardsItem) => {
      if (cardsItem.status === selectedTitle) {
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
    const { cards, title, selectedTitle } = this.props;

    let backlogButton, notBacklogButton;
    if (title === "Backlog") {
      backlogButton = (
        <>
          <input
            type="text"
            onChange={(e) => this.props.onChange(e)}
            placeholder="Enter card title"
            ref={this.props.refProp}
            className="backlog__input"
          />
          <button onClick={this.handleBacklogClick} className="backlog__button">
            + Add card
          </button>
          <button
            onClick={(e) => this.props.onClick(e)}
            className="backlog__submit"
            type="submit"
            ref={this.submitRef}
          >
            Submit
          </button>
        </>
      );
      notBacklogButton = "";
    } else {
      backlogButton = "";
      notBacklogButton = (
        <>
          <button
            onClick={this.handleClick}
            className={`cardComponent__button ${
              this.checkPointer ? "pointer" : ""
            }`}
          >
            + Add card
          </button>

          <select
            className="cardComponent__select"
            ref={this.selectRef}
            onChange={(e) => this.props.handleSelect(e, title)}
          >
            <option></option>
            {cards.map((cardsItem) => {
              if (cardsItem.status === selectedTitle) {
                return (
                  <option
                    key={cardsItem.id}
                    id={cardsItem.id}
                    className="cardComponent__cards-item"
                  >
                    {cardsItem.name}
                  </option>
                );
              }
            })}
          </select>
        </>
      );
    }

    return (
      <div className="cardComponent">
        <div className="cardComponent__title">{title}</div>
        <ul className="cardComponent__cards">
          {cards.map((cardsItem) => {
            /*  console.log(cardsItem.status); */
            if (cardsItem.status === title) {
              return (
                <li key={cardsItem.id} className="cardComponent__cards-item">
                  {cardsItem.name}
                </li>
              );
            }
          })}
        </ul>

        {/* для компонента BACKLOG */}
        {backlogButton}
        {/* для компонента BACKLOG */}

        {/* для компонентов READY IN-PROGRESS FINISHED */}
        {notBacklogButton}
        {/* для компонентов READY IN-PROGRESS FINISHED */}
      </div>
    );
  }
}

export default CardComponent;
