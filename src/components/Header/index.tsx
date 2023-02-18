import { useCallback, useState } from "react";
import logo from "../../assets/logo.png";
import style from "./Header.module.scss";

function Header({ className }: any) {
 
  return (
      <header className={className === "hidden" ? `${style.header} ${style.isHidden}` : style.header}>
        <div className={style.imgContainer}>
          <img src={logo} alt="lady(no)bug logo" className={style.logo} />
        </div>
      </header>
    
  );
}

export default Header;
