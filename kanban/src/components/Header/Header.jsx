import React from "react";
import "./Header.css";
import UserProfile from "./UserProfile/UserProfile";
import { Link } from "react-router-dom";

class Header extends React.Component {
  /* constructor(props) {
    super(props);
  } */

  render() {
    return (
      <header className="header">
        <Link to="/" className="header__link">
          Awesome Kanban Board
        </Link>
        <UserProfile />
      </header>
    );
  }
}

export default Header;
