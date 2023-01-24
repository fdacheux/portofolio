import { useCallback, useState } from "react";
import style from "./MondrianTestPage.module.scss";

interface IMondrianPageProps {
  changeStyle: (style: string) => void;
}

function MondrianTestPage({ changeStyle }: IMondrianPageProps) {
  const [textDisplayed, setDisplay] = useState(true);
  const [linkDisplayed, setLinkDisplay] = useState(false);
  const [isActive, setActive] = useState(false);

  const handleLink = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    changeStyle("Mondrian");
  };

  const changeDisplay = useCallback(() => {
    setDisplay(!textDisplayed);
    setLinkDisplay(!linkDisplayed);
    setActive((prevStatus) => !prevStatus);
  }, [isActive]);

  return (
    <div className={style.mondrianLandingPage}>
      <div className={style.block1}>
        <div className={style.b1nestedBlock1}>
          <div className={style.b1nested1Block1}></div>
          <div className={style.b1nested1Block2}>
          </div>
          <div className={style.b1nested1Block3}>
          </div>
          <div
            className={style.b1nested1Block4}
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
              <a
                className={linkDisplayed ? style.switchButton : style.hidden}
                onClick={handleLink}
              >
                Kasuma/Murakami
              </a>
            )}
          </div>
            
          </div>
        </div>
        <div className={style.b1nestedBlock2}>
          <div className={style.b1nested2Block1}>
            <div className={style.b1nested2b1Cell1}></div>
            <div className={style.b1nested2b1Cell2}>
            </div>
            <div className={style.b1nested2b1Cell3}>
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
                  <div className={style.b1nested2b2nested1Block1Cell2}>
                  </div>
                </div>
                <div className={style.b1nested2b2nested1Block1Line2}>
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
                    <div className={style.b1nested2b2nested2C2L2Cell1}></div>
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
    
    </div>
  );
}

export default MondrianTestPage;
