import style from "./Curriculum.module.scss";
import PagesTitle from "../../components/PagesTitle";
import UnderConstruction from "../../components/UnderConstruction";

function Curriculum() {
  return (
    <main className={style.curriculum}>
      <PagesTitle title="Curriculum vitae" />
      <UnderConstruction />
    </main>
  );
}

export default Curriculum;
