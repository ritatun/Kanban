import React from "react";
import "./styles.css";
import "./App.css";
import { getRandomId } from "./utils/utils";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import CardDescription from "./components/CardDescription/CardDescription";
import NotFound from "./components/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.submitRef = React.createRef();

    this.state = {
      value: "",
      cards: [],
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

    /* if (!this.state.value) {
      this.submitRef.current.style.cursor = "default";
    } */
  }

  handleInputChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmitClick = (e) => {
    e.preventDefault();
    const { value, cards } = this.state;

    if (value) {
      let newCard = {
        id: getRandomId(),
        name: value,
        description: "This task has no description",
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

    let newCards = [...cards];
    let bufCardsArray = newCards.map((cardsItem) => {
      if (cardsItem.id === selectedId) {
        cardsItem.status = cardTitle;
      }
      return cardsItem;
    });

    this.setState({ cards: bufCardsArray });

    const selectors = document.querySelectorAll(".cardComponent__select");
    selectors.forEach((selectorsItem) => {
      if (selectorsItem.className.includes(cardTitle))
        selectorsItem.classList.remove("activeSelect");
    });
  };

  handleDescChange = (e, id) => {
    let newCards = this.state.cards;
    newCards.forEach((newCardsItem) => {
      if (newCardsItem.id === id) {
        newCardsItem.description = e.target.value;
      }
      return newCardsItem;
    });
    this.setState({ cards: newCards });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <Routes>
          <Route
            path=""
            element={
              <Main
                className="main-component"
                refProp={this.inputRef}
                submitRef={this.submitRef}
                onChange={this.handleInputChange}
                onClick={this.handleSubmitClick}
                cards={this.state.cards}
                value={this.state.value}
                handleSelect={this.handleSelect}
              />
            }
          ></Route>
          <Route
            path="/tasks/:cardID"
            element={
              <CardDescription
                cards={this.state.cards}
                handleDescChange={this.handleDescChange}
              />
            }
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
