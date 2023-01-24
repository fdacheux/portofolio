import { useCallback, useState } from "react";
import style from "./LandingPage.module.scss";
import KasumaPage from "./Kusama";
import MondrianPage from "./Mondrian";

function LandingPage() {
  const [styleName, setStyle] = useState("Kasuma");
  const changeStyle = (styleName: string) => {
    setStyle(styleName);
  };

  return (
    <>
      {styleName === "Kusama" ? (
         <KasumaPage changeStyle={changeStyle} /> 
       ) : ( 
        <MondrianPage changeStyle={changeStyle} />
       )} 
    </>
  );
}

export default LandingPage;
