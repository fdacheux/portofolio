import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import style from "./Layout.module.scss";
import { useState } from "react";

function Layout() {

    // const [previousPos, setPos] = useState(window.scrollY);
    const [scrollTop, setScrollTop] = useState(0);
    const [isDisplayed, setDisplay] = useState(true)
  
    let previousPos = window.scrollY;
  
    const handleScroll = (e:  React.WheelEvent<HTMLElement>) : void | undefined=> {
      console.log(window.scrollY > previousPos);
      e.deltaY < 0 ? setDisplay(true) : setDisplay(false);
      setScrollTop(window.scrollY);
      // setPos(window.scrollY)
      previousPos = window.scrollY;
      console.log(e.deltaY);
    };
  
  return (
    <div onWheel={handleScroll}>
      <Header className={isDisplayed ? '' : 'hidden'} />
      <div className={style.layout} >
        <Outlet  />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
