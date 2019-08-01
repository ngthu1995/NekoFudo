import React from "react";
import logo from "../../img/logo.png";
import "./Navbar.css";
import Menu from "react-burger-menu/lib/menus/slide";
import styles from "../../util/BurgerStyles.js";

const Navbar = () => {
  return (
    <div className="app-container">
      <div className="image-container">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
      </div>
      <div className="title-container">
        <a className="title" href="/">
          NekoFudo
        </a>
      </div>
      <div className="route-container">
        <div className="routes">
          <div className="burger">
            <Menu
              burgerButtonClassName={"burger-button"}
              crossButtonClassName={"cross-button"}
              width={"100%"}
              styles={styles}
              right
            >
              <a href="/">Login</a>
              <a href="/">Signup</a>
            </Menu>
          </div>
          <div className="no-burger">
            <a href="/">Login</a>
            <a href="/">Signup</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
