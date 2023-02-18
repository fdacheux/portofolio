import style from "./Home.module.scss";
import PagesTitle from "../../components/PagesTitle";
import UnderConstruction from "../../components/UnderConstruction";

function Home() {
  return (
    <main className={style.home}>
        <PagesTitle title="Accueil" />
      <div>
        <UnderConstruction />
      </div>
    </main>
  );
}

export default Home;
