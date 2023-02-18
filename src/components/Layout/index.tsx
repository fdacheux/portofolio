import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import style from "./Layout.module.scss";
import { useCallback, useEffect, useState } from "react";

function Layout() {
  const [scrollTop, setScrollTop] = useState(0);
  const [isDisplayed, setDisplay] = useState(true);

  const onScroll = useCallback(() => {
    let previous = window.scrollY;
    setScrollTop(window.scrollY);
    if (previous < scrollTop) {
      setDisplay(true);
      previous = scrollTop;
    } else if (previous > scrollTop) {
      setDisplay(false);
      previous = scrollTop;
    }
  }, [scrollTop, setScrollTop]);

  useEffect(() => {
    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);


  return (
    <div
    >
      <Header className={isDisplayed ? "" : "hidden"} />
      <div className={style.layout}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
