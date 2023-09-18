import style from '../styles/mainpage.module.scss'
import { Navigation } from "../Components/Navigation";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { Fetching } from "../Components/Fetching";



export const MainPage = () => {
  return (
    <>
      <Navigation />
      <Header />
      <h2 className={style.newstitle}>Sidste nyt...</h2>
      <Fetching />
      <Footer />

    </>
  );
};
