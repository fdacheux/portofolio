import style from "./Loader.module.scss";
import monaLisa from "../../assets/sepia-mona-lisa.png";
import landscape from "../../assets/landscape.png";
import girlWithAPearl from "../../assets/pearl.png";
import contemporaryArt from "../../assets/loader-paint-1.png";

function Loader() {
  return (
    <div className={style.loaderContent}>
      <div className={style.loader}>
        <div className={style.imgBox}>
          <img src={contemporaryArt} alt="" className={`${style.paint}`} />
        </div>
        <div className={`${style.imgBox} ${style.imgBox__portrait}`}>
          <img src={monaLisa} alt="" className={`${style.paint}`} />
        </div>
        <div className={style.imgBox}>
          <img src={landscape} alt="" className={`${style.paint}`} />
        </div>
        <div className={style.imgBox}>
          <img src={girlWithAPearl} alt="" className={`${style.paint}`} />
        </div>
        <div className={`${style.imgBox} ${style.imgBox__portrait}`}>
          <img src={contemporaryArt} alt="" className={`${style.paint}`} />
        </div>
        <div className={style.imgBox}>
          <img src={monaLisa} alt="" className={`${style.paint}`} />
        </div>
        <div className={style.imgBox}>
          <img src={landscape} alt="" className={`${style.paint}`} />
        </div>
        <div className={`${style.imgBox} ${style.imgBox__portrait}`}>
          <img src={girlWithAPearl} alt="" className={`${style.paint}`} />
        </div>
        <div className={`${style.imgBox} ${style.imgBox__portrait}`}>
          <img src={contemporaryArt} alt="" className={`${style.paint}`} />
        </div>
        <div className={style.imgBox}>
          <img src={monaLisa} alt="" className={`${style.paint}`} />
        </div>
        <div className={style.imgBox}>
          <img src={landscape} alt="" className={`${style.paint}`} />
        </div>
        <div className={`${style.imgBox} ${style.imgBox__portrait}`}>
          <img src={girlWithAPearl} alt="" className={`${style.paint}`} />
        </div>
          </div>
          <div className={style.text}>
              <p>Salle du musée en préparation...</p>
          </div>
    </div>
  );
}

export default Loader;
