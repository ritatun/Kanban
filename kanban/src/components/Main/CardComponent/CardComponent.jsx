import React from "react";
import "./CardComponent.css";
import { Link } from "react-router-dom";

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.selectRef = React.createRef();
    this.inputRef = React.createRef();
    this.state = {
      isDisabled: false,
    };
  }

  handleBacklogClick = (e) => {
    const { refProp, submitRef } = this.props;

    refProp.current.classList.toggle("isActive");
    e.target.classList.toggle("isHidden");
    submitRef.current.classList.toggle("isActive");
  };

  handleClick = () => {
    this.selectRef.current.classList.toggle("activeSelect");
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

  checkPrevCards = ([cards], selectedTitle) => {
    let flag = 0;
    cards.map((cardsItem) => {
      if (cardsItem.status === selectedTitle) {
        flag++;
      }
    });
    return flag;
  };

  componentDidMount() {
    if (this.props.title !== "Backlog") {
      const { cards, selectedTitle } = this.props;

      const isDisabledBtn = this.checkPrevCards([cards], selectedTitle);
      this.setState({ isDisabled: !isDisabledBtn });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cards !== this.props.cards) {
      if (this.props.title !== "Backlog") {
        const { cards, selectedTitle } = this.props;

        const isDisabledBtn = this.checkPrevCards([cards], selectedTitle);
        this.setState({ isDisabled: !isDisabledBtn });
      }
    }
  }

  render() {
    const { cards, name, title, selectedTitle, submitRef } = this.props;

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
            ref={submitRef}
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
            disabled={this.state.isDisabled}
            className={`cardComponent__button ${
              this.checkPointer ? "pointer" : ""
            }`}
          >
            + Add card
          </button>

          <select
            className={`cardComponent__select ${title}`}
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
        <div className="cardComponent__title">{name}</div>
        <div className="cardComponent__cards">
          {cards.map((cardsItem) => {
            if (cardsItem.status === title) {
              return (
                <Link
                  to={`/tasks/${cardsItem.id}`}
                  key={cardsItem.id}
                  className="cardComponent__cards-link"
                >
                  {cardsItem.name}
                </Link>
              );
            }
          })}
        </div>

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
