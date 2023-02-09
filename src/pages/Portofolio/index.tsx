import { ThemeProvider, createTheme } from "@mui/material";
import Gallery from "../../components/Gallery";
import style from "./Portofolio.module.scss";



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
  

  return (
    <main className={style.portofolio}  >
      <ThemeProvider theme={theme}>
        <div className={`${style.titleBox} ${style.goldenPlaque}`}>
          <h1 className={style.titleBox__text} >Portofolio</h1>
        </div>
        <Gallery />
      </ThemeProvider>
    </main>
  );
}

export default Portofolio;
