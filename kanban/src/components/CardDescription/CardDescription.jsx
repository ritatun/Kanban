import React from "react";
import "./CardDescription.css";

class CardDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleDescChange, cards } = this.props;

    return (
      <div className="card-description">
        <div className="card-description__container">
          <div className="card-description__header">
            <h1 className="card-description__title">TEST</h1>
            <div className="card-description__close">&times;</div>
          </div>

          <textarea
            /*  value={descValue} */
            onChange={(e) => handleDescChange(e)}
            className="card-description__body"
          />
        </div>
      </div>
    );
  }
}

export default CardDescription;
