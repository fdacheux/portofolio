import { ThemeProvider, createTheme } from "@mui/material";
import Gallery from "../../components/Gallery";
import style from "./Portofolio.module.scss";
import { WheelEventHandler, useState } from "react";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
  },
});

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true;
  }
}

function Portofolio() {

  // // const [previousPos, setPos] = useState(window.scrollY);
  // const [scrollTop, setScrollTop] = useState(0);
  // const [isDisplayed, setDisplay] = useState(true)

  // let previousPos = window.scrollY;

  // const handleScroll = (e:  React.WheelEvent<HTMLElement>) : void | undefined=> {
  //   console.log(window.scrollY > previousPos);
  //   e.deltaY < 0 ? setDisplay(true) : setDisplay(false);
  //   setScrollTop(window.scrollY);
  //   // setPos(window.scrollY)
  //   previousPos = window.scrollY;
  //   console.log(e.deltaY);
  // };

  return (
    <main className={style.portofolio}>
      <ThemeProvider theme={theme}>
        <div className={style.titleBox}>
          <h1 className={style.titleBox__text} >Portofolio</h1>
        </div>
        <Gallery />
      </ThemeProvider>
    </main>
  );
}

export default Portofolio;
