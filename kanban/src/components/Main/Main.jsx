import React from "react";
import "./Main.css";
import CardComponent from "./CardComponent/CardComponent";

class Main extends React.Component {
  /* constructor(props) {
    super(props);
  } */

  render() {
    const { onChange, onClick, cards, refProp, submitRef, value } = this.props;

    return (
      <main className="main">
        <CardComponent
          cards={cards}
          title="Backlog"
          name="Backlog"
          onChange={onChange}
          onClick={onClick}
          refProp={refProp}
          submitRef={submitRef}
          value={value}
        />
        <CardComponent
          cards={cards}
          title="Ready"
          name="Ready"
          selectedTitle="Backlog"
          handleSelect={this.props.handleSelect}
        />
        <CardComponent
          cards={cards}
          title="Progress"
          name="In Progress"
          selectedTitle="Ready"
          handleSelect={this.props.handleSelect}
        />
        <CardComponent
          cards={cards}
          title="Finished"
          name="Finished"
          selectedTitle="Progress"
          handleSelect={this.props.handleSelect}
        />
      </main>
    );
  }
}

export default Main;
