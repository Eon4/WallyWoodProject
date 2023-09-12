import style from '../styles/mainpage.module.scss'
import { Navigation } from "../Components/Navigation";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";



export const MainPage = () => {
  return (
    <>
    {/* <h1>Home page</h1> */}
      <Navigation />
      <Header />
      <h2 className={style.newstitle}>Sidste nyt...</h2>
      <Footer />

    </>
  );
};