import { useState } from "react";
import style from "./LandingPage.module.scss";
import KusamaPage from "./Kusama";
import MondrianPage from "./Mondrian";

function LandingPage() {
  const [styleName, setStyle] = useState("Kasuma");
  const changeStyle = (styleName: string) => {
    setStyle(styleName);
  };

  return (
    <>
      {styleName === "Kusama" ? (
         <KusamaPage changeStyle={changeStyle} /> 
       ) : ( 
        <MondrianPage changeStyle={changeStyle} />
       )} 
    </>
  );
}

export default LandingPage;
