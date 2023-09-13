import style from '../styles/login.module.scss'

import { Navigation } from '../Components/Navigation'

export function Login(){
    return (
        <div>
        <Navigation /> 
       
                           
          <h1 className={style.loginhere}> This is the Login page</h1>


        </div>

    )
}