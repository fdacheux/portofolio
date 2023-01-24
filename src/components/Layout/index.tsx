import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import style from "./Layout.module.scss";

function Layout() {
  return (
    <>
      <Header />
      <div className={style.layout}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
