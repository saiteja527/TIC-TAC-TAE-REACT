import React from "react";
import Image from '../assets/game-logo.png'
const Header = () => {
  return (
    <>
      <header>
        <img src={Image} alt="" />
        <h1>Tic-Tac-Toe</h1>
      </header>
    </>
  );
};

export default Header;
