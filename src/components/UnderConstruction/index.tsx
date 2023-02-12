import style from "./UnderConstrution.module.scss";
import underConstruction from "../../assets/undraw_under_construction_-46-pa.svg";

function UnderConstruction() {
  return (
    <div className={style.underConstruction}>
      <p className={style.info}>
        Cette partie du musée est toujours en cours de construction...
      </p>
      <div className={style.illustration}>
        <img src={underConstruction} alt="" className={style.illustration__svg}/>
      </div>
      <div className={style.linksContainer}>
        <p className={`${style.linksText} ${style.smMdLgScreens}`}> En attendant vous pouvez ...</p>
        <ul className={style.links}>
          <li className={`${style.links__button} ${style.smMdLgScreens}`}>
            <a className={style.links__link} href="/portofolio">
              <span className={style.smMdLgScreens}>Visiter la gallerie</span>
            </a>
          </li>
          <li className={`${style.links__button} ${style.xsmallScreens}`}>
            <a className={style.links__link} href="/portofolio">
              <span className={style.xsmallScreens}>Gallerie</span>
            </a>
          </li>
          <li className={`${style.links__button} ${style.smMdLgScreens}`}>
            <a className={style.links__link} href="/">
              Retourner sur la landing page
            </a>
          </li>
          <li className={`${style.links__button} ${style.xsmallScreens}`}>
            <a className={style.links__link} href="/">
              Landing page
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UnderConstruction;
