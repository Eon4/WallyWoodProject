import { Children } from "react";
import style from '../styles/onClickbutton.module.scss'

export const OnClickButton = ({clickEvent, children}) => {

    return(
        <button className={style.OnClickButton} onClick={clickEvent}>{children}</button>
    )
}