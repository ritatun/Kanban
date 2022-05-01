import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  countTasks = (status) => {
    let numberOfTasks = 0;
    this.props.cards.forEach((cardsItem) => {
      if (cardsItem.status === status) {
        numberOfTasks++;
      }
    });
    return numberOfTasks;
  };

  render() {
    const { cards } = this.props;
    let activaTasks = this.countTasks("backlog");
    let finishedTasks = this.countTasks("finished");

    return (
      <footer className="footer">
        <div className="footer__counter">
          <div className="footer__counter-active">
            Active tasks: {activaTasks}
          </div>
          <div>Finished tasks: {finishedTasks}</div>
        </div>
        <div>Kanban board by Ritatun, 2022</div>
      </footer>
    );
  }
}

export default Footer;
