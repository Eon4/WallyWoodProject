import { Outlet } from "react-router-dom";
import { Navigation } from '../Components/Navigation'
import { Footer } from "../Components/Footer";

export const MainLayout = () => {
    return(
        <main>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </main>
    )
}