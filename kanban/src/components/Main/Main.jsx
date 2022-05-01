import React from "react";
import "./Main.css";
/* import Backlog from "./Backlog/Backlog";
import Finished from "./Finished/Finished";
import InProgress from "./InProgress/InProgress";
import Ready from "./Ready/Ready"; */
import CardComponent from "./CardComponent/CardComponent";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      onChange,
      onClick,
      cards,
      refProp,
      /* ready,
      selectReady,
      selectedTitle, */
    } = this.props;

    return (
      <div className="main">
        {/* <Backlog
          onChange={onChange}
          onClick={onClick}
          cards={cards}
          refProp={refProp}
        />
        <Ready cards={cards} />
        <InProgress cards={cards} />
        <Finished cards={cards} /> */}
        <CardComponent
          cards={cards}
          title="Backlog"
          onChange={onChange}
          onClick={onClick}
          refProp={refProp}
        />
        <CardComponent
          cards={cards}
          title="Ready"
          selectedTitle="Backlog"
          handleSelect={this.props.handleSelect}
        />
        <CardComponent
          cards={cards}
          title="In Progress"
          selectedTitle="Ready"
          handleSelect={this.props.handleSelect}
        />
        <CardComponent
          cards={cards}
          title="Finished"
          selectedTitle="In Progress"
          handleSelect={this.props.handleSelect}
        />
      </div>
    );
  }
}

export default Main;
