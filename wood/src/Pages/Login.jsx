import style from '../styles/login.module.scss'
import { useState } from "react";
import { LoginPage } from "../Pages/LoginPage";
import { SignUp } from "../Pages/SignUp";
import { Footer } from "../Components/Footer";



export const Login = () => {
  const [isLoginTrue, setIsLoginTrue] = useState(true);

  if (isLoginTrue)
    return (
      <>
        <LoginPage />
        <button className = {style.NewButton} onClick={() => setIsLoginTrue(false)}>Ny bruger?</button>
      </>
    );
  else
    return (
      <>
        <SignUp />
        
        <button className = {style.NewButton} onClick={() => setIsLoginTrue(true)}>Allerede bruger?</button>
      <Footer/>
      </>
    );
};




