import { useCallback, useState } from "react";
import style from "./MondrianPage.module.scss";
import { Palette, MeetingRoom, InfoOutlined, AssignmentInd } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface IMondrianPageProps {
  changeStyle: (style: string) => void;
}

function MondrianPage({ changeStyle }: IMondrianPageProps) {
  const [textDisplayed, setDisplay] = useState(true);
  const [linkDisplayed, setLinkDisplay] = useState(false);
  const [isActive, setActive] = useState(false);

  const handleLink = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    changeStyle("Kusama");
  };

  const changeDisplay = useCallback(() => {
    setDisplay(!textDisplayed);
    setLinkDisplay(!linkDisplayed);
    setActive((prevStatus) => !prevStatus);
  }, [isActive]);

  return (
    <main className={style.mondrianLandingPage}>
      <div className={style.block1}>
        <div className={style.b1nestedBlock1}>
          <div className={style.b1nested1Block1}>
            <div className={style.homepageBox}>
              <Link to="/home" className={style.homepageLink}>
                <div className={style.homepageLink__content}>
                  <MeetingRoom className={style.homepageLink__icon} />
                  <span className={style.homepageLink__text}>Entrer</span>
                </div>
              </Link>
            </div>
          </div>
          <div className={style.b1nested1Block2}></div>
          <div className={style.b1nested1Block3}></div>
          <div
            className={style.switchStyleBox}
            onMouseEnter={changeDisplay}
            onMouseLeave={changeDisplay}
          >
            <div className={style.switchStyle}>
              {!isActive && (
                <p className={textDisplayed ? style.caseTitle : style.hidden}>
                  Switch style
                </p>
              )}
              {isActive && (
                <button
                  className={linkDisplayed ? style.switchButton : style.hidden}
                  onClick={handleLink}
                >
                  Kusama<span className={style.noXsmallScreen}>/Murakami</span>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className={style.b1nestedBlock2}>
          <div className={style.b1nested2Block1}>
            <div className={style.b1nested2b1Cell1}></div>
            <div className={style.b1nested2b1Cell2}></div>
            <div className={style.aboutBox}>
              <Link to="/about" className={style.aboutLink}>
                <div className={`${style.aboutLink__content} ${style.defilingTxt}`}>
                  <InfoOutlined className={style.aboutLink__icon} fontSize="medium" />
                  <p className={style.aboutLink__txt}>
                    About
                    <span className={style.noXsmallScreen}> this site</span>
                  </p>
                </div>
                <div className={`${style.aboutLink__content2} ${style.defilingTxt}`}>
                  <InfoOutlined className={style.aboutLink__icon} fontSize="medium" />
                  <p className={style.aboutLink__txt}>
                    About
                    <span className={style.noXsmallScreen}> this site</span>
                  </p>
                </div>
                <div className={`${style.aboutLink__content3} ${style.defilingTxt}`}>
                  <InfoOutlined className={style.aboutLink__icon} fontSize="medium" />
                  <p className={style.aboutLink__txt}>
                    About
                    <span className={style.noXsmallScreen}> this site</span>
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className={style.b1nested2Block2}>
            <div className={style.b1nested2b2nestedBlock1}>
              <div className={style.titleBlock}>
                <h1 className={`${style.landingPageTitle}`}>Fanny Dacheux</h1>
                <h2 className={`${style.landingPageSubtitle}`}>
                  Développeuse fullstack JS
                </h2>
              </div>
              <div className={style.b1nested2b2nested1Block1}>
                <div className={style.b1nested2b2nested1Block1Line1}>
                  <div className={style.b1nested2b2nested1Block1Cell1}></div>
                  <div className={style.b1nested2b2nested1Block1Cell2}></div>
                </div>
                <div className={style.portofoliobox}>
                  <Link to="/portofolio" className={style.portofoliobox__Link}>
                    <Palette className={style.portofoliobox__icon} />
                    <span className={style.portofoliobox__txt}>Portofolio</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className={style.b1nested2b2nestedBlock2}>
              <div className={style.b1nested2b2nested2Col1}>
                <div className={style.b1nested2b2nested2C1Line1}></div>
                <div className={style.b1nested2b2nested2C1Line2}></div>
              </div>

              <div className={style.b1nested2b2nested2Col2}>
                <div className={style.b1nested2b2nested2C2Line1}>
                  <div className={style.separationCentered}></div>
                </div>
                <div className={style.b1nested2b2nested2C2Line2}>
                  <div className={style.b1nested2b2nested2C2L2Col1}>
                    <div className={style.cvBox}>
                      <div className={style.cvLink__content}>
                        <Link to="/cv" className={style.cvLink}>
                          <div className={style.cvLink__content}>
                            <AssignmentInd className={style.cvLink__icon} />
                            <span className={style.cvLink__txt}>CV</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className={style.b1nested2b2nested2C2L2Cell2}></div>
                  </div>
                  <div className={style.b1nested2b2nested2C2L2Col2}></div>
                </div>
                <div className={style.b1nested2b2nested2C2Line3}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.block2}>
        <div className={style.b2nestedBlock1}></div>
        <div className={style.b2nestedBlock2}></div>
      </div>
    </main>
  );
}

export default MondrianPage;
