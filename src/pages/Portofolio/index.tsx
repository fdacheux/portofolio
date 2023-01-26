import Gallery from "../../components/Gallery";
import style from "./Portofolio.module.scss";

function Portofolio() {
  return <main className={style.portofolio}>
    <div className={style.titleBox}>
      <h1 className={style.titleBox__text}>Portofolio</h1>
    </div>
    <Gallery />
  </main>
}

export default Portofolio;
