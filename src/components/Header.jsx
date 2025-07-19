import React from "react";
import OffcanvasMenu from "./OffcanvasMenu";

const Header = ({ title }) => {
  return (
    <>
      <header>
        <h3 className='title'>{title}</h3>
        <OffcanvasMenu />
      </header>
    </>
  );
};

export default Header;
