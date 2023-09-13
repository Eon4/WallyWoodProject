import style from '../styles/header.module.scss'
import HeaderImg from  '../assets/images/seats.jpg'

export function Header(){
    return (
        <header>
            {/* <h1 className={style.title}>WALLYWOOD</h1> */}
            <img className={style.Headerimg} src={HeaderImg} alt="header" />

        </header>
    )
}