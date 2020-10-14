import React from "react";

import "./Header.css";

const Header = (props) => {
  //  return (
  // filter and map
  return (
    <header>
      {props.participants
        .filter((person) => {
          if (person.username !== props.currentUser.username) {
            return true;
          } else {
            return false;
          }
        })
        .map((user) => {
          return (
            <div className="iconWrapper">
              <img className="avatarH" src={user.avatar} />
              <p className="userNameH">{user.username}</p>
            </div>
          );
        })}
    </header>
  );
};

export default Header;
