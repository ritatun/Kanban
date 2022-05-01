import React from "react";
import "./Header.css";
import UserProfile from "./UserProfile/UserProfile";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <div className="header__title">Awesome Kanban Board</div>
        <UserProfile />
      </header>
    );
  }
}

export default Header;
