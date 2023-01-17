import style from "./LandingPage.module.scss";

function LandingPage() {
  return (
    <div className={style.mondrianLandingPage}>
      <div className="block1">
        <div className="nestedBlock1">
          <div className="separation"></div>
        </div>
        <div className="nested-block2">
          <div className="separation"></div>
        </div>
        <div className="nested-block3">
          <div className="separation"></div>
        </div>
        <div className="nested-block4">
          <p>Switch style :</p>
          <a href=""> Kasuma/Murakami</a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
