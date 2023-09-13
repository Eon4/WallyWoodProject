import { useEffect } from 'react';
import style from "../Styles/navigation.module.scss";
import { Link } from 'react-router-dom';
import { FaBasketShopping } from "react-icons/fa6"




export const Navigation = () => {
 

      return (

              <nav className={style.navStyle}>
                        <h1 className={style.title}>WALLYWOOD</h1>

                      <FaBasketShopping className={style.cart}/>

             <ul>
            <li>
          <Link to="/MainPage">HJEM</Link>
            <Link to="/Posters">PLAKATER</Link>
            <Link to="/about">OM OS</Link>
            <Link to="/contact">KONTAKT</Link>
            <Link to="/login">LOGIN</Link>
            </li>

            </ul>

               </nav>
          
          )
        }