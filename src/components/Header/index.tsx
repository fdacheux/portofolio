import logo from "../../assets/logo.png";
import style from "./Header.module.scss";

function Header() {
  return (
      <header className={style.header}>
        <div className={style.imgContainer}>
          <img src={logo} alt="lady(no)bug logo" className={style.logo} />
        </div>
      </header>
    
  );
}

export default Header;
