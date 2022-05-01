import React from "react";
import "./styles.css";
import "./App.css";
import { getRandomId } from "./utils/utils";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import CardDescription from "./components/CardDescription/CardDescription";
import { Routes, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      value: "",
      cards: [
        /* {
          description: "",
          id: 123,
          name: "Backlog 1 Backl ogBa cklogBacklog BacklogBacklog",
          status: "Backlog",
        },
        { description: "", id: 42452, name: "Backlog 2", status: "Backlog" },
        { description: "", id: 522, name: "Ready 1", status: "Ready" },
        { description: "", id: 2, name: "Ready 2", status: "Ready" },
        {
          description: "",
          id: 5252,
          name: "Progress 1",
          status: "In Progress",
        },
        {
          description: "",
          id: 425222,
          name: "Progress 2",
          status: "In Progress",
        },
        { description: "", id: 522222, name: "Finished 1", status: "Finished" },
        { description: "", id: 542, name: "Finished 2", status: "Finished" }, */
      ],
    };
  }

  componentDidMount() {
    const localCards = localStorage.getItem("localCards");
    const getlocalCards = JSON.parse(localCards);
    if (getlocalCards) {
      this.setState({ cards: getlocalCards });
    }
  }

  componentDidUpdate() {
    const { cards } = this.state;
    const setLocalCards = JSON.stringify(cards);
    localStorage.setItem("localCards", setLocalCards);
  }

  handleInputChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmitClick = (e) => {
    e.preventDefault();
    console.log(e);
    const { value, cards } = this.state;

    if (value) {
      let newCard = {
        id: getRandomId(),
        name: value,
        description: "",
        status: "Backlog",
      };
      let newCards = [...cards, newCard];
      this.setState({ value: "", cards: newCards });
      this.inputRef.current.value = "";
    }
  };

  handleSelect = (e, cardTitle) => {
    const { cards } = this.state;

    const selectedId = Number(e.target.selectedOptions[0].id);
    console.log(typeof selectedId);

    let newCards = [...cards];
    console.log(newCards);
    let bufCardsArray = newCards.map((cardsItem) => {
      if (cardsItem.id === selectedId) {
        cardsItem.status = cardTitle;
      }
      return cardsItem;
    });
    console.log(bufCardsArray);

    this.setState({ cards: bufCardsArray });
  };

  handleDescChange = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div className="app">
        <Header />

        <Main
          className="main-component"
          refProp={this.inputRef}
          onChange={this.handleInputChange}
          onClick={this.handleSubmitClick}
          cards={this.state.cards}
          handleSelect={this.handleSelect}
        />
        {/* <CardDescription
          cards={this.state.cards}
          handleDescChange={this.handleDescChange}
        /> */}
        <Footer cards={this.state.cards} />
        {/* <Routes>
          <Route path="" element={<Main />} />
          <Route path=":cardId" element={<CardDescription />} />
        </Routes> */}
      </div>
    );
  }
}

export default App;
