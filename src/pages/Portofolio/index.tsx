import { ThemeProvider, createTheme } from "@mui/material";
import Gallery from "../../components/Gallery";
import style from "./Portofolio.module.scss";
import PagesTitle from "../../components/PagesTitle";



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
        <PagesTitle title="Portofolio" />
        <Gallery />
      </ThemeProvider>
    </main>
  );
}

export default Portofolio;
