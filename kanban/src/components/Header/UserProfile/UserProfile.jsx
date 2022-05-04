import React from "react";
import "./UserProfile.css";
import Avatar from "./Vector.png";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const OpenSttngs = (
      <div
        className="user-profile__button open-sttngs"
        onClick={this.handleClick}
      >
        <div> &#8743;</div>
        <div className="popup">
          <div className="profile">Profile</div>
          <div className="log-out">Log Out</div>
        </div>
      </div>
    );
    const CloseSttngs = (
      <div
        className="user-profile__button close-sttngs"
        onClick={this.handleClick}
      >
        &#8744;
      </div>
    );

    return (
      <div className="user-profile">
        <div className="user-profile__avatar" onClick={this.handleClick}>
          <img
            className="user-profile__avatar-image"
            src={Avatar}
            alt="user avatar"
          />
        </div>
        {this.state.isOpen ? OpenSttngs : CloseSttngs}
      </div>
    );
  }
}

export default UserProfile;
