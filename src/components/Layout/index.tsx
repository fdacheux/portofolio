import style from "./Layout.module.scss";
import Footer from "../Footer";
import Header from "../Header";

function Layout() {
  return (
      <div className={style.layout}>
          <Header />
          <Footer />
    </div>
  );
}

export default Layout;
