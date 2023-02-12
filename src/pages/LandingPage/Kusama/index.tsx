import { useCallback, useState } from "react";
import style from "./KusamaPage.module.scss";
import { Link } from "react-router-dom";
import {
  Palette,
  MeetingRoom,
  MeetingRoomTwoTone,
  InfoOutlined,
  AssignmentInd,
} from "@mui/icons-material";

const isUnderConstruction = true;

interface IKasumaPageProps {
  changeStyle: (style: string) => void;
}

function KasumaPage({ changeStyle }: IKasumaPageProps) {
  const [iconDisplayed, setDisplay] = useState(true);
  const [linkDisplayed, setLinkDisplay] = useState(false);
  const [isActive, setActive] = useState(false);
  const [mondrianDisplayed, setMondrianDisplay] = useState(false);
  const [isBtnActive, setBtnActive] = useState(false);

  const handleLink = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    changeStyle("Mondrian");
  };

  const changeDisplay = useCallback(() => {
    setDisplay(!iconDisplayed);
    setLinkDisplay(!linkDisplayed);
    setActive((prevStatus) => !prevStatus);
  }, [isActive]);

  const changeBtnDisplay = useCallback(() => {
    setMondrianDisplay(!mondrianDisplayed);
    setBtnActive((prevStatus) => !prevStatus);
  }, [isBtnActive]);

  return (
    <main className={style.kusamaLandingPage}>
      <div className={style.themeBackground}>
        <div className={style.line}>
          <div className={style.col1}>
            <div className={`${style.line2} ${style.line2__1}`}></div>
            <div className={`${style.line2} ${style.line2__2}`}>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__bottomCenter}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot34}`}></div>
              </div>
              <div className={style.cell}></div>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__topRight}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot26}`}></div>
              </div>
              <div className={style.cell}></div>
            </div>
            <div className={`${style.line2} ${style.line2__3}`}>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__center}`}
              >
                <div
                  className={`${style.dotBox__dot} ${style.dot70} ${style.link}`}
                  onMouseEnter={changeDisplay}
                  onMouseLeave={changeDisplay}
                >
                  {isActive && (
                    <Link
                      to="/home"
                      className={`${style.tail} ${style.link__content}`}
                    >
                      <p className={style.link__text}>Entrer</p>
                    </Link>
                  )}
                  {!isActive && (
                    <MeetingRoomTwoTone
                      className={`${style.face} ${style.link__icon}`}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className={`${style.line2} ${style.line2__4}`}>
              <div className={style.cell}></div>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__bottomCenter}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot28}`}></div>
              </div>
              <div className={style.cell}></div>
              <div className={style.cell}></div>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__bottomLeft}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot20}`}></div>
              </div>
            </div>
          </div>
          <div className={style.col2}>
            <div className={`${style.line2} ${style.line2__1}`}></div>
            <div className={`${style.line2} ${style.line2__6}`}>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__bottomLeft}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot48}`}></div>
              </div>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__topCenter}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot28}`}></div>
              </div>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__centerLeft}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot22}`}></div>
              </div>
            </div>
            <div className={`${style.line2} ${style.line2__2}`}>
              <div className={style.cell}></div>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__topCenter}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot26}`}></div>
              </div>
              <div className={style.cell}></div>
              <div className={style.cell}></div>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__center}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot15}`}></div>
              </div>
            </div>
            <div className={`${style.line2}`}>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__bottomCenter}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot34}`}></div>
              </div>
              <div className={style.cell}></div>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__topCenter}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot40}`}></div>
              </div>
              <div className={style.cell}></div>
            </div>
          </div>
          <div className={style.col3}>
            <div className={`${style.line2} ${style.line2__1}`}></div>
            <div className={`${style.line2} ${style.line2__3}`}>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__centerLeft}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot28}`}></div>
              </div>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__bottomLeft}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot20}`}></div>
              </div>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__topLeft}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot28}`}></div>
              </div>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__bottomCenter}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot26}`}></div>
              </div>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__topCenter}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot34}`}></div>
              </div>
            </div>
            <div className={`${style.line2} ${style.line2__6}`}>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__bottomLeft}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot34}`}></div>
              </div>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__centerRight}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot52}`}></div>
              </div>
              <div className={style.cell}></div>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__bottomCenter}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot34}`}></div>
              </div>
            </div>
          </div>
          <div className={style.col4}>
            <div className={`${style.line2} ${style.line2__1}`}></div>
            <div className={`${style.line2} ${style.line2__2}`}>
              <div className={style.cell}></div>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__topcenter}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot22}`}></div>
              </div>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__bottomRight}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot28}`}></div>
              </div>
              <div className={style.cell}></div>
            </div>
            <div className={`${style.line2} ${style.line2__6}`}>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__centerRight}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot48}`}></div>
              </div>
              <div className={style.cell}></div>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__bottomCenter}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot34}`}></div>
              </div>
              <div className={style.cell}></div>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__center}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot22}`}></div>
              </div>
            </div>
            <div className={style.line2}>
              <div className={style.cell}></div>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__bottomCenter}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot15}`}></div>
              </div>
              <div className={style.cell}></div>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__center}`}
              >
                <div className={`${style.dotBox__dot} ${style.dot40}`}></div>
              </div>
              <div className={style.cell}></div>
            </div>
          </div>
          <div className={style.col5}>
            <div className={`${style.line2} ${style.line2__1}`}></div>
            <div className={`${style.line2} ${style.line2__4}`}>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__center}`}
              >
                <div
                  className={`${style.dotBox__dot} ${style.dot34} ${style.noLandscape}`}
                ></div>
              </div>
              <div className={style.cell}></div>
              <div className={style.cell}></div>
              <div className={style.cell}></div>
              <div className={style.cell}></div>
            </div>
            <div className={`${style.line2} ${style.line2__2}`}>
              <div className={style.cell}></div>
              <div className={style.cell}></div>
              <div className={style.cell}></div>
              <div className={style.cell}></div>
              <div className={style.cell}></div>
            </div>
            <div className={`${style.line2} ${style.line2__3}`}>
              <div
                className={`${style.cell} ${style.dotBox} ${style.dotBox__bottomLeft}`}
                onMouseEnter={changeBtnDisplay}
                onMouseLeave={changeBtnDisplay}
              >
                <button
                  onClick={handleLink}
                  className={`${style.dotBox__dot} ${style.dot80} ${style.styleButton}`}
                >
                  {!isBtnActive && (
                    <span className={style.styleButton__txt}>Style</span>
                  )}
                  {isBtnActive && (
                    <span
                      className={`${style.styleButton__txt} ${style.styleButton__mondrian}`}
                    >
                      Mondrian
                    </span>
                  )}
                </button>
              </div>
              <div className={style.cell}></div>
              <div className={style.cell}></div>
              <div className={style.cell}></div>
            </div>
          </div>
        </div>
        <div className={style.line}>
          <div className={style.col1}></div>
          <div className={style.col2}></div>
          <div className={style.col3}></div>
          <div className={style.col4}></div>
          <div className={style.col5}></div>
        </div>
        <div className={style.line}>
          <div className={style.col1}></div>
          <div className={style.col2}></div>
          <div className={style.col3}></div>
          <div className={style.col4}></div>
          <div className={style.col5}></div>
        </div>
        <div className={style.line}>
          <div className={style.col1}></div>
          <div className={style.col2}></div>
          <div className={style.col3}></div>
          <div className={style.col4}></div>
          <div className={style.col5}></div>
        </div>
        <div className={style.line}>
          <div className={style.col1}></div>
          <div className={style.col2}></div>
          <div className={style.col3}></div>
          <div className={style.col4}>
            {" "}
            <button onClick={handleLink} className={style.link}>
              {" "}
              Mondrian{" "}
            </button>
          </div>
          <div className={style.col5}></div>
        </div>
        </div>
      {/* <div className={style.titleBox}>
        <div className={style.ball}>
          
        <div className={style.ball__reflect1}>
          
          </div>
          <div className={style.ball__reflect2}>
          
          </div>
          <div className={style.ball__reflect3}>

          
          </div>
        </div>
        
      </div> */}
      
    </main>
  );
}

export default KasumaPage;
