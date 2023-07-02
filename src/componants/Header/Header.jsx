import React from "react";
import "./Header.css";
import OutsideClickHandler from "react-outside-click-handler";

import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <div>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <img src="./logo.png" alt="logo" width={100} />
          <OutsideClickHandler
            onOutsideClick={() => {
              setMenuOpened(false);
            }}
          >
            <div
              className=" flexCenter h-menu"
              style={getMenuStyles(menuOpened)}
            >
              <a href="">Recedancy</a>
              <a href="">Our values</a>
              <a href="">Contact US</a>
              <a href="">Get started </a>
              <button className="button">
                <a href="">Contact</a>
              </button>
            </div>
          </OutsideClickHandler>
          <div
            className="menu-icon"
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <GiHamburgerMenu size={30} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
