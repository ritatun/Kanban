import React from "react";
import "./Backlog.css";

class Backlog extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.submitRef = React.createRef();
  }

  handleClick = (e) => {
    const { refProp } = this.props;

    refProp.current.classList.toggle("isActive");
    e.target.classList.toggle("isHidden");
    this.submitRef.current.classList.toggle("isActive");
  };

  render() {
    const { cards, refProp, onChange, onClick } = this.props;

    return (
      <div className="backlog">
        <div className="backlog__title">Backlog</div>
        <ul className="backlog__cards">
          {cards.map((backlogItem) => {
            if (backlogItem.status === "backlog") {
              return (
                <li key={backlogItem.id} className="backlog__cards-item">
                  {backlogItem.name}
                </li>
              );
            }
          })}
        </ul>

        <input
          type="text"
          onChange={(e) => onChange(e)}
          placeholder="Enter card title"
          ref={refProp}
          className="backlog__input"
        />
        <button onClick={this.handleClick} className="backlog__button">
          + Add card
        </button>
        <button
          onClick={(e) => onClick(e)}
          className="backlog__submit"
          type="submit"
          ref={this.submitRef}
        >
          Submit
        </button>
      </div>

      /* <div className="backlog">
        <div className="backlog__title">Backlog</div>
        <ul className="backlog__cards">
          {cards.map((cardsItem) => (
            <li key={cardsItem} className="backlog__cards-item">
              {cardsItem}
            </li>
          ))}
        </ul>
        <input
          type="text"
          onChange={(e) => this.handleChange(e)}
          placeholder="Enter card title"
          ref={this.inputRef}
          className="backlog__input"
        />
        <button onClick={this.handleClick} className="backlog__button">
          + Add card
        </button>
      </div> */
    );
  }
}

export default Backlog;
