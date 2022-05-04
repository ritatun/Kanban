import React from "react";
import "./CardDescription.css";
import { Link } from "react-router-dom";

class CardDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }

  componentDidMount() {
    const path = window.location.pathname;
    const id = +path.slice(7);
    this.setState({ id: id });
  }

  render() {
    const { handleDescChange, cards } = this.props;

    return (
      <>
        {cards.map((cardsItem) => {
          if (cardsItem.id === this.state.id) {
            return (
              <div className="card-description" key={cardsItem.id}>
                <div className="card-description__container">
                  <div className="card-description__header">
                    <h1 className="card-description__title">
                      {cardsItem.name}
                    </h1>
                    <Link to="/" className="card-description__close">
                      &times;
                    </Link>
                  </div>

                  <textarea
                    value={cardsItem.description}
                    placeholde="placeholder text"
                    onChange={(e) => handleDescChange(e, this.state.id)}
                    className="card-description__body"
                  />
                </div>
              </div>
            );
          }
        })}
      </>
    );
  }
}

export default CardDescription;
